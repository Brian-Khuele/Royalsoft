const removeSync = require('fs-extra').removeSync;
const copySync = require('fs-extra').removeSync;
const { exec } = require('child_process');

try {
  // Remove current build
  removeSync('./dist/');
  // Copy front-end files
  copySync('./src/public', './dist/public');
  copySync('./src/views', './dist/views');
  // Transpile the typescript files
  exec('tsc --build tsconfig.prod.json');
} catch (err) {
  console.log(err);
}
