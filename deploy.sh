set -e

npm run build

cp -f deploy.txt dist/.gitignore
cp -f CNAME dist/CNAME

cd dist

git init
git remote add origin https://github.com/brimwd/Honor-Software.git
git add -A
git commit -am 'deploy'

git push -f origin master:gh-pages

cd -
