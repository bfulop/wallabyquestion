module.exports = function (wallaby) {
  return {
    files: [
      'exercises/**/*.js',
      { pattern: 'exercises/**/*_spec.js', ignore: true },
      {
        pattern: 'support.js',
        instrument: false,
        load: true,
        ignore: false
      },
      {
        pattern: 'support_1.js',
        instrument: false,
        load: true,
        ignore: false
      }
    ],

    tests: ['exercises/**/*_spec.js'],

    testFramework: 'mocha',

    env: {
      type: 'node'
    }

    // setup: function (wallaby) {
    //   global.insp = f => (f && f.inspect ? f.inspect() : f)
    //   global.td = require('testdouble')
    //   global.expect = require('chai').expect
    // }
  }
}
