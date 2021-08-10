# Project Name & Description
PoolsMagnic <br>
PoolsMagnic built with React and React-Redux and hooks.
# Project Status
This project is currently in development mode.
# Installation and Setup Instructions
Below you will find some information on how to perform Installation and Setup tasks.
# Run App in Development mode
**Clone this repository**
```
git clone "https://github.com/richest/poolsMagnic.git"
```
**Install Dependency**
```
npm install
```
**Start the application in development mode**
```
 npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.
Static files are served from the `public` folder, project JavaScript files are bundled from the `src` folder.
# Run App in Production build
**Start the application in Production mode**
 To build the project for Production Env run the following command.
```
npm run build
```
And serve by
```
serve -s build
```
The app will run on 5000 port for the Production mode.
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
# Folders and Files Structure
Your project directory should look something like this:
```
poolsmagnic
  node_modules/
  public/
    assets/
    index.html
    favicon.ico
  src/
    library/
    main/
    modules/
    App.js
    index.js
   package.json
   README.md
```
For the project to build, **these files must exist with exact filenames**:
* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
You can delete or rename the other files.
You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.
You need to **put any JS and CSS files inside `src`**, otherwise, Webpack won't see them.
Only files inside `public` can be used from `public/index.html`.
# Dependencies
* React, React-DOM and React Redux
 See `package.json` for more Dependencies and packages Required.
