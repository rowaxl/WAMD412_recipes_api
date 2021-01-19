const recipeModel = require('../models/recipes')

exports.index = (req, res) => {
  const recipes = recipeModel.getRecipes()

  res.render('index', { recipes })
}