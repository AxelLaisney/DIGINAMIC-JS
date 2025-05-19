class Bibliothecaire extends Utilisateur{
    constructor(nom){
        super(nom);
    }
    ajouterLivre(livre, bibliotheque){
        bibliotheque.add(livre);
    }
}