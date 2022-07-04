const Article = require('./Article');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
  });

Article.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'commenter_id'
});

module.exports = { Article, Comment, User };