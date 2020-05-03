set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:brimwd/Honor-Software.git master:gh-pages

cd -
