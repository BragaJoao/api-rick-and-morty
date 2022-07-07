const characterService = require('./characters.services');

const readAllCharactersUrlController = async (req,res) =>{
    const characters = await characterService.readAllCharactersUrlService();

    if(characters.length === 0){
        return res.status(400).send({ message: "There is no character registered!"})
    }

    res.send(characters)
}

module.exports ={
    readAllCharactersUrlController,
}