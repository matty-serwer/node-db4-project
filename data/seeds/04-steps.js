
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_num: 1, instruction: "Peal eggplant. Slice Eggplant Thin"}, // 1
        {recipe_id: 1, step_num: 2, instruction: "Beat eggs in a bowl"}, // 2
        {recipe_id: 1, step_num: 3, instruction: "Cover eggplant with egg, then lay in a plate of breadcrumbs. Cover both sides with breadcrumbs"}, // 3
        {recipe_id: 1, step_num: 4, instruction: "Heat olive oil in a pan on medium heat. Fry eggplant uncovered untill golden brown on each side."}, // 4
        {recipe_id: 2, step_num: 1, instruction: "Cook that darn Meatloaf!"}, // 5
        {recipe_id: 2, step_num: 2, instruction: "Eat the meatloaf."}, // 6
        {recipe_id: 3, step_num: 1, instruction: "Cook that darn porkchop!"}, // 7
        {recipe_id: 3, step_num: 2, instruction: "Eat the porkchop."}, // 8
      ]);
    });
};