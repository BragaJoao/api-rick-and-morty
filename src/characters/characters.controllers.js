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

const readCharacterByIdUrlController = async (req, res) => {
  const id = req.params.id;
  const chosenCharacter = await characterService.readCharacterByIdUrlService(id);
  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Character not found!!' });
  }
  res.status(200).send(chosenCharacter);
};

const createCharacterUrlController = async (req, res) => {
  const character = req.body;
  const newCharacter = await characterService.createCharacterUrlService(
    character
  );
  res.status(201).send(newCharacter);
};

const updateCharacterUrlController = async (req, res) => {
    const id= req.params.id;

    const editedCharacter = req.body;
    const updatedCharacter = await characterService.updateCharacterUrlService(id, editedCharacter);

    res.status(200).send(updatedCharacter);
}

const deleteCharacterUrlController = async (req, res) => {
  const id = req.params.id; 
  await characterService.deleteCharacterUrlService(id);
  res.status(200).send({ message: "Character was successfully deleted" });
};

module.exports = {
  readAllCharactersUrlController,
  readCharacterByIdUrlController,
  createCharacterUrlController,
  updateCharacterUrlController,
  deleteCharacterUrlController,
};
