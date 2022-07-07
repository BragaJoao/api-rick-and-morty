const router = require('express').Router();
const characterController = require('./characters.controllers')

router.get('/', characterController.readAllCharactersUrlController);
router.post('/create', characterController.createCharacterUrlController);
module.exports = router;