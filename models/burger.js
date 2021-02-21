const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    _all("burgers", (res) => {
      cb(res);
    });
  },
  create: (cols, vals, cb) => {
    _create("burger", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    _update("burger", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    _delete("burger", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;