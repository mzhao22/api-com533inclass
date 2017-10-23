'use strict';
const fs = require('fs');

fs.readFile('target.txt', (err,data) => {
  if(err) {
    if (err.code) === 'ENOENT') {
      consile.error('File `target.txt` does not exist');
      return;
  }
  throw err;
}

}
