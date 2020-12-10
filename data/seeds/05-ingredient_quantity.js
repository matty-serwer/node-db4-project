
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantity').insert([
        {ingredient_id: 1, quantity: 4, unit_id: 1, recipe_id: 1}, // 1
        {ingredient_id: 4, quantity: 2, unit_id: 2, recipe_id: 1}, // 2
        {ingredient_id: 3, quantity: 0.5, unit_id: 1, recipe_id: 1}, // 3
        {ingredient_id: 2, quantity: 2, unit_id: 5, recipe_id: 1}, // 4
        {ingredient_id: 5, quantity: 3, unit_id: 3, recipe_id: 2}, // 5
        {ingredient_id: 6, quantity: 2.5, unit_id: 3, recipe_id: 3}, // 6
      ]);
    });
};