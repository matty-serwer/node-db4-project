const db = require("../../data/db-config");

module.exports = {
  getRecipes() {
    return db("recipes");
  }
}

