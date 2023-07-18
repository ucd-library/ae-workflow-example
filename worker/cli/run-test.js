const model = require('../lib/model.js');

let [node, script, finPath] = process.argv;
let id = finPath.split('/').pop();

model.runTest(id);