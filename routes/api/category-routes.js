const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll(
      {
        // JOIN with product, using .col to reference where the foreign key will join
        //check this with tutor?
        // include: [{ model: Product, where: { category_id: Sequelize.col('category.catID') },
        // as: 'category_products' }]
      }
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:catID', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.catID, {
        // JOIN with product, using .col to reference where the foreign key will join
        include: [{ model: Product, where: { category_id: Sequelize.col('category.catID') },
        as: 'category_products' }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:catID', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // All the fields you can update and the data attached to the request category
      category_name: req.body.category_name
    },
    {
      // Gets the category based on the id given in the request parameters
      where: {
        catID: req.params.catID,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated category as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:catID', (req, res) => {
  // delete a category by its `id` value
    // Looks for the categories based on catID given in the request parameters and deletes it
    Category.destroy({
      where: {
        catID: req.params.catID,
      },
    })
      .then((deletedCategory) => {
        res.json(deletedCategory);
      })
      .catch((err) => res.json(err));
});

module.exports = router;
