(function IIFE() {
  'use strict';

  module.exports = {
    port: 8080,
    mongo: {
      uri: process.env.MONGO_URI,
      autoIndex: false
    }
  };
})();
