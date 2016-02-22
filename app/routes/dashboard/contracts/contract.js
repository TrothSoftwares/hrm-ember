import Ember from 'ember';

export default Ember.Route.extend({

   model: function(params) {

     return this.store.findRecord('contract', params.id);
 },


  setupController: function(controller ,model ) {

    controller.set('contract' ,model);
    controller.set('employees',this.store.peekAll('employee'));

  }
});
