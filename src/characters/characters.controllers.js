const characterService = require("./characters.services");

const readAllCharactersUrlController = async (req, res) => {
  const characters = await characterService.readAllCharactersUrlService();
  if (characters.length === 0) {
    return res
      .status(400)
      .send({ message: "There is no character registered!" });
  }
  res.send(characters);
};

const createCharacterUrlController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterUrlService(
    character
  );
  res.status(201).send(newCharacter);
};

module.exports = {
  readAllCharactersUrlController,
  createCharacterUrlController,
};
