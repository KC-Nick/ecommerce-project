const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag,
      as: 'product_tags' }]
     });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:tagID', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.tagID, {
        // JOIN with category, THROUGH tag
        include: [{ model: Product, through: ProductTag,
        as: 'tagID_products' }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(
      { tag_name: req.body.tag_name }
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:tagID', (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(
      {
        // All the fields you can update and the data attached to the request tag
        tag_name: req.body.tag_name
      },
      {
        // Gets the tag based on the id given in the request parameters
        where: {
          tagID: req.params.tagID,
        },
      }
    )
      .then((updatedTag) => {
        // Sends the updated tag as a json response
        res.json(updatedTag);
      })
      .catch((err) => res.json(err));
});

router.delete('/:tagID', (req, res) => {
  // delete on tag by its `id` value
      // Looks for the tags based on tagID given in the request parameters and deletes it
      Tag.destroy({
        where: {
          tagID: req.params.tagID,
        },
      })
        .then((deletedTag) => {
          res.json(deletedTag);
        })
        .catch((err) => res.json(err));
});

module.exports = router;
