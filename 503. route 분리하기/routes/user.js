const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

// exports 해줌(모듈로 만들어줌)
module.exports = router;