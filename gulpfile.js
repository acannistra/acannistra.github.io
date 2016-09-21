var requireDir = require('require-dir');
require('es6-promise').polyfill();
// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
