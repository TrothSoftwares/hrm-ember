import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
  createVehicle: function(){
    var controller = this;

    var vehicle = this.store.createRecord('vehicle', {
      regno: this.get('regno'),
      modelname: this.get('modelname'),
      isthiedate: this.get('isthiedate'),
      dname: this.get('dname'),
      nextsdate: this.get('nextsdate'),
      remarks: this.get('remarks'),
  });

  vehicle.save().then(function(){

        controller.set('regno','');
        controller.set('modelname','');
        controller.set('isthiedate','');
        controller.set('dname','');
        controller.set('nextsdate','');
        controller.set('remarks','');
          controller.transitionToRoute('dashboard.vehicles.vehicle' , vehicle);
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
