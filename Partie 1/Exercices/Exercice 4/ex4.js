// Fonction qui affiche les éléments d'un tableau passés en paramètre, puis sa longueur
function displayArray(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    // console.log(array);
    console.log("Longueur du tableau : " , array.length);
}

// displayArray([1, 2, 3, 4, 5]);

// Fonction qui détecte si un élément est présent dans un tableau
function isElementInArray(array, element){
    for (let i = 0; i < array.length; i++){
        if (array[i] == element){
            return true;
        }
    }
    return false;
}

// console.log(isElementInArray([1, 2, 3, 4, 5], 3));
// console.log(isElementInArray([1, 2, 4, 5], 3));

// Fonction qui compte le nombre d'occurences d'un élément dans un tableau
function countOccurences(array, element){
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == element){
            count++;
        }
    }
    return count;
}

// console.log(countOccurences([4, 5], 3));
// console.log(countOccurences([1, 1, 1, 5], 1));

// Fonction qui calcule la moyenne de plusieurs eleves pour une meme matière
// Attention : le tableau passé en paramètre doit être à double entrée 
// Exemple : [[11, 12], [13, 18], [05, 12]]  : Renvoie [11.5, 15.5, 8.5]
function calculateAverage(array){
    let average = [];
    for (let i = 0; i < array.length; i++){
        let sum = 0;

        for (let j = 0; j < array[i].length; j++){
            sum += array[i][j];
        }
        average.push(sum / array[i].length);
    }
    return average;
}

// console.log(calculateAverage([[11, 12], [13, 18], [5, 12]]));
// console.log(calculateAverage([[10, 12], [15, 17,20,20], [5, 5,10]]));



// Fonction qui trie un tableau par ordre croissant 

function sortArray(array){

   let n = array.length;

   for (let i = 0; i < n; i++) { // parcours du tableau
        for (let j = 0; j < n - 1; j++) { // parcours du tableau

            if (array[j] > array[j + 1]) { // si l'élément actuel est plus grand que l'élément suivant
                // Échange des éléments
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(sortArray([1, 2, 3, 4, 5]));
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([1, 3, 2, 5, 4]));

