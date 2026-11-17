"""Validate the reviewed package, commit it and publish to the existing Pages branch."""
from pathlib import Path
import argparse, shlex, subprocess, sys
from editorial_gate import ROOT, REVIEW, manifest, validate, validate_tree

parser=argparse.ArgumentParser();parser.add_argument('--git',default='git');args=parser.parse_args()
def git(*cmd):return subprocess.check_output([args.git,'-C',str(ROOT),*cmd],text=True).strip()
if git('branch','--show-current')!='main':raise SystemExit('Publication requires main')
if git('diff','--cached','--name-only'):raise SystemExit('Index must be empty before publication')
print(validate())
# The pre-push hook repeats this gate for this checkout. It does not claim to
# protect unrelated talks or other publishers using a different checkout.
hook=ROOT/'.git/hooks/pre-push'
gate=Path(__file__).with_name('editorial_gate.py')
old_hook='#!/bin/sh\nexec '+shlex.quote(sys.executable)+' '+shlex.quote(str(gate))+'\n'
new_hook='#!/bin/sh\nexec '+shlex.quote(sys.executable)+' '+shlex.quote(str(gate))+' --committed --git '+shlex.quote(args.git)+'\n'
if hook.exists() and hook.read_text(encoding='utf-8') not in (old_hook,new_hook):raise SystemExit('An unrelated pre-push hook must be retained and reviewed before installing this gate')
hook.write_text(new_hook,encoding='utf-8',newline='\n')
hook.chmod(0o755)
paths=list(manifest())+[REVIEW.relative_to(ROOT).as_posix()]
git('add','--sparse','--',*paths)
git('add','--renormalize','--sparse','--',*paths)
print(validate())
print(validate_tree(args.git,ref=':'))
git('commit','-m','Publish De datos a decisiones as a narrated Hadox Talks edition')
print(validate_tree(args.git))
print(git('push','origin','HEAD:main'))
print(git('rev-parse','HEAD'))
