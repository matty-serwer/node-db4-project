
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {unit_type: 'whole (unit)'}, // 1
        {unit_type: 'cup(s)'}, // 2
        {unit_type: 'lb(s)'}, // 3
        {unit_type: 'Oz(s)'}, // 4
        {unit_type: 'Tbsp(s)'}, // 5
        {unit_type: 'pinch(s)'}, // 6
      ]);
    });
};