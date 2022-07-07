const router = require('express').Router();
const characterController = require('./characters.controllers')

router.get('/', characterController.readAllCharactersUrlController);

module.exports = router;