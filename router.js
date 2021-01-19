const express = require('express')
const router = express.Router()

const recipeController = require('./controllers/recipeController')
const viewController = require('./controllers/viewController')

router.get('/',                            viewController.index)

router.get('/api/recipes/',      recipeController.getAllRecipes)
router.post('/api/recipes/',         recipeController.addRecipe)
router.put('/api/recipes/:id',    recipeController.updateRecipe)
router.delete('/api/recipes/:id', recipeController.deleteRecipe)

router.use((req, res, next) => {
  res.status(404).render('404')
})

module.exports = router