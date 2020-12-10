const db = require("../../data/db-config");

module.exports = {
  getRecipes() {
    return db("recipes");
  },
//   select 
//     i.ingredient_name,
//     iq.quantity,
//     u.unit_type
// from ingredients i
// join ingredient_quantity iq
//     on i.ingredient_id = iq.ingredient_id
// join recipes r
//     on r.recipe_id = iq.recipe_id
// join units u
//     on u.unit_id = iq.unit_id
// where r.recipe_id = 1
  getShoppingList(id) {
    return db("ingredients as i")
      .join("ingredient_quantity as iq", "i.ingredient_id", "iq.ingredient_id")
      .join("recipes as r", "r.recipe_id", "iq.recipe_id")
      .join("units as u", "u.unit_id", "iq.unit_id")
      .select("i.ingredient_name", "iq.quantity", "u.unit_type")
      .where('r.recipe_id', id)
  },
//   select 
//     s.step_num,
//     s.instruction
// from steps s
// where s.recipe_id = 1
  getInstructions(id) {
    return db("steps as s")
      .select("s.step_num", "s.instruction")
      .where("s.recipe_id", id)
      .orderBy("s.step_num")
  }
}

