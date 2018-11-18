const fs = require('fs-extra');

const { db } = require('../constants');
const { errorHandler } = require('../utils');

module.exports = async (id, options = {}) => {
  try {
    const storage = await fs.readJSON(db.storage);

    const existingRecord = storage.find(record => record.id === id);
    const existinRecordIndex = storage.findIndex(record => record.id === id);

    const updatedRecord = {
      ...existingRecord,
      ...options,
      id: existingRecord.id,
    };

    const updatedStorage = [
      ...storage.slice(0, existinRecordIndex),
      updatedRecord,
      ...storage.slice(existinRecordIndex + 1),
    ];

    await fs.writeJSON(db.storage, updatedStorage);

    return updatedRecord;
  } catch (error) {
    return errorHandler(error);
  }
};
