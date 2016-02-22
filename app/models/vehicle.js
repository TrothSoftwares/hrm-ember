import DS from 'ember-data';

export default DS.Model.extend({
  regno: DS.attr('string'),
  modelname: DS.attr('string'),
  isthiedate:DS.attr('date'),
  dname: DS.attr('string'),
  nextsdate: DS.attr('date'),
  remarks: DS.attr('string')

});
