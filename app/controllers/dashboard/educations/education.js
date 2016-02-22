import Ember from 'ember';

export default Ember.Controller.extend({

  edtypes: [ "High School", "Diploma" , "Graduate","Post Graduate", "Doctrate"],
  degs:["BS","MS","BE","ME","BTech","MTech","MBA","BCom","MCom","Phd"],


  actions :{


    updateEmployee: function(empId) {
      var employee = this.store.peekRecord('employee', empId);
      this.set('education.employee', employee);
    },

    updateVerifiedBy: function(verifybyid) {
      var verifiedby = this.store.peekRecord('employee', verifybyid);
      this.set('education.verifiedby', verifiedby);
    },

    updateEdtype: function(component , id) {
            this.set('education.edtype', id);
    },

    updateDegree: function(component , id) {
            this.set('education.deg', id);
    },





    updateEducation: function(){
      var controller = this;
      var  education = controller.get('education');
      education.save();
    },


  }

});
