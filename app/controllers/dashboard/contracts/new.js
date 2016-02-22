import Ember from 'ember';

export default Ember.Controller.extend({

statuses :["Single","Family"],
actions :{
  updateEmployee: function(empId) {
    var employee = this.store.peekRecord('employee', empId);
    this.set('employee', employee);
  },

  updateStatus: function(component, id) {
    this.set('.status', id);
  },




  createContract: function(){
    var controller = this;

    var contract = this.store.createRecord('contract', {
      status: this.get('status'),
      cstart: this.get('cstart'),
      cend: this.get('cend'),
      pstart: this.get('pstart'),
      pend: this.get('pend'),
      nameiqama: this.get('nameiqama'),
      proiqama: this.get('proiqama'),
      employee: this.get('employee')

  });
  contract.save().then(function(){

        controller.set('status','');
        controller.set('cstart','');
        controller.set('cend','');
        controller.set('pstart','');
        controller.set('pend','');
        controller.set('nameiqama','');
        controller.set('proiqama','');
        controller.set('employee','');
          controller.transitionToRoute('dashboard.contracts.contract' , contract);
        }).catch(function(){
          // controller.notifications.addNotification({
          //   message: 'Sorry, cant save at the moment !' ,
          //   type: 'error',
          //   autoClear: true
          // });
        });
}

}
});
