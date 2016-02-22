import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    updateVehicle: function(){
      var controller = this;
      var  vehicle = controller.get('vehicle');
      vehicle.save();
      
    }
  }
});
