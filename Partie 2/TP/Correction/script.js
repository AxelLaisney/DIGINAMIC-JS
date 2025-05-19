// Bibliothèque représente un tableau d'objets de livres
let bibliotheque = [];

// Fonction pour créer un livre
function creerLivre(titre, annee, auteur) {
  return {
    titre,
    annee,
    auteur,
    afficherInformations: function() {
      return `${this.titre} (${this.annee}) par ${this.auteur}`;
    }
  };
}

// Fonctions d'interface utilisateur
// showAddBookForm : Affiche le formulaire pour ajouter un livre
function showAddBookForm() {
  hideAllSections();
  document.getElementById('addBookForm').style.display = 'block';
}

// showAllBooks : Affiche la liste de tous les livres
function showAllBooks() {
  hideAllSections();
  document.getElementById('bookList').style.display = 'block';
  afficherLivres();
}

// showSearchInterface : Affiche la recherche de livres
function showSearchInterface() {
  hideAllSections();
  document.getElementById('searchInterface').style.display = 'block';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

// hideAllSections : Masque toutes les sections
function hideAllSections() {
  document.getElementById('addBookForm').style.display = 'none';
  document.getElementById('bookList').style.display = 'none';
  document.getElementById('searchInterface').style.display = 'none';
}

// Fonction pour ajouter un livre
function submitNewBook() {
  try {
    const titre = document.getElementById('bookTitle').value;
    // parseInt : Convertit la valeur en nombre entier 
    const annee = parseInt(document.getElementById('bookYear').value);
    const auteur = document.getElementById('bookAuthor').value;

    // Si une erreur est levée, elle est capturée et affichée à l'utilisateur
    if (!titre) throw new Error("Titre obligatoire.");
    if (isNaN(annee)) throw new Error("Année invalide.");
    if (!auteur) throw new Error("Auteur obligatoire.");

    // Crée un nouvel objet livre
    const livre = creerLivre(titre, annee, auteur);
    // Ajoute le livre au tableau bibliotheque
    bibliotheque.push(livre);

    // Réinitialiser le formulaire
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookYear').value = '';
    document.getElementById('bookAuthor').value = '';

    alert("Livre ajouté avec succès !");
  // Afficher la liste mise à jour
    showAllBooks(); 
  } catch (e) {
    alert("Erreur : " + e.message);
  }
}

// Fonction pour afficher tous les livres
function afficherLivres() {
  // Récupère le conteneur de la liste des livres
  const container = document.getElementById('bookListContainer');
  // Efface le contenu du conteneur
  container.innerHTML = '';

  // Si le tableau bibliotheque est vide, affiche un message
  if (bibliotheque.length === 0) {
    container.innerHTML = '<p>Aucun livre enregistré.</p>';
    return;
  }

  // Parcourt le tableau bibliotheque et crée un élément <li> pour chaque livre
  bibliotheque.forEach((livre, index) => {
    // Crée un élément <li>
    const li = document.createElement('li');
    // Ajoute la classe 'book-item' à l'élément <li>
    li.className = 'book-item';
    // Ajoute le contenu de l'élément <li>
    li.innerHTML = `
      <span>${livre.afficherInformations()}</span>
      <button class="button delete-btn" onclick="supprimerLivre(${index})">Supprimer</button>
    `;
    // Ajoute l'élément <li> au conteneur
    container.appendChild(li);
  });
}

// Fonction de recherche en temps réel
function searchBooks() {
  // Récupère la valeur de la recherche
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  // Récupère le conteneur des résultats
  const resultsContainer = document.getElementById('searchResults');
  // Efface le contenu du conteneur
  resultsContainer.innerHTML = '';

  // Si la valeur de la recherche est vide, retourne
  if (!searchTerm) {
    return;
  }

  // Filtre les livres qui contiennent le terme de recherche
  const resultats = bibliotheque.filter(livre => 
    livre.titre.toLowerCase().includes(searchTerm)
  );

  // Si aucun résultat n'est trouvé, affiche un message
  if (resultats.length === 0) {
    resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    return;
  }

  // Parcourt les résultats et crée un élément <div> pour chaque livre
  resultats.forEach((livre, index) => {
    // Crée un élément <div>
    const div = document.createElement('div');
    // Ajoute la classe 'book-item' à l'élément <div>
    div.className = 'book-item';
    // Ajoute le contenu de l'élément <div>
    div.innerHTML = `
      <span>${livre.afficherInformations()}</span>
      <button class="button delete-btn" onclick="supprimerLivre(${bibliotheque.indexOf(livre)})">Supprimer</button>
    `;
    resultsContainer.appendChild(div);
  });
}

// Fonction pour supprimer un livre
function supprimerLivre(index) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
    bibliotheque.splice(index, 1);
    // Rafraîchir l'affichage selon la vue active
    if (document.getElementById('bookList').style.display === 'block') {
      afficherLivres();
    } else if (document.getElementById('searchInterface').style.display === 'block') {
      searchBooks();
    }
  }
}