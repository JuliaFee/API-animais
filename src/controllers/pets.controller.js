import { Pet } from "../modules/pet.js";
import { petlist } from "../modules/pet_list.js";

const listInstancia = new petlist();
const petInstancia = new Pet();

export const getPets = (req, res) =>{
    const pets = listInstancia.getAllPets();

    if(!pets.length){
        res.status(404).json({message:"Não existem pets cadastrados.", cadastros: `${listInstancia.length}` })
    } else{
        res.status(200).json({message:"OK!", status:"OK", data:pets })
    }
}
export const getPetId = (req, res) =>{
    const { id } = req.params;

    const pet = listInstancia.getPetById(id);

    if(!pet) {
        return res.status(404).send({
             message: "Not Found.",
             origem:"controller"
            });
    }
    return res.status(200).send({ message: `${petInstancia.name} id:${id}!`, origem:"controller", data:pet });
}
export const createAPet = (req, res) => {
    const {nome, tipo, idade, cor, imagem, vacinado} = req.body;

    if(!nome || !tipo || !idade || !cor || !imagem || !vacinado) {
        return res.status(404).send({ message: "Not Found.", origem:"controller" });
    }
    
    listInstancia.createPet(petInstancia);

    return res.status(200).send({ message: "cadastrado com sucesso", origem:"controller" , data: petInstancia});
};
export const updateAPet = (req, res) => {
    const { id } = req.params;
    const {nome, tipo, idade, cor, imagem, vacinado} = req.body;

    if(!nome || !tipo || !idade || !cor || !imagem || !vacinado) {
        return res.status(404).send({ message: "Not Found", origem:"controller" });
    }

    const pet = listInstancia.updatePet(id, nome, tipo, idade, cor, imagem, vacinado);

    if(!pet) {
        return res.status(404).send({ message: "Not Found.", origem:"controller" });
    }

    return res.status(200).send({ message: `${petInstancia.name} id:${id}!`, origem:"controller", data: pet });
};
export const deletePet = (req, res) => {
    const { id } = req.params;

    const petExclude = listInstancia.excludePet(id);

    if(!petExclude) {
        return res.status(404).send({ message: "Not Found.", origem:"controller" });
    }

    listInstancia.excludePet(id);
    return res.status(200).send({ message: `${petInstancia.name} id:${id}!`, origem:"controller", data: petExclude });
}