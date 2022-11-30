import path from 'path';
export default {
    entry: './build.js',
  output: {
    filename: 'aliascss.js',
    path: path.resolve('build'),
  },
  mode:'production'
}



