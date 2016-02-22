import DS from 'ember-data';

export default DS.Model.extend({

  edtype: DS.attr('string'),
  degyear: DS.attr('date'),
  deg:DS.attr('string'),
  special: DS.attr('string'),
  verified: DS.attr('boolean'),
  employee: DS.belongsTo('employee' , {async:true}),
  verifiedby: DS.belongsTo('employee' , {async:true}),
});
