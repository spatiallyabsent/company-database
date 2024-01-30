const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({include: [Product]});
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!categoryId) {
      res.status(404).json({message: 'No category with that id'});
      return;
    }
    res.status(200).json(categoryId);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.findByPk(req.params.id);
    if (!updateCategory){res.status(404).json({message:'No category using this id'});
    return;
  }
  Category.update(req.body, {where: {id:req.params.id}});
  res.status(200).json({message: 'success'});
  } catch (error) {
    res.status(400).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({where: {id: req.params.id}});
    res.status(200).json(deleteCategory);
  } catch (error) {
    res.status(400).json(error)
  };
});

module.exports = router;
