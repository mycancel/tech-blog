const Article = require('./Article');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
  });

Comment.belongsTo(User, {
  foreignKey: 'commenter_id'
});

Article.hasMany(Comment, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Article, {
  foreignKey: 'comment_id'
});

module.exports = { Article, Comment, User };