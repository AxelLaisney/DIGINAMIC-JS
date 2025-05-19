// Pour chacune des fonctions, les evenements sont déjà écrit en fin de fichier.
// Il ne reste plus qu'à écrire le code dans les fonctions.

// Fonction 1 : Changer le texte du titre principal (h1)
function changeTitle() {
    // TODO : Sélectionne l'élément avec l'id "main-title" et change son texte pour "Titre modifié !"

  }
  
  // Fonction 2 : Surligner tous les paragraphes en jaune
  function highlightParagraphs() {
    // TODO : Sélectionne tous les éléments avec la classe "description"
    // et change leur arrière-plan pour "yellow"
  }
  
  // Fonction 3 : Ajouter un nouvel élément à la liste
  function addItem() {
    // TODO : Crée un nouvel élément <li> avec le texte "Nouvel Item"
    // puis l'ajoute à la fin de la liste avec l'id "items-list"
  }
  
  // Fonction 4 : Supprimer le dernier élément de la liste
  function removeLastItem() {
    // TODO : Supprime le dernier élément <li> de la liste
  }

  // Fonction 5 : Cacher / afficher la liste (ul)
function toggleListVisibility() {
    const list = document.getElementById("items-list");
    // TODO : Si la liste est visible, on la cache. Sinon, on l'affiche.
    // Utilise style.display
  }
  
  // Fonction 6 : Changer le texte du 2e paragraphe
  function changeSecondParagraph() {
    const paragraphs = document.querySelectorAll(".description");
    if (paragraphs.length >= 2) {
      // TODO : Change le texte du 2e paragraphe pour "Paragraphe modifié dynamiquement !"
    }
  }
  
  
  // --- Événements ---
  document.getElementById("change-title").addEventListener("click", changeTitle);
  document.getElementById("highlight-paragraphs").addEventListener("click", highlightParagraphs);
  document.getElementById("add-item").addEventListener("click", addItem);
  document.getElementById("remove-last-item").addEventListener("click", removeLastItem);
  document.getElementById("toggle-list-visibility").addEventListener("click", toggleListVisibility);
  document.getElementById("change-second-paragraph").addEventListener("click", changeSecondParagraph);