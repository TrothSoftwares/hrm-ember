import Ember from 'ember';

export default Ember.Controller.extend({

  edtypes: [ "High School", "Diploma" , "Graduate","Post Graduate", "Doctrate"],
  degs:["BS","MS","BE","ME","BTech","MTech","MBA","BCom","MCom","Phd"],


  actions :{


    updateEmployee: function(empid) {
       var employee = this.store.peekRecord('employee', empid);
       this.set('employee', employee);
       },

    updateVerifiedBy: function(verifybyid) {
      var verifiedby = this.store.peekRecord('employee', verifybyid);
      this.set('verifiedby', verifiedby);
    },

    updateEdtype: function(component , id) {
            this.set('edtype', id);
    },

    updateDegree: function(component , id) {
            this.set('deg', id);
    },


    createEducation: function(){
      var controller = this;

      var education = this.store.createRecord('education', {
        edtype: this.get('edtype'),
        degyear: this.get('degyear'),
        deg: this.get('deg'),
        special: this.get('special'),
        verified: this.get('verified'),
        employee: this.get('employee'),
        verifiedby: this.get('verifiedby')

    });
    education.save().then(function(){

          controller.set('edtype','');
          controller.set('degyear','');
          controller.set('deg','');
          controller.set('special','');
          controller.set('verified','');
          controller.set('employee','');

            controller.transitionToRoute('dashboard.educations.education' , education);
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
