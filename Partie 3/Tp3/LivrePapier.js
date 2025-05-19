class LivrePapier extends Livre{
    constructor(titre, auteur, annee, nbPages){
        super(titre, auteur, annee);
        this.nbPages = nbPages;
    }
    afficheInfo(){
        console.log("Titre: "+this.titre +" auteur: "+this.auteur+" annee: "+this.annee+" id: "+this.annee + "nombres de pages: "+this.nbPages);
    }
}