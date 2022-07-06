const router = require("express").Router();
const { Article, Comment, User } = require("../models");

// Route to view Dashboard with articles created by user
router.get("/dashboard", async (req, res) => {
  try {
    const articleDbData = await Article.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: { model: User },
    });

    // Serializes articles
    const articles = articleDbData.map((article) =>
      article.get({ plain: true })
    );

    // Renders articles to homepage
    res.render("dashboard", {
      articles,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Route to read an article
router.get("/articles/:id", async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: (
        {
          model:User
        }
      )
    });

    const article = articleData.get({ plain: true });

    const commentData = await Comment.findAll({
      where: {
        article_id: req.params.id
      }
    }
    )

    const comments = JSON.parse(JSON.stringify(commentData));

    console.log(article);
    console.log(comments);

    res.render("article", { article: article, comments: comments});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
