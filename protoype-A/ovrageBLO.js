class OuvrageBLO {
    #ouvrageList = [];
    #compteur = 1;
  
    get ouvrageList(){
        return this.#ouvrageList;
    }
  
    addOuvrage(ouvrage) {
        this.#compteur = this.#compteur + 1
        ouvrage.id = this.#compteur
        this.#ouvrageList.push(ouvrage)
    }
  
    editOuvrage(ouvrage) {
        console.log(ouvrage)
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
  
  
  
  deletOuvrage(ouvrage) {
      for (var i = 0; i < this.#ouvrageList.length; i++) {
          if (ouvrage.id == this.#ouvrageList[i].id) {
              this.#ouvrageList[i] = ouvrage
              return ouvrage
          }
      }
  }
  getAllItem(){
      return this.#ouvrageList.sort(function(a,b){
          return a.titre.localCompare(b.titre)
      })
  }
      
  
  }