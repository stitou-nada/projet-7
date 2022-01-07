class OvrageBLO{
    ovrageList = [];
    conter = 0;

    ajouteOvrage(ovrage){
        this.ovrageList.push(ovrage)
    }
    modifierOvrage(ovrage){
        for (var i = 0; i<this.ovrageList.lenght;i++) {
          if (ovrage.id == this.ovrageList[i].id) {
              this.ovrageList[i] = ovrage
            
              return ovrage
          }
     
            
        }
    }
    getItem(id) {
        for (var i = 0; i < this.ovrageList.length; i++) {
            if (id == this.ovrageList[i].id) {
                return this.ovrageList[i]
            }
        }
    }
}