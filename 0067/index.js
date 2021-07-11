
const maxTrianglePaths = require('../0018/')
const TRIANGLE = require('fs').readFileSync(require('path').resolve(__dirname, 'triangle.txt')).toString().slice(0, -1)

console.log(maxTrianglePaths(TRIANGLE))
