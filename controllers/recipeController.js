const recipeModel = require('../models/recipes')

exports.getAllRecipes = (req, res) => {
  const recipes = recipeModel.getRecipes()

  res.send({ recipes })
}

exports.addRecipe = (req, res) => {
  const recipes = recipeModel.createRecipe(req.body)

  res.send({ recipes })
}
  
exports.updateRecipe = (req, res) => {
  const recipes = recipeModel.updateRecipe(req.params.id, req.body)

  res.send({ recipes })
}

exports.deleteRecipe = (req, res) => {
  const recipes = recipeModel.deleteRecipe(req.params.id)

  res.send({ recipes })
}
