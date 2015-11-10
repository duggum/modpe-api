#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# go to the out directory and create a *new* Git repo
echo -e "Initialize repo . . .\n"
cd jsdoc
git init

echo -e "Creating README file . . .\n"
cat > README.md <<EOF
## ModPE API Documentation
#### This branch is automatically built by [Travis CI](https://travis-ci.org/)
#### For full source code, go to the [master branch](https://github.com/duggum/modpe-api/tree/master)
[![Build Status](https://travis-ci.org/duggum/modpe-api.svg?branch=master)](https://travis-ci.org/duggum/modpe-api)
EOF

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "duggum@users.noreply.github.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
echo -e "Commit changes . . .\n"
git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
echo -e "Push to gh-pages . . .\n"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
