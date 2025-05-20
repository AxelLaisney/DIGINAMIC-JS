

export class Membre extends Utilisateur{
    constructor(name){
        super(name);
        this.livres = [];
    }
    emprunterLivre(livre){
        this.livres.add(livre);
    }
}