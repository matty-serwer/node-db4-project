
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Eggplant (raw)'}, // 1
        {ingredient_name: 'Extra Virgin Olive Oil'}, // 2
        {ingredient_name: 'BreadCrumbs'}, // 3
        {ingredient_name: 'Egg'}, // 4
        {ingredient_name: 'Ground Beef'}, // 5
        {ingredient_name: 'Boneless Pork Chop'} // 6
      ]);
    });
};