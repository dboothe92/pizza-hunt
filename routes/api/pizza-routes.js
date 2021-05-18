const router = require('express').Router();
const {
    getAllPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//set up Get all and Post at api/pizzas
router  
    .route('/')
    .get(getAllPizzas)
    .post(createPizza);

//set up Get one, Put and Delete at api/pizzas/:id
router  
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;