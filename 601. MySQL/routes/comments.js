const express = require('express');
const {Comment } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const comment = await Comment.create({
            commenter : req.body.id,
            comment: req.body.comment,
        });
        console.log(comment);
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.route('/:id')
    .patch(async (req, res, next) => {
        try {
            const result = await Comment.update({
                comment: req.body.comment,
            }, {
                where: { id: req.params.id },
            });
            res.json(result);
        } catch (error) {
            console.error(error);
            next(error);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const result
        } catch (error) {
            
        }
    });

module.exports = router;
