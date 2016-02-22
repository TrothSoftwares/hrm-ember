import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{

    deleteEmployee:function(employee){
      // var controller  =this;
      var confirm = window.confirm("Are you sure you want to delete?");
      if (confirm) {
        employee.destroyRecord().then(function () {
        }).catch(function () {
          // controller.notifications.addNotification({
          //   message: 'Item cannot be deleted at this moment' ,
          //   type: 'error',
          //   autoClear: true
          // });
          employee.rollbackAttributes();
        });
      }

    }
  }
});
