## Recipies API

### Specs
- `api/recipes`:
  - `GET`: Return recipe objects
  - `POST`: Add new recipe object

- `api/recipes/:id`:
  - `PUT`: Update recipe object
  - `DELETE`: Delete recipe object

### Reference

`recipe` Object

```
{
  "id": string //uuid v4
  "title": string
  "image_url": string
}
```