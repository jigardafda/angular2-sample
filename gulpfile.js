var gulp = require('gulp');

// loading tasks 
require('./gulp/build-angular2')(gulp);
require('./gulp/npm-to-vendors')(gulp);
require('./gulp/connect')(gulp);
require('./gulp/gen-deps')(gulp);
require('./gulp/default')(gulp);
