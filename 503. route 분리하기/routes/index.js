const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

// exports 해줌
module.exports = router;