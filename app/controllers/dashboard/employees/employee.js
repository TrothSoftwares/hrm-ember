import Ember from 'ember';

export default Ember.Controller.extend({
  genders: [ "male", "female"],
   gender: null,

   actions: {
     updateGender: function(component, id, value) {
       var controller = this;
       var  employee = controller.get('employee');
       console.log(id + value +component);
       employee.set('gender', id);
     },


     updateEmployee: function(){
       var controller = this;
       var  employee = controller.get('employee');
       employee.save();
     },


   }
});
