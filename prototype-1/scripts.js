var gestionOuvrage = new GestionOuvrage();

var selectRow = null;
var ouvrageId = null;

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    gestionOuvrage.addOuvrage(ouvrage);

    insertNewRow();

    resetForm();
     
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectRow = null;
}


function readOuvrage() {
    var ouvrage = new Ouvrage();
    
    ouvrage.titre = document.getElementById("inputTitle").value;
    return ouvrage;
}



function insertNewRow() {
    var List = gestionOuvrage.ouvrageList
    var tableBody = document.getElementById("ouvrageTable").getElementsByTagName('tbody')[0];
   while(tableBody.rows.length > 0){
       tableBody.deleteRow(0);
   }
   for(var i = 0; i < List.length; i++){
    var newRow = tableBody.insertRow(tableBody.length);
    cell1 = newRow.insertCell(0)
    cell1.innerHTML =List[i].id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = List[i].titre;
   }
  
}
