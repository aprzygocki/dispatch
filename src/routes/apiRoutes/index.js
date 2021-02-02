const router = require('express').Router();
const { createJob, getAllJobs} = require('../../controllers/jobController');

router.post('/supervisor', createJob);
router.get('/jobboardpage', getAllJobs);

module.exports = router;