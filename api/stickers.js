const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "nice application"
    })
})

module.exports = router;