/*
config.js
=========
Gulp configuration file for the Themegulper workflow.
*/

/* Theme
--------
theme - Name of your WordPress theme.
*/
var theme = "starter";

/* Paths
--------
src   - Source files of your theme. Edit only in this directory.
build - Working version of your theme for testing purposes.
dist  - Distribution version of the WordPress theme with minified styles, scripts, etc.
.temp - Temporary folder. Remove it with 'gulp clean' command.
bower - Folder containing all Bower components.
*/
var src = "./src/",
    build = "./build/" + theme + "/",
    dist = "./dist/" + theme + "/",
    temp = "./.temp/";

/* Settings
-----------
*/
module.exports = {
    /* Project
    ----------
    Main project folders
    */
    project: {
        src: src,
        build: build,
        dist: dist,
        temp: temp
    },
    /* Folders
    ----------
    Helper project folders based on WordPress theme structure
    */
    folders: {
        languages: {
            build: build + 'languages/',
            dist: dist + 'languages/'
        },
        fonts: {
            src: src + 'fonts/',
            build: build + 'fonts/',
            dist: dist + 'fonts/'
        },
        images: {
            build: build + 'images/',
            dist: dist + 'images/'
        },
        js: {
            src: src + 'js/',
            build: build + 'js/',
            dist: dist + 'js/'
        },
        scss: {
            src: src + 'scss/'
        },
        css: {
            build: build + 'css/',
            dist: dist + 'css/'
        }
    },
    /* Files
    --------
    All PHP files, languages, scripts, fonts, images and styles source files of the WordPress theme
    */
    files: {
        languages: {
            src: src + 'languages/**/*'
        },
        php: {
            src: src + '**/*.php'
        },
        fonts: {
            src: src + 'fonts/**/*'
        },
        images: {
            src: src + 'images/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)'
        },
        js: {
            src: src + 'js/**/*.js'
        },
        scss: {
            src: src + 'scss/style.scss', // Main .scss file with @import's of all other .scss files!
            all: src + 'scss/**/*.scss'   // Need this path to 'watch' all files for changes
        }
    },
    /* Images
    ---------
    Images optimization settings for 'gulp-imagemin' plugin
    */
    images: {
        imagemin: {
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        },
        screenshot: {
            src: src + 'screenshot.png'
        }
    },
    /* Browsersync
    --------------
    Images optimization settings for 'gulp-imagemin' plugin
    */
    browsersync: {
        proxy: 'themetest.dev'
    }
};
