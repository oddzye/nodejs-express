const path = require('path');

const textPath = path.join('content', 'subfolder', 'text.txt');
console.log(textPath);

const basename = path.basename(textPath);
console.log(basename);

const absPath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absPath);
