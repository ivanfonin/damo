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
    /* Files
    --------
    All .php and language files from 'src' should be copied to final theme
    */
    files: {
        languages: {
            src: src + 'languages/**/*',
            dest: build + 'languages/'
        },
        php: {
            src: src + '**/*.php',
            dest: build
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
        },
        sass: {
            includePaths: [bower],
            precision: 8
        }
    },
    /* Browserify
    -------------
    Separate bulndle will be generated for each item in bundleConfigs
    */
    browserify: {
        bundleConfigs: [{
            entries: src + 'js/**/*.js',
            dest: build,
            outputName: 'app.js',
            extensions: ['.coffee', '.hbs'], // Additional file extentions to make optional
            require: ['jquery', 'backbone/node_modules/underscore']
                // list of modules to make require-able externally
                // See https://github.com/greypants/gulp-starter/issues/87 for note about
                // why this is 'backbone/node_modules/underscore' and not 'underscore'
        }, {
            entries: src + 'js/contacts.js',
            dest: build,
            outputName: 'contacts.js',
            external: ['jquery', 'underscore']
                // list of externally available modules to exclude from the bundle
        }]
    }
};