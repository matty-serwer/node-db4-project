const db = require("../../data/db-config");

module.exports = {
  //   select
  //     r.recipe_id,
  //     r.recipe_name
  // from recipes r
  // join ingredient_quantity iq
  //     on iq.recipe_id = r.recipe_id
  // where iq.ingredient_id = 1
  getRecipesByIngredient(id) {
    return db("recipes as r")
      .join("ingredient_quantity as iq", "iq.recipe_id", "r.recipe_id")
      .select("r.recipe_id", "r.recipe_name")
      .where("iq.ingredient_id", id)
  },
};