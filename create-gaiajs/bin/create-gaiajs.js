#!/usr/bin/env node

'use strict';

if (process.argv.slice(2).every(function (item) {
  return !item.startsWith('--package=');
})) {
  process.argv.push('--package=gaiajs-init');
}

require('egg-init/bin/egg-init');
