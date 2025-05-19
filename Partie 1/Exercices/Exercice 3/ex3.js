// Fonction de gestion de majorité (console.log)
// paramètre : age
// age superieur  : "Vous êtes majeur"
// age égal à 18 : "Vous êtes tout juste majeur"
// age inferieur à 18 : "Vous êtes mineur"
function checkMajority(age){
    if(age == 18){
        return "Vous êtes tout juste majeur";
    }else if(age > 18){
        return "VOus êtes majeur";
    }else{
        return "Vous êtes mineur"
    }
}

// Fonction qui renvoie le nom du jour selon un numero fourni en paramètre
// exemple : 1 -> "Lundi"
function getDayName(number){
    switch(number){
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        case 7:
            return "Dimanche";
        default:
            return "Error";
    }
}

// Fonction qui affiche les nombres de 1 à 10 avec une boucle for 
function displayNumbers(){
    for(let i = 1; i < 11; i++){
        console.log(i);
    }
}

// Fonction qui compte de 5 à 1 avec une boucle while
function countDown(){
    let i = 5;
    while(i != 0){
        console.log(i);
        i =-1;
    }
}

// Fonction jeu : l'utilsateur doit deviner un nombre secret entre 1 et 10 
// While et if / else
function guessNumber(secretNumber){
    let userPrompt = 11;
    while(userPrompt != secretNumber){
        userPrompt = prompt("please give a number between 1 and 10");
        if(userPrompt < secretNumber){
            console.log("Higher!");
        }else{
            console.log("Lower!");
        }
    }
    
}

// Affiche les nombres de 1 à 10 et indique s'ils sont pairs ou impairs
function showEvenOdd(){
    for(let i = 1; i < 11; i++){
        if(i % 2 == 0){
            console.log(i + " is even");
        }else{
            console.log(i + " is odd");
        }
    }
}

// Fonction qui simule une connexion 
// l'utilisateur à 3 tentatives pour deviner un mot de passe
function login(password){
    let prompt = "";
    let i = 2;
    let access = false;
    while(i > 0){
        prompt = prompt("enter password")
        if(prompt == password){
            access = true
            i = -1;
        }else{
            i --;
        }
        return access;
    }
}

// Fonction qui vérifie si un nombre est parfait 
// un nombre parfait est un nombre qui est égal à la somme de ses diviseurs
// Exemple : 6 est un nombre parfait car 6 = 1 + 2 + 3
function isPerfectNumber(number){
    let sum = 1;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(n % i === 0) {
            sum += i;
            if(i !== number / i){
                sum += number / i
            }
        }

        if(number == sum){
            console.log("number is perfect");
        }else{
            console.log("Number is not perfect");
        }
    }
}


