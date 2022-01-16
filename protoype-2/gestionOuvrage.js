class GestionOuvrage{
    #ouvrageList = [];
    #compteur = 0;
    
   get ouvrageList(){
       return this.#ouvrageList;
   }

   addOuvrage(ouvrage){
       this.#compteur = this.#compteur + 1
       ouvrage.id = this.#compteur
       this.#ouvrageList.push(ouvrage)
   }
   editOuvrage(ouvrage) {
    for (var i = 0; i < this.#ouvrageList.length; i++) {
        if (ouvrage.id == this.#ouvrageList[i].id) {
            this.#ouvrageList[i] = ouvrage
            return ouvrage
        }
    }
  }
  getItem(id) {
    for (var i = 0; i < this.ouvrageList.length; i++) {
        if (id == this.ouvrageList[i].id) {
            return this.ouvrageList[i]
        }
    }
  }
}