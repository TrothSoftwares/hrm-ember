import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      employee: this.store.findRecord('employee', params.id , {reload: true}),
    });
  },

  setupController: function(controller ,model) {
    controller.setProperties(model);
  }
});
