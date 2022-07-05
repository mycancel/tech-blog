const router = require('express').Router();
const { Article, User } = require('../models');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articleDbData = await Article.findAll({
      include: { model:User }
    });

    // Serializes articles
    const articles = articleDbData.map((article) =>
      article.get({ plain: true })
    );

    // Renders articles to homepage
    res.render('homepage', {
      articles,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login Route (from UNCC Bootcamp Unit 14 Activity 16)
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;