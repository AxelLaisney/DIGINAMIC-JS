class Utilisateur {
    constructor(nom){
        this.nom = nom
        this.id = Date.now();
    }
    voirProfil(){
        console.log("Nom: "+this.nom+" id: "+this.id);
    }
}