var reqdir = require('require-dir');

// Require all tasks from 'gulp/tasks' including subfolders
reqdir('./gulp/tasks', { recurse: true });
