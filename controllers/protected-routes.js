const router = require('express').Router();
const { Article } = require('../models');

// Create routes to see Dashboard with articles created by user
router.get('/dashboard', async (req, res) => {
  try {
    const articleDbData = await Article.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    // Serializes articles
    const articles = articleDbData.map((article) =>
      article.get({ plain: true })
    );

    // Renders articles to homepage
    res.render('dashboard', {
      articles,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create routes to read articles
// Comments related to articles will populate

module.exports = router;