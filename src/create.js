const fs = require('fs-extra');

const { errorHandler, id } = require('../utils');
const { db } = require('../constants');

module.exports = async (options = {}) => {
  try {
    const storage = await fs.readJSON(db.storage);

    const updatedOptions = {
      ...options,
      id: id.generate(),
    };

    await fs.writeJSON(db.storage, [...storage, updatedOptions]);

    return updatedOptions;
  } catch (error) {
    return errorHandler(error);
  }
};
