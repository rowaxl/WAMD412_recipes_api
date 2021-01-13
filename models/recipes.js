const { v4: uuidv4 } = require('uuid')

let recipes = [
  {
    id: uuidv4(),
    title: "Pasta Bolognese",
    image_url: "https://via.placeholder.com/150/AAAAAA/000000?Text=Pasta+Bolognese"
  },
  {
    id: uuidv4(),
    title: "Zuccini Quiche",
    image_url: "https://via.placeholder.com/150/AAAAAA/000000?Text=Zuccini+Quiche"
  },
]

module.exports = {
  getRecipes: () => {
    return recipes
  },
  createRecipe: (recipe) => {
    recipes.push({
      ...recipe,
      id: uuidv4()
    })

    return recipes
  },
  updateRecipe: (id, updatedRecipe) => {
    const targetIndex = recipes.findIndex(r => r.id === id)

    recipes = [
      ...recipes.slice(0, targetIndex),
      {
        ...recipes[targetIndex],
        ...updatedRecipe
      },
      ...recipes.slice(targetIndex + 1)
    ]

    return recipes
  },
  deleteRecipe: (id) => {
    const targetIndex = recipes.findIndex(r => r.id === id)

    recipes = [
      ...recipes.slice(0, targetIndex),
      ...recipes.slice(targetIndex + 1)
    ]

    return recipes
  }
}