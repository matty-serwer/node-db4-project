exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128).notNullable().unique();
    })
    .createTable("units", (table) => {
      table.increments("unit_id");
      table.string("unit_type", 128).notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table.integer("step_num").notNullable();
      table.string("instruction").notNullable();
      table.float("quantity").notNullable();
      table
        .integer("unit_id")
        .unsigned()
        .notNullable()
        .references("unit_id")
        .inTable("units")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("units")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
