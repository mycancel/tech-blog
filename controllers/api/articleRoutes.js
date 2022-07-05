const router = require('express').Router();
const { Article } = require('../../models');

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

module.exports = router;