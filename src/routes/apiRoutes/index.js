const router = require('express').Router();
const { createJob, getAllJobs} = require('../../controllers/jobController');

// const { feedApi } = require('../../controllers/feedController');

// const { categoryApi } = require ('../../controllers/categoryController');
// const { uploadImage } = require ('../../controllers/imageController');

// router.post('/category', categoryApi);
router.post('/supervisor', createJob);
router.get('/jobboardpage', getAllJobs);
// router.get('/feed', feedApi);
// router.delete('/post/:post_id', removePost)
// router.post('/comment', authMiddleware, createComment);
// router.put('/comment/:post_id/:comment_id', hideComment);
// router.post('/uploadimage', authMiddleware ,uploadImage);

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

module.exports = router;