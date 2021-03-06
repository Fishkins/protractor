// The main suite of Protractor tests.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to this directory.
  suites: {
    okspec: 'suites/ok_spec.js',
    okmany: ['suites/ok_spec.js', 'suites/ok_2_spec.js'],
    failingtest: 'suites/always_fail_spec.js'
  },

  // Exclude patterns are relative to this directory.
  exclude: [
    'basic/exclude*.js'
  ],

  chromeOnly: false,

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000',

  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  }
};
