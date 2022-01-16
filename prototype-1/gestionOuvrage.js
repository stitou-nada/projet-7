class GestionOuvrage {
    #ouvrageList = [];
    #compteur = 0;
  
    get ouvrageList(){
        return this.#ouvrageList;
    }
  
    addOuvrage(ouvrage) {
        this.#compteur = this.#compteur + 1
        ouvrage.id = this.#compteur
        this.#ouvrageList.push(ouvrage)
    }
   
}