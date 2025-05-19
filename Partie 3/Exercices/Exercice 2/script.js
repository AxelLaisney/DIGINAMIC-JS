// Reprenez l'exercice précédent, mutualisez les comportements en ajoutant une classe mère.
// Créez une classe mère "Personnage" avec des attributs et méthodes communes 
// Reprenez puis corrigez les classes filles en utilisant l'héritage, et si nécessaire 
// redéfinissez des comportements spécifiques aux méthodes 
class Personnage{
    constructor(name, health, attack, defense){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    attack(){
        let n = Math.floor(Math.random * (this.attack +1 ))+1;
        console.log("Your attacks for "+n+" damages");
    }
    defend(){
        let n = Math.floor(Math.random * (this.defense + 1 ))+5;
        console.log("You defend for "+n+" damages");
    }
}

class Warrior extends Personnage{
    constructor(name){
        super(name, 40, 15, 15);
    }
    item(){
        let n = Math.floor(Math.random * 5)+1;
        console.log("Your used an itema for "+n+" damages");
    }
}

class Mage extends Personnage{
    constructor(name){
        super(name, 20, 5);
        this.mana = 60;
    }
    fireball(){
        if(mane > 0){
            this.mana =- 8;
            let n = Math.floor(Math.random * (16))+15;
            console.log("Your fireball deals "+n+" damages");
        }else{
            console.log("not enough mana")
        }
    }
}

class Fairy extends Personnage{
    constructor(name){
        super(name, 15, 10);
        this.mana = 50;
    }
    heal(){
        if(mane > 0){
            this.mana =- 8;
            let n = Math.floor(Math.random * (11))+5;
            console.log("You heal for "+n+" health");
        }else{
            console.log("not enough mana")
        }
    }
}

let warrior1 = new Warrior("Bob");
let mage1 = new Mage("Carla");
let fairy1 = new Fairy("starla");

warrior1.attack;
mage1.fireBall;
fairy1.heal