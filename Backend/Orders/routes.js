const express = require('express');
const Controller = require('./controller');
const middleware = require('../Functions/Middleware');

const router = express.Router();

router.post('/', middleware.authentication, Controller.Create);
router.get('/',  middleware.authentication, Controller.List);
router.get('/:id', middleware.authentication, Controller.Read);
router.patch('/:id', middleware.authentication, Controller.Update);
router.delete('/:id', middleware.authentication, Controller.Delete);

module.exports = router;