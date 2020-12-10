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

module.exports = router;