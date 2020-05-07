set -e

npm run build

cp -f deploy.txt dist/.gitignore
cd dist

git init
git add -A
git commit -am 'deploy'

git push -f https://github.com/brimwd/Honor-Software.git gh-pages

cd -
