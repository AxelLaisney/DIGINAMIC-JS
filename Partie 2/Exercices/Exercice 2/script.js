// Réalisez les fonctions suivantes, et ajoutez les événements si nécessaire en fin de fichier.

// Fonction 1 : Ajouter un nouvel article
function addArticle() {
    // TODO : Créer un nouvel élément <div> avec la classe "article" et le texte "Nouvel Article"
    // et l'ajouter dans #articles-container
    let ele = document.getElementById("articles-container");
    let div = document.createElement("div");
    div.textContent = "Nouvel article";
    div.classList.add("article");
    ele.appendChild(div);
  }
  
  // Fonction 2 : Rechercher un article
  function searchArticle() {
    // TODO : Récupérer la valeur de l'input
    // Pour chaque .article, affiche-le uniquement si son texte contient la valeur entrée
    let input = document.getElementById("search-input").value;
    let articles = document.getElementById("articles-container");
    if(input != ""){
      for(let child of articles.children){
        if(child.innerHTML != input){
          child.style.display = "none";
        }
      }
    }else{
      let article = document.getElementsByClassName("article");
      for(let i = 0; i < article.length; i++){
        article[i].style.display = "block";
      }
    }
  
  }
  
  // Fonction 3 : Changer la couleur de fond des articles
  function changeBackgroundColor() {
    // TODO : Récupérer la valeur sélectionnée dans le <select>
    // Appliquer cette couleur comme background à tous les éléments .article
    let ele = document.getElementById("color-picker")
    let articles = document.getElementsByClassName("article");
    for(let i = 0; i < articles.length; i++){
      articles[i].style.backgroundColor = ele.value;
    }
  }
  
  // Fonction 4 : Afficher une alerte quand on survole un article
  function setupHoverAlert() {
    alert("Hello");
  }
  
  // --- Événements  Ici ---
document.getElementById("add-article").addEventListener("click", addArticle);
document.getElementById("search-input").addEventListener("input", searchArticle);
document.getElementById("color-picker").addEventListener("change", changeBackgroundColor);
let articles = document.getElementsByClassName("article");
for (let i = 0; i < articles.length; i++){
  articles[i].addEventListener("mouseover", setupHoverAlert);
}


  // Appelle cette fonction une fois au chargement pour activer les survols
  window.onload = setupHoverAlert(); 
   