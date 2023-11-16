export class petlist {
    constructor() {
        this.pets = [];
    }
    getAllPets() {
        return this.pets;
    }
    getPetById(id) {
        return this.pets.find((pet) => pet.id === id);
    }
    createPet(pet) {
        this.pets.push(pet);
    }
    updatePet(id, nome, tipo, idade, cor, imagem, vacinado){
        const pet = this.getPetById(id);

        if(!pet) {
            return null;
        }
        pet.nome = nome;
        pet.tipo = tipo;
        pet.idade = idade;
        pet.cor = cor;
        pet.imagem = imagem;
        pet.vacinado = vacinado;

        return pet;
    }
    excludePet(petId) {
     this.pets = this.pets.filter((pet) => pet.id !== petId);
    }
}