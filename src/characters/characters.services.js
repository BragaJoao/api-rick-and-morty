const Character = require('./Character');

const readAllCharactersUrlService = async () => {
    const characters = await Character.find();
    return characters
}

module.exports = {
    readAllCharactersUrlService
}