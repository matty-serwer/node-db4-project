const express = require("express");
const router = express.Router();
const Ingredient = require("./ingredient-modal");

router.get("/:id/recipes", async (req, res) => {
  try {
    const data = await Ingredient.getRecipesByIngredient(req.params.id);
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;