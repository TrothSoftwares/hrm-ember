import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', {path: '/'}, function() {
    this.route('employees', function() {
      this.route('new');
      this.route('employee', { path: ':id' }, function() {
      });
    });

    this.route('educations', function() {
      this.route('new');
      this.route('education', { path: ':id' }, function() {
      });
    });
    this.route('contracts', function() {
      this.route('new');
      this.route('contract', { path: ':id' }, function() {
      });

    });
    this.route('vehicles', function() {
      this.route('new');
      this.route('vehicle', { path: ':id' }, function() {
      });
    });
    this.route('iqama');
    this.route('passport');
    this.route('visa');
    this.route('insurance');
  });
});

export default Router;
