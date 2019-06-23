const shell = require('shelljs');

shell.sed('-i', '"preinstall": "npm install ../wiki_builder/",', '', 'package.json');
