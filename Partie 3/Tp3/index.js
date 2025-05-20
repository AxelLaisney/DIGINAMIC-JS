



function displayForm(){
    let ele = document.getElementById("livreForm");
    if(ele.style.display == "none"){
        ele.style.display = "block";
    }else{
        ele.style.display = "none";
    }
}

function displayField(){
    let taille = document.getElementById("taille");
    let pages = document.getElementById("pages");
    let select = document.getElementById("typeLivre");
    if(select.value == "papier"){
        taille.style.display = "none";
        pages.style.display = "block";
    }else{
        taille.style.display = "block";
        pages.style.display = "none";
    }
    
}

function submit(){
    let select = document.getElementById("typeLivre").value;
    let nom = document.getElementById("livreName").value;
    let auteur = document.getElementById("livreAuteur").value;
    let annee = document.getElementById("livreAnnee").value;
    if(select == "papier"){
        let pages = document.getElementById("livrePages").value;
        let livre = new LivrePapier(nom, auteur, annee, pages)
        let format = `<li class="livre" value="${livre}">${livre.afficheInfo}<button class="emprunt" onClick="empruntLivre(${livre.id})">Emprunter</button></li>`
        document.getElementById("livreList").innerHTML += format;
    }else{
        let taille = document.getElementById("livreTaille").value;
        let livre = new LivreNumerique(nom, auteur, annee, taille);
        let format = `<li>${livre.afficheInfo}</li>`
        document.getElementById("livreList").innerHTML += format;
        document.getElementById("livreList").innerHTML += format;
    }
}

function displayUsers(){
    let select = document.getElementById("changeUser");
    let label = document.getElementById("currentUser");
    label.textContent = select.textContent;
    label.value = select.value;

}

function displayInfos(){
    let currentUser = document.getElementById("currentUser");
    if(currentUser.value == "Bibliothecaire"){
        document.getElementsByClassName("emprunt").style.display = "none";
        document.getElementById("addLivre").style.display = "block";
    }else{
        document.getElementsByClassName("emprunt").style.display = "block";
        document.getElementById("addLivre").style.display = "none";
    }
}

function empruntLivre(livreId){
    let user = document.getElementById("currentUser").value;
    let livreList = document.getElementsByClassName("livre");
    if(user.constructor.name == "Membre"){
        for(let i = 0; i < livreList.length; i++){
            if(livreList[i].value.id == livreId){
                user.empruntLivre(livreList[i].value)
            }
        }
    }
}

let biblio = new Bibliothecaire("Carla");
let users = [biblio]
let currentUser = document.getElementById("currentUser");
currentUser.textContent = biblio.nom;
currentUser.value = biblio
document.getElementById("changeUser").innerHTML += `<option value="${biblio.constructor.name}">${biblio.nom}</option>`;
displayInfos();


document.getElementById("addLivre").addEventListener("click", displayForm);
document.getElementById("typeLivre").addEventListener("change", displayField);
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("changeUser").addEventListener("change", displayUsers);
document.getElementById("changeUser").addEventListener("change", displayInfos);