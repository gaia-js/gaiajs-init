const path = require('path');

import { newTester } from 'egg-gaiajs/test/bootstrap';

export default newTester({
  baseDir: path.resolve(__dirname, '..'),
});
