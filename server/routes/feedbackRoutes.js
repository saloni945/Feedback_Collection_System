const express = require('express');
const { submitFeedback, getAllFeedback } = require('../controller/feedbackController');
const router = express.Router();

router.post('/submit-feedback', submitFeedback);
router.get('/all-feedback', getAllFeedback); // New route to fetch all feedback

module.exports = router;
