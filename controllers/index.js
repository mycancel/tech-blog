const router = require('express').Router();
const homeRoutes = require('./home-route');
const apiRoutes = require('./api');
const protectedRoutes = require('./protected-routes');

const withAuth = require('../utils/auth');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', withAuth, protectedRoutes);

module.exports = router;