const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    
  } catch (error) {
    
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    
  } catch (error) {
    
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    
  } catch (error) {
    
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    
  } catch (error) {
    
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch (error) {
    
  }
});

module.exports = router;
