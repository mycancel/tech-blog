const router = require('express').Router();
const { Article } = require('../models');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articleDbData = await Article.findAll();

    // Serializes articles
    const articles = articleDbData.map((article) =>
      article.get({ plain: true })
    );

    // Renders articles to homepage
    // TODO: create homepage.handlebars
    res.render('homepage', {
      articles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// TODO: Login Redirect

module.exports = router;