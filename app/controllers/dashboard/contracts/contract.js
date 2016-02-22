import Ember from 'ember';

export default Ember.Controller.extend({

statuses :["Single","Family"],
actions :{
  updateEmployee: function(empId) {
    var employee = this.store.peekRecord('employee', empId);
    this.set('contract.employee', employee);
  },

  updateStatus: function(component, id) {
    this.set('contract.status', id);
  },

  updateContract: function(){
    var controller = this;
    var  contract = controller.get('contract');
    contract.save();
  },

}
});
