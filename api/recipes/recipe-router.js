const express = require("express");
const router = express.Router();
const Recipe = require("./recipe-model")

router.get("/", async (req, res) => {
  try {
    const data = await Recipe.getRecipes();
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get("/:id/shoppinglist", async (req, res) => {
  try {
    const data = await Recipe.getShoppingList(req.params.id);
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.get("/:id/instructions", async (req, res) => {
  try {
    const data = await Recipe.getInstructions(req.params.id);
    res.status(201).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

module.exports = router;