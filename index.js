const fs = require('fs-extra');

const src = require('./src');
const { db } = require('./constants');
const { errorHandler, logger } = require('./utils');

const carrotDB = async () => {
  try {
    if (!fs.existsSync(db.fullPath)) {
      await fs.mkdir(db.fullPath);
      await fs.writeJSON(db.storage, []);
    }

    return logger('[carrotDB]: Successfully started');
  } catch (error) {
    return errorHandler(error);
  }
};

carrotDB();

module.exports.create = src.create;
module.exports.update = src.update;
module.exports.remove = src.remove;
