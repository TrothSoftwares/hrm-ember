import Ember from 'ember';

export default Ember.Controller.extend({


  genders: [ "male", "female"],
  marstatuses: [ "single", "married"],
  religions: [ "hindu", "muslim" , "christian"],
  nationalities:['india','russia','china','japan'],

  actions:{


    updateGender: function(component, id) {
      var controller = this;
      controller.set('gender', id);
    },



      updateMarStatus: function(component, id) {
        var controller = this;
        controller.set('marstatus', id);
      },

      updateReligion: function(component, id) {
        var controller = this;
        controller.set('religion', id);
      },

      updateNationality: function(component, id) {
        var controller = this;
        controller.set('nationality', id);
      },


    createEmployee: function(){
      var controller = this;


      var employee = this.store.createRecord('employee', {
        empno: this.get('empno'),
        firstname: this.get('firstname'),
        middlename:this.get('middlename'),
        lastname: this.get('lastname'),
        gender: this.get('gender'),
        dob: this.get('dob'),
        passportno:this.get('passportno'),
        pidate:this.get('pidate'),
        pedate: this.get('pedate'),
        iqamano:this.get('iqamano'),
        iqidate:this.get('iqidate'),
        iqedate:this.get('iqedate'),
        insuranceno:this.get('insuranceno'),
        iidate:this.get('iidate'),
        iedate:this.get('iedate'),
        visano:this.get('visano'),
        vidate:this.get('vidate'),
        vedate:this.get('vedate'),
        marstatus:this.get('marstatus'),
        religion: this.get('religion'),
        nationality:this.get('nationality'),
        civstatus: this.get('civstatus'),
        designation:this.get('designation'),
        department:this.get('department'),
        speciali: this.get('speciali'),
        exp:this.get('exp'),
        email:this.get('email'),
        image:this.get('image'),
});

employee.save().then(function(){

      controller.set('empno','');
      controller.set('firstname','');
      controller.set('lastname','');
      controller.set('middlename','');
      controller.set('gender','');
      controller.set('dob','');
      controller.set('passportno','');
      controller.set('pidate','');
      controller.set('pedate','');
      controller.set('iqamano','');
      controller.set('iqidate','');
      controller.set('iqedate','');
      controller.set('insuranceno','');
      controller.set('iidate','');
      controller.set('iedate','');
      controller.set('marstatus','');
      controller.set('religion','');
      controller.set('nationality','');
      controller.set('civstatus','');

      controller.set('designation','');
      controller.set('department','');
      controller.set('speciali','');
      controller.set('exp','');
      controller.set('email','');
      controller.set('image','');





        controller.transitionToRoute('dashboard.employees.employee' , employee.id);
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
