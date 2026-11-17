"""Scoped publication gate for the Semana de la Ciencia web edition."""
from pathlib import Path
import argparse, hashlib, json, re, sys, zipfile, subprocess
from html.parser import HTMLParser
from xml.etree import ElementTree as ET
from pypdf import PdfReader
from PIL import Image

ROOT=Path(__file__).resolve().parents[2]
SLUG='de-datos-a-decisiones-2026'
CONTROL=ROOT/'_publication/semana-ciencia'
REVIEW=CONTROL/'review.json'
PATTERNS={
 'private filesystem path':r'(?:[A-Z]:[\\/]Users[\\/]|/Users/usuario|Documents[\\/]ChatGPT|file://)',
 'production notes':r'PRODUCCI[ÓO]N VISUAL|produccion-relato|prompts\.json|\bchat_id\b|\bmessage_id\b|CRM ops|notas-t[eé]cnicas',
 'private conversation':r'seg[uú]n tu aclaraci[oó]n|como me pediste|por petici[oó]n del (?:autor|usuario)|no inventamos logros|la investigaci[oó]n se entrega|nota al redactor|marcador pendiente|los que hemos venido armando',
 'rehearsal direction':r'\[\s*\d{2}:\d{2}\s*[–—-]\s*\d{2}:\d{2}|[Cc][óo]mo practicar|[Aa]c[oó]taciones de ensayo',
 'private meeting access':r'https?://[^\s"<>]*(?:zoom\.us/|meet\.google\.com/)|[?&]pwd=',
 'unresolved placeholder':r'__(?:TITLE|BASE|VERSION|SECTIONS)__|\bTODO\b|\bTBD\b',
}
class VisibleHTML(HTMLParser):
    def __init__(self):super().__init__();self.parts=[];self.skip=0
    def handle_starttag(self,tag,attrs):
        if tag in ('script','style'):self.skip+=1
        for key,val in attrs:
            if val and key in ('href','src','content','alt','title','aria-label'):self.parts.append(val)
    def handle_endtag(self,tag):
        if tag in ('script','style'):self.skip=max(0,self.skip-1)
    def handle_data(self,data):
        if not self.skip:self.parts.append(data)

def extracted(path):
    ext=path.suffix.lower()
    if ext=='.png':
        with Image.open(path) as im:return json.dumps(im.info,default=str,ensure_ascii=False)
    if ext=='.mp3':
        raw=path.read_bytes()[:65536]
        return raw.decode('utf-8',errors='ignore')+'\n'+raw.decode('utf-16',errors='ignore')
    if ext=='.pdf':
        reader=PdfReader(path)
        parts=[str(reader.metadata or {})]
        for page in reader.pages:
            parts.append(page.extract_text() or '')
            for annotation in page.get('/Annots',[]):
                obj=annotation.get_object();parts.append(str(obj.get('/A','')))
        return '\n'.join(parts)
    if ext=='.pptx':
        parts=[]
        with zipfile.ZipFile(path) as archive:
            for name in archive.namelist():
                if name.endswith('.xml'):
                    parts.extend(ET.fromstring(archive.read(name)).itertext())
        return '\n'.join(parts)
    if ext in ('.html','.json','.js','.css','.txt','.md'):
        raw=path.read_text(encoding='utf-8')
        if ext=='.html':
            parser=VisibleHTML();parser.feed(raw);return raw+'\n'+'\n'.join(parser.parts)
        return raw
    return ''

def audit(path):
    text=extracted(path)
    return [label for label,pattern in PATTERNS.items() if re.search(pattern,text,re.I)]

def files():
    return sorted([ROOT/'index.html',ROOT/'.gitattributes',*(p for p in (ROOT/SLUG).rglob('*') if p.is_file()),*(p for p in CONTROL.iterdir() if p.is_file() and p.name!='review.json')])

def manifest():
    return {p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in files()}

def validate():
    errors=[]
    if not REVIEW.exists():raise ValueError('Editorial review record is missing')
    receipt=json.loads(REVIEW.read_text(encoding='utf-8'))
    if receipt.get('reviewer')!='Codex (agent editorial review)' or not all(receipt.get('checks',{}).get(x) for x in ('full_public_text','metadata_and_links','downloads_rendered','desktop_and_mobile')):
        errors.append('Required agent review is absent or incomplete')
    if receipt.get('sha256')!=manifest():errors.append('Files changed after review or file inventory differs')
    for p in files():
        if p.is_relative_to(CONTROL):continue
        for reason in audit(p):errors.append(f'{p.relative_to(ROOT)}: {reason}')
    talk=json.loads((ROOT/SLUG/'talk.json').read_text(encoding='utf-8'))
    if len(talk['slides'])!=4:errors.append('Expected four slides')
    for s in talk['slides']:
        if not s['transcript'].strip() or not s['sources']:errors.append('Transcript or source list missing')
        if not (ROOT/SLUG/s['image']).is_file():errors.append('Slide image missing')
        if not (ROOT/SLUG/s['audio']).is_file():errors.append('Slide narration missing')
    if errors:raise ValueError('\n'.join(errors))
    return {'status':'pass','scope':[SLUG+'/**','index.html','.gitattributes','_publication/semana-ciencia/*'],'files':len(files()),'reviewer':receipt['reviewer']}

def validate_tree(git='git',ref='HEAD'):
    for path,expected in manifest().items():
        raw=subprocess.check_output([git,'-C',str(ROOT),'show',(':' if ref==':' else ref+':')+path])
        if hashlib.sha256(raw).hexdigest()!=expected:raise ValueError('Git content differs from reviewed bytes: '+path)
    return {'git_bytes':'pass','ref':ref}

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--audit',type=Path);parser.add_argument('--committed',action='store_true');parser.add_argument('--git',default='git');args=parser.parse_args()
    try:
        if args.audit:
            failures=audit(args.audit)
            if failures:raise ValueError('; '.join(failures))
            print(json.dumps({'status':'pass','file':args.audit.name}))
        else:
            print(json.dumps(validate()))
            if args.committed:print(json.dumps(validate_tree(args.git)))
    except Exception as exc:print('PUBLICATION BLOCKED: '+str(exc),file=sys.stderr);sys.exit(1)
