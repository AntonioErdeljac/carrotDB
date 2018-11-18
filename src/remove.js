const fs = require('fs-extra');

const { errorHandler } = require('../utils');
const { db } = require('../constants');

module.exports = async (id) => {
  try {
    const storage = await fs.readJSON(db.storage);
    const oldRecord = storage.find(record => record.id === id);
    const updatedStorage = storage.filter(record => record.id !== id);

    await fs.writeJSON(db.storage, updatedStorage);

    return oldRecord;
  } catch (error) {
    return errorHandler(error);
  }
};
