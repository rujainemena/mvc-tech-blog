const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

//http://localhost:3001/api/user/
router.use('/user', userRoutes);
//http://localhost:3001/api/blog/
router.use('/blog', blogRoutes);

module.exports = router;

