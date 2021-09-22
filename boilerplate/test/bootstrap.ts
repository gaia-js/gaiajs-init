const path = require('path');

import { newTester } from '@gaiajs/gaiajs/test/bootstrap';

export default newTester({
  baseDir: path.resolve(__dirname, '..'),
});
