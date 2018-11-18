const fs = require('fs-extra');

const { db } = require('../constants');
const { errorHandler, logger } = require('../utils');

module.exports.connect = async () => {
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
