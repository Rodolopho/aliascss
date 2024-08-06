// const path = require('path');
import path from 'path';

export default {
  entry: './lib/build/index.js',
  output: {
    filename: 'aliascss.js',
    path: path.resolve('dist'),
  },
  mode:'production',
};