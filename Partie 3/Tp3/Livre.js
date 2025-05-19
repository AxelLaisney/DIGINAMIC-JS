class Livre{
    constructor(titre, auteur, annee){
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.id = Date.now();
    }
    afficheInfo(){
        console.log("Titre: "+this.titre +" auteur: "+this.auteur+" annee: "+this.annee+" id: "+this.annee);
    }
}