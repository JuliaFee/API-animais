import { Pet } from "../modules/pet.js";
import { petlist } from "../modules/pet_list.js";

const listInstancia = new petlist();

export const getPets = (req, res) =>{
    const pets = listInstancia.getAllPets();
    if(!pets.length){
        res.status(404).json({message:"Não existem pets cadastrados.", cadastros: `${pets.length}` })
    } else{
        res.status(200).json({message:"OK!", status:"OK", data:pets, cadastros: `${pets.length}` })
    }
}
export const getPetId = (req, res) =>{
    const { id } = req.params;

    const pet = listInstancia.getPetById(id);

    if(!pet) {
        return res.status(404).send({
             message: "Not Found.",
             
            });
    }
    return res.status(200).send({ message: `id:${id}!`, data:pet });
}
export const createAPet = (req, res) => {
    const {nome, tipo, idade, cor, imagem, vacinado} = req.body.Pet;

    if (nome.length <= 3 || nome.length >= 50) {
        return res.status(400).send({ message: "o nome precisa ter entre 3 e 50 letras." });
    }
    if (!Number.isInteger(Number(idade)) || idade < 0) {
        return res.status(400).send({ message: "o numero da idade deve ser um número inteiro" });
    }
    if (tipo.length > 30) {
        return res.status(400).send({ message: "o tipo precisa ter no máximo 30 caracteres" });
    }
    if (cor.length > 20) {
        return res.status(400).send({ message: "A cor deve ter no máximo 20 caracteres" });
    }
    if (typeof vacinado !== "boolean" ) {
        console.log(typeof vacinado);
        return res.status(400).send({ message: "o estado da vacinação precisa ser true ou false" });
    }
    if(isURLValid(imagem) === false) {
        return res.status(400).send({ message: "a imagem deve ser uma URL valida" });
    }


    if(!nome || !tipo || !idade || !cor || !imagem) {
    return res.status(404).send({ message: "Not Found" });
    }

    const petInstancia = new Pet(nome, tipo, idade, cor, imagem, vacinado)

    listInstancia.createPet(petInstancia);

    return res.status(200).send({ message: "cadastrado com sucesso", data: petInstancia});

};
export const updateAPet = (req, res) => {
    const { id } = req.params;
    const { nome, idade, tipo, cor, imagem, vacinado } = req.body.Pet;
    if(!nome || !idade || !tipo || !cor || !imagem || !vacinado){
        return res.status(404).send({message: "Not Found"});
    }
    const pet = listInstancia.updatePet(id, nome, idade, tipo, cor, imagem, vacinado);
    if(!pet){
        return res.status(404).send({ message: "Not Found"});
    }

    return res.status(200).send({message: `id: ${id}`, data: pet});
};
export const deletePet = (req, res) => {
    const { id } = req.params;

    const petExclude = listInstancia.getPetById(id);

    if(!petExclude) {
        return res.status(404).send({ message: "Not Found."});
    }

    listInstancia.excludePet(id);
    return res.status(200).send({ message: `id:${id}!`, data: petExclude });
}
export const isURLValid = (url) => {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}