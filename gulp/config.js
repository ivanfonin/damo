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
*/
var src = "./src/",
    build = "./build/" + theme + "/",
    dist = "./dist/" + theme + "/";

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
        dist: dist
    },
    /* Folders
    ----------
    Helper project folders
    */
    folders: {
        languages: {
            dest: build + 'languages/'
        },
        php: {
            dest: build
        },
        fonts: {
            dest: build + 'fonts/'
        },
        js: {
            dest: src + 'js/'
        }
    },
    /* Files
    --------
    All .php, language files, scripts and fonts source files
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
        js: {
            src: src + 'js/**/*.js'
        }
    },
    /* Images
    ---------
    Images should be just copied to 'build' version and optimized for 'dist'
    */
    images: {
        build: {
            src: src + '**/*(*.png|*.jpg|*.jpeg|*.gif)',
            dest: build
        },
        dist: {
            src: [dist + '**/*(*.png|*.jpg|*.jpeg|*.gif)', '!' + dist + 'screenshot.png'],
            imagemin: {
                optimizationLevel: 7,
                progressive: true,
                interlaced: true
            },
            dest: dist
        }
    },
    /* Styles
    ---------
    Styles should be compiled with sass plugin, autoprefixed and minified
    */
    styles: {
        build: {
            src: [src + '*.scss', '!' + src + 'scss/_*.scss'], // Ignore partials
            dest: build
        },
        dist: {
            src: [dist + 'style.css', '!' + dist + 'style.min.css'],
            minify: {
                keepSpecialComments: 1
            },
            dest: dist
        },
        autoprefixer: {
            browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
        },
        rename: {
            suffix: '.min'
        },
        minify: {
            keepSpecialComments: 1
        }/*,
        sass: {
            includePaths: [bower],
            precision: 8
        }*/
    }
};