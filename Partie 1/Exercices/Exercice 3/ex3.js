// Fonction de gestion de majorité (console.log)
// paramètre : age
// age superieur  : "Vous êtes majeur"
// age égal à 18 : "Vous êtes tout juste majeur"
// age inferieur à 18 : "Vous êtes mineur"
function checkMajority(age){
    if (age > 18){
        console.log("Vous êtes majeur");
    } else if (age == 18){
        console.log("Vous êtes tout juste majeur");
    } else {
        console.log("Vous êtes mineur");
    }
}

// checkMajority(18);
// checkMajority(20);
// checkMajority(15);

// Fonction qui renvoie le nom du jour selon un numero fourni en paramètre
// exemple : 1 -> "Lundi"
function getDayName(number){
    if (number == 1){
        console.log("Lundi");
    } else if (number == 2){
        console.log("Mardi");
    } else if (number == 3){
        console.log("Mercredi");
    } else if (number == 4){
        console.log("Jeudi");
    } else if (number == 5){
        console.log("Vendredi");
    } else if (number == 6){
        console.log("Samedi");
    } else if (number == 7){
        console.log("Dimanche");
    } else {
        console.log("Le numéro doit être compris entre 1 et 7");
    }
}

// getDayName(1);
// getDayName(8);

// Fonction qui affiche les nombres de 1 à 10 avec une boucle for 
function displayNumbers(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

// displayNumbers();

// Fonction qui compte de 5 à 1 avec une boucle while
function countDown(){
    let i = 5;
    while (i >= 1){
        console.log(i);
        i--;
    }
}

// countDown();

// Fonction jeu : l'utilsateur doit deviner un nombre secret entre 1 et 10 
// While et if / else
function guessNumber(secretNumber){

    let guess = prompt("Devinez le nombre secret :");
    // Fonctionn dans un navigateur mais pas dans un environnement comme node.js
    // Il faudrait passer par readline pour avoir un input

    while (guess != secretNumber){
        if (guess > secretNumber){
            console.log("Trop grand !");
        } else {
            console.log("Trop petit !");
        }
        guess = prompt("Devinez le nombre secret :");
    }
    console.log("Bravo ! Vous avez deviné le nombre secret !");
}

// guessNumber(10);

// Affiche les nombres de 1 à 10 et indique s'ils sont pairs ou impairs
function showEvenOdd(){
    for (let i = 1; i <= 10; i++){
        if (i % 2 == 0){
            console.log(i + " est pair");
        } else {
            console.log(i + " est impair");
        }
    }
}

// showEvenOdd();

// Fonction qui simule une connexion 
// l'utilisateur à 3 tentatives pour deviner un mot de passe
function login(password){
    let attempts = 0;
    let found = false;
    while (attempts < 3 && !found){
        let guess = prompt("Devinez le mot de passe :");
        if (guess == password){
            console.log("Bravo ! Vous avez deviné le mot de passe !");
            found = true;
        }
        attempts++;
    }
    console.log("Vous avez épuisé vos tentatives !");
}

// login("1234");

// Fonction qui vérifie si un nombre est parfait 
// un nombre parfait est un nombre qui est égal à la somme de ses diviseurs
// Exemple : 6 est un nombre parfait car 6 = 1 + 2 + 3

function isPerfectNumber(number){
    if (number <= 1) {
        return false;
    }
    
    let somme = 0;
  
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        somme += i;
      }
    }
  
    return somme === number;
}

// console.log(isPerfectNumber(6));
// console.log(isPerfectNumber(28));
// console.log(isPerfectNumber(10));

