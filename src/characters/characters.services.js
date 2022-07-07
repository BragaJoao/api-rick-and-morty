const Character = require("./Character");

const readAllCharactersUrlService = async () => {
  const characters = await Character.find();
  return characters;
};

const readCharacterByIdUrlService = async (id) => {
  const character = await Character.findById(id);
  return character;
};

const createCharacterUrlService = async (character) => {
  const newCharacter = await Character.create(character);
  return newCharacter;
};

const updateCharacterUrlService = async (id, editedCharacter) => {
  const updatedCharacter = await Character.findByIdAndUpdate(id,editedCharacter).setOptions({ returnOriginal: false })

  return updatedCharacter
};

const deleteCharacterUrlService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

module.exports = {
  readAllCharactersUrlService,
  readCharacterByIdUrlService,
  createCharacterUrlService,
  updateCharacterUrlService,
  deleteCharacterUrlService,
};
