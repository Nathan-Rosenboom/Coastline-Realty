const router = require("express").Router();
const Submission = require("../models/submission.js");

router.post("/api/submission", ({body}, res) => {
  Submission.create(body)
    .then(dbSubmission => {
      res.json(dbSubmission);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;