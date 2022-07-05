const router = require('express').Router();
const { Article } = require('../../models');

// Create a new article
router.post('/', async (req, res) => {
  try {
    const newArticle = await Article.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    return res.status(200).json(newArticle);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Update selected article
router.put('/:id', async (req, res) => {
  try {
    const articleData = await Article.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!articleData) {
      return res.status(404).json({ message: 'No article found.' });
    }
    return res.status(200).json(articleData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const articleData = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!articleData) {
      return res.status(404).json({ message: 'No article found.' });
    }
    return res.status(200).json(articleData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;