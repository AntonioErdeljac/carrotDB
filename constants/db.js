const os = require('os');
const path = require('path');

const homeDir = os.homedir();

module.exports.fullPath = path.join(homeDir, '/carrotDB');
module.exports.storage = path.join(homeDir, '/carrotDB/storage.json');
