const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let recipies = [
  {
    id: uuidv4(),
    title: "Pasta Bolognese",
    image_url: "via.placeholder.com/150/FFFF00/000000?Text=Pasta+Bolognese"
  },
  {
    id: uuidv4(),
    title: "Zuccini Quiche",
    image_url: "via.placeholder.com/150/FFFF00/000000?Text=Zuccini+Quiche"
  },
]

app.get('/api/recipes/', (req, res) => {
  res.send(recipies)
})

app.post('/api/recipes/', (req, res) => {
  const newRecipes = req.body

  recipies.push({
    ...newRecipes,
    id: uuidv4()
  })

  res.send({ message: 'success' })
})

app.put('/api/recipes/:id', (req, res) => {
  const { id } = req.params

  const targetIndex = recipies.findIndex(r => r.id === id)

  console.log(targetIndex)

  recipies = [
    ...recipies.slice(0, targetIndex),
    {
      ...recipies[targetIndex],
      ...req.body
    },
    ...recipies.slice(targetIndex + 1)
  ]

  res.send({ message: 'success' })
})

app.delete('/api/recipes/:id', (req, res) => {
  const { id } = req.params

  const targetIndex = recipies.findIndex(r => r.id === id)

  recipies = [
    ...recipies.slice(0, targetIndex),
    ...recipies.slice(targetIndex + 1)
  ]

  res.send({ message: 'success' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server starts to listening at port:${PORT}`))