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

}


document.getElementById("addLivre").addEventListener("click", displayForm);
document.getElementById("typeLivre").addEventListener("change", displayField);
document.getElementById("submit").addEventListener("click", submit);