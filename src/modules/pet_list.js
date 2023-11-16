export class petlist {
    constructor() {
        this.pets = [];
    }
    getAllPets() {
        return this.pets;
    }
    getPetById(id) {
        return this.pet.find((pet) => pet.id === id);
    }
    createPet(pet) {
        this.pet.push(pet);
    }
    updatePet(id, nome, tipo, idade, cor, imagem, vacinado){
        const pet = this.getPetById(id);

        if(!pet) {
            return null;
        }

        this.id = uuidv4();
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
        this.cor = cor;
        this.imagem = imagem;
        this.vacinado = vacinado;

        return pet;
    }
    excludePet(petId) {
     this.pet = this.pet.filter((pet) => pet.id !== petId);
        
    }
}