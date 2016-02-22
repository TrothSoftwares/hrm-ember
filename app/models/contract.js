import DS from 'ember-data';

export default DS.Model.extend({
  htype: DS.attr('string'),
  status: DS.attr('string'),
  cstart:DS.attr('date'),
  cend: DS.attr('date'),
  pstart: DS.attr('date'),
  pend: DS.attr('date'),
  nameiqama: DS.attr('string'),
  proiqama: DS.attr('string'),
  employee: DS.belongsTo('employee' , {async:true}),
});
