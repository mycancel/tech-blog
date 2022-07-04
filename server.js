const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
// const { SECRET } = process.env;

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

const sess = {
  secret: 'secret secret secret',
  cookie: {
    maxAge: 3600,
  },
  resave: false,
  saveUninitialized: true
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
