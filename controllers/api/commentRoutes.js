const router = require('express').Router();
const { Comment } = require('../../models');

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      commenter_id: req.session.user_id,
    });

    return res.status(200).json(newComment);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Update selected comment
router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      return res.status(404).json({ message: 'No comment found.' });
    }
    return res.status(200).json(commentData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Delete selected comment
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      return res.status(404).json({ message: 'No comment found.' });
    }
    return res.status(200).json(commentData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;