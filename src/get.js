const fs = require('fs-extra');

const { errorHandler } = require('../utils');
const { db } = require('../constants');

module.exports = async (id) => {
  try {
    const storage = await fs.readJSON(db.storage);

    const existingRecord = storage.find(record => record.id === id);

    return existingRecord;
  } catch (error) {
    return errorHandler(error);
  }
};
