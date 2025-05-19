// Fonction qui affiche les éléments d'un tableau passés en paramètre, puis sa longueur
function displayArray(array){
    for(let a in array){
        console.log(a);
    }
    console.log(array.length);
}

// Fonction qui détecte si un élément est présent dans un tableau
function isElementInArray(array, element){
    return array.includes(element);
}

// Fonction qui compte le nombre d'occurences d'un élément dans un tableau
function countOccurences(array, element){
    let count = 0;
    for(let a in array){
        if(a == element){
            count ++;
        }
    }
    return count;
}

// Fonction qui calcule la moyenne de plusieurs eleves pour une meme matière
// Attention : le tableau passé en paramètre doit être à double entrée 
// Exemple : [[11, 12], [13, 18], [05, 12]]  : il y a trois eleves avec une seule matière
function calculateAverage(array){
    let summ = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            sum += array[i] + array[j];
        }
    }
    return sum/array.length;
}

// Fonction qui trie un tableau par ordre croissant 
// Si l'exercice est terminé, chercher un moyen de trier le tableau de la manière la plus optimale (complexité), se renseigner sur les algorithmes de tri
function sortArray(array){
    return array.sort;
}
