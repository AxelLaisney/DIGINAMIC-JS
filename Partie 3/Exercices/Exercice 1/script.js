// On imagine un jeu avec 3 personnages : Un guerrier, une fée et un magicien. 
// Créez trois classees pour chacun de ces personnages, avec au moins 3 attributs (point de vie, point d'attaque...) et 3 méthodes.
// On pourra créer des méthodes ou attributs identiques, mais chaque personnage avoir certains attributs et 
// méthodes spécifiques 

// Dans un second temps, créez trois instances de ces classes, et faites les intéragir en fonction des méthodes 
// et attributs spécifiques de chaque personnage.
class Warrior {
    constructor(name, health, attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    attack(){
        let n = Math.floor(Math.random() * (this.attack + 1))+10;
        console.log("your attack deals "+n+" damages");
    }
    defend(){
        let n = Math.floor(Math.random() * 16)+10;
        console.log("you reduced the damages received by "+n) ;
    }
    item(){
        let n = Math.floor(Math.random() * 6)+1;
        console.log("you used an item for "+n+" damages") ;
    }
}

class Fairy {
    constructor(name, health, attack, mana){
        this.name = name;
        this.health = health;
        this.attack = attack;  
        this.mana = mana;
    }
    attack(){
        let n = Math.floor(Math.random() * (this.attack + 1));
        console.log("your attack deals "+n+" damages") ;
    }
    defend(){
        let n = Math.floor(Math.random() * 16)+5;
        console.log("you reduced the damages received by "+n) ;
    }
    heal(){
        if(this.mana > 0){
            this.mana =- 5;
            let n = Math.floor(Math.random() * 6)+5;
            console.log("You heal for "+n+" health") ;
        }else{
            console.log("not enough mana") ;
        }

    }
}

class Mage {
    constructor(name, health, attack, mana){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.mana;
    }
    attack(){
        let n = Math.floor(Math.random() * (this.attack + 1));
        console.log("your attack deals "+n+" damages") ;
    }
    defend(){
        let n = Math.floor(Math.random() * 5)+1;
        console.log("you reduced the damages received by "+n) ;
    }
    fireBall(){
        if(this.mana > 0){
            this.mana =- 8;
            let n = Math.floor(Math.random() * 21)+10;
            console.log("you fireball deals "+n+" damages") ;
        }else{
            console.log("not enough mana");
        }

    }
}

let mage1 = new Mage("Red", 25, 5, 50);
let warrior1 = new Warrior("Bob", 30, 15);
let fairy1 = new Fairy("Elisa", 20, 3, 60);

warrior1.attack();
mage1.fireBall();
fairy1.heal();