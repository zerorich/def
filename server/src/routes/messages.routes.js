const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/messages.controller');
const validate = require('../middleware/validate.middleware');

const router = Router();

router.post(
  '/',
  [
    body('name').isString().trim().isLength({ min: 2, max: 120 }).withMessage('Name must be 2-120 chars'),
    body('email').isEmail().normalizeEmail().withMessage('Email is invalid'),
    body('message').isString().trim().isLength({ min: 10, max: 4000 }).withMessage('Message must be 10-4000 chars'),
  ],
  validate,
  controller.create
);

module.exports = router;
