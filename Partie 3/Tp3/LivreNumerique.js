class LivreNumerique extends Livre{
    constructor(titre, auteur, annee, tailleFichier){
        super(titre, auteur, annee);
        this.tailleFichier = tailleFichier;
    }
    afficheInfo(){
        console.log("Titre: "+this.titre +" auteur: "+this.auteur+" annee: "+this.annee+" id: "+this.annee+ "taille du fichier: "+this.tailleFichier);
    }
}