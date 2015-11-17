(function IIFE() {
  'use strict';

  var path = require('path');
  var _ = require('ramda');

  let all = {
    env: process.env.NODE_ENV,
    root: path.normalize(__dirname + '/../..'),
    port: process.env.PORT || 9000,
    mongo: {
      uri: 'mongodb://localhost/example-dev',
      options: {
        db: {
          safe: true
        }
      }
    }
  };

  let envVars = {
    port: process.env.PORT,
    mongo: {
      uri: process.env.MONGO_URI
    }
  };

  /* istanbul ignore next */
  module.exports = _.mergeAll([all, require('./' + process.env.NODE_ENV + '.js') || {}, envVars]);
})();
