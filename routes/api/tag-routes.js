const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await tag.findAll({
      include: [ Product ]
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = await Tag.findByPk(req.params.id, { include:[Product] })
    if (!tagId) {
      res.status(404).json({ message: 'No tags found with that ID'});
      return;
    }
    res.status(200).json(tagId)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
    
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    
  } catch (error) {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    
  } catch (error) {
    
  }
});

module.exports = router;
