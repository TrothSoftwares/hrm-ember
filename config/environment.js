/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hrm-ember',
    environment: environment,
    baseURL: '/',
    // locationType: 'auto',
    locationType: process.env.EMBER_CLI_ELECTRON ? 'hash' : 'auto',

    // TODO: SELF * SHOULD BE SAFE PROOFED: about the connect src and cors configs.
    contentSecurityPolicy: {
      'default-src': "'self' *",
      'script-src': "'self' *",
      'connect-src': "'self' *",
      'font-src': "'self'  data: http://fonts.gstatic.com * ",
      'media-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' *",
      'img-src' : "'self'"
    },
    'ember-cli-notifications': {
      icons: 'bootstrap'
    },
    EmberENV: {
      FEATURES: {

      }
    },

    APP: {

    }
  };



  ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    serverTokenEndpoint:  ENV.APP.host  + '/users/sign_in',
    authorizer: 'devise',
    crossOriginWhitelist: ['*'],
  };






  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'dashboard',
    routeIfAlreadyAuthenticated: 'dashboard'
  };






  if (environment === 'development') {
    ENV.APP.host =  'http://localhost:3000';
    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_TRANSITIONS = false;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'http://hrm-rails.herokuapp.com';
  }

  return ENV;
};
