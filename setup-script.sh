echo "title:"
read title
#when add -i when script finished
sed -i "s/temp-title/$title/" index.html
sed -i "s/temp-title/$title/" package.json
echo "description:"
read description
sed -i "s/temp-description/$description/" package.json
rm -r .git
cd ..
mv -r Boilerplate/ $title/
cd $title/
npm init -y
npm install --save-dev gulp gulp-sass browser-sync gulp-autoprefixer gulp-sourcemaps
echo "Boilerplate git has been removed"
echo "Titles of index.html & package.json have been changed"
echo "Folder name changed to title"
echo "node package manager & dependencies have been installed"
echo "package.json urls need to be edited"
echo "The rest is on u; If you're not me, you should change the author info"
