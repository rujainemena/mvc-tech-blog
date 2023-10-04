const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');


//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/blogs
router.use('/blog', blogRoutes);

module.exports = router;