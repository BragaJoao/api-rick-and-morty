const Character = require("./Character");

const readAllCharactersUrlService = async () => {
  const characters = await Character.find();
  return characters;
};

const createCharacterUrlService = async (character) => {
  const newCharacter = await Character.create(character);
  return newCharacter;
};

module.exports = {
  readAllCharactersUrlService,
  createCharacterUrlService,
};
