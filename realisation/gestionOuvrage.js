class GestionOuvrage{
    #ouvrageList = [];
    #compteur = 0;
    
   get ouvrageList(){
       return this.#ouvrageList;
   }

   addOuvrage(ouvrage){
    this.ouvrir()
       this.#compteur = this.#compteur + 1
       ouvrage.id = this.#compteur
       this.#ouvrageList.push(ouvrage)
       this.enregistrer()
   }
   modifierOuvrage(ouvrage) {
    this.ouvrir()
    for (var i = 0; i < this.#ouvrageList.length; i++) {
        if (ouvrage.id == this.#ouvrageList[i].id) {
            this.#ouvrageList[i] = ouvrage
            this.enregistrer()
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
  suprimerOuvrage(ouvrage) {
      this.ouvrir
    for (var i = 0; i < this.#ouvrageList.length; i++) {
        if (ouvrage.id == this.#ouvrageList[i].id) {
            this.#ouvrageList[i] = ouvrage
            return ouvrage
        }
    }
    this.enregistrer()
}
getAllItem(){
    return this.#ouvrageList.sort(function(a,b){
        return a.titre.localCompare(b.titre)
    })
}
enregistrer() {

    var stringList = JSON.stringify(this.#ouvrageList)

    localStorage.setItem('workList', stringList)
    console.log(JSON.parse(localStorage.getItem("ouvrageList")))


    localStorage.setItem('compteur', this.#compteur)
}

ouvrir() {
    this.#ouvrageList = JSON.parse(localStorage.getItem("ouvrageList") || "[]")
    this.#compteur = parseInt(localStorage.getItem('compteur') || 0)
    console.log(this.#ouvrageList)
    console.log(localStorage.getItem("ouvrageList"))

}

    
}