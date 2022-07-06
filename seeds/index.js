const sequelize = require('../config/connection');
const { Article, Comment, User } = require('../models');
const articleData = require('./article-seeds.json');
const commentData = require('./comment-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  await Article.bulkCreate(articleData, {
    individualHooks: true,
    returning: true,
  });
  
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();