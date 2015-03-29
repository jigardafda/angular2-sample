var gulp = require('gulp');

// loading tasks 
require('./gulp/build-angular2')(gulp);
require('./gulp/npm-to-vendors')(gulp);
require('./gulp/connect')(gulp);
require('./gulp/gen-deps')(gulp);
require('./gulp/copy')(gulp);
require('./gulp/system-build')(gulp);
require('./gulp/uglify')(gulp);
require('./gulp/less')(gulp);
require('./gulp/clean')(gulp);
require('./gulp/build')(gulp);
require('./gulp/default')(gulp);
