import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.findRecord('education', params.id );
},

   setupController: function(controller ,model) {
       controller.set('education',model);
       controller.set('employees', this.store.peekAll('employee'));
  }
});
