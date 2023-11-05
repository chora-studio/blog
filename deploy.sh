#!/usr/bin/env sh

# abort on errors
set -e

# clean up previous
rm -rf dist

# build website
bun run build

# change to build directory
cd dist

# create .nojekyll file
touch .nojekyll

# git init and commit
git init
git add -A
git commit -m 'publish'

# push to gh-pages branch
git push https://github.com/chora-studio/blog master:gh-pages -f

cd -
