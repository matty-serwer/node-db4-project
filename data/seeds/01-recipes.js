
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Eggplant Parmesan'}, // 1
        {recipe_name: 'Mamas Meatloaf'}, // 2
        {recipe_name: 'Venetian Pork Chops'} // 3
      ]);
    });
};
