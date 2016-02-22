import Ember from 'ember';

export default Ember.Controller.extend({
  genders: [ "male", "female"],
  marstatuses: [ "single", "married"],
  religions: [ "hindu", "muslim" , "christian"],
  nationalities:['india','russia','china','japan'],


  


  actions: {
    updateGender: function(component, id) {
      this.set('employee.gender', id);
    },



    updateMarStatus: function(component, id) {
      this.set('employee.marstatus', id);
    },

    updateReligion: function(component, id) {
      this.set('employee.religion', id);
    },

    updateNationality: function(component, id) {
      this.set('employee.nationality', id);
    },


    updateEmployee: function(callback){
      var controller = this;
      var  employee = controller.get('employee');
      var promise = employee.save();
      callback(promise);
    },


  }
});
