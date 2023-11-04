#!/usr/bin/env sh

set -e

yarn build

cd .vuepress/dist

echo 'blog.chora.studio' >> CNAME

git init
git add -A
git commit -m 'publish'

git push https://github.com/chora-studio/blog master:gh-pages -f
