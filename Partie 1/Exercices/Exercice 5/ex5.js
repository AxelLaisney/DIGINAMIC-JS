// Fonction qui crée un objet représentant une personne avec les propriétés : nom, prenom, age, profession
// et retourne l'objet
function createPerson(nom, prenom, age, profession) {
    return {
        nom : nom,
        prenom : prenom,
        age : age,
        profession : profession
    }
}

// console.log(createPerson("John", "Doe", 30, "Developer"));

// Fonction qui affiche proprement les propriétés d’un objet passé en paramètre
// for in 
function displayObject(obj) {
    for (let key in obj) {
        console.log(key + " : " + obj[key]);
    }
}

// displayObject(createPerson("John", "Doe", 30, "Developer"));

// Fonction qui ajoute une nouvelle propriété à un objet
// exemple : {a: 1, b: 2} et "c" -> 3 -> {a: 1, b: 2, c: 3}
function addProperty(obj, key, value) {
    obj[key] = value;
}

// let obj = {a: 1, b: 2};
// addProperty(obj, "c", 3);
// console.log(obj);

// Fonction qui vérifie si une propriété existe dans un objet
// exemple : {a: 1, b: 2} et "a" -> true
function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

// let obj = {a: 1, b: 2};
// console.log(hasProperty(obj, "a"));

// Fonction qui retourne le nombre total de propriétés dans un objet
// exemple : {a: 1, b: 2} -> let obj = {a: 1, b: 2};
// console.log(countProperties(obj));2
function countProperties(obj) {
    return Object.keys(obj).length;
}

// 


// Fonction qui fusionne deux objets en un seul (les clés du second objet écrasent celles du premier en cas de doublon)
// exemple : {a: 1, b: 2} et {b: 3, c: 4} -> {a: 1, b: 3, c: 4}
// sans utiliser ...
function mergeObjects(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}

// let obj1 = {a: 1, b: 2};
// let obj2 = {b: 3, c: 4};
// console.log(mergeObjects(obj1, obj2));

// Fonction qui retourne un tableau contenant toutes les valeurs d’un objet
// exemple : {a: 1, b: 2} -> [1, 2]
function getObjectValues(obj) {
    return Object.values(obj);
}

let obj = {a: 1, b: 2};
console.log(getObjectValues(obj));
