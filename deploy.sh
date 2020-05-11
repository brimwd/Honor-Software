set -e

# Build for production
npm run build

# Custom .gitignore file to banish .DS_store
cp -f deploy.txt dist/.gitignore

# To use custom domain
cp -f CNAME dist/CNAME

cd dist

# connect to gh-pages branch, commit contents of '/dist/', and force push
git init
git remote add origin https://github.com/brimwd/Honor-Software.git
git add -A
git commit -am 'deploy'


git push -f git@github.com:brimwd/Honor-Software.git master:gh-pages

# OR to deploy from another branch, git push -f origin master:gh-pages
# git push -f origin master:gh-pages

cd -
