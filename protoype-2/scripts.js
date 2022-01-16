var gestionOuvrage = new GestionOuvrage();

var selectRow = null;
var ouvrageId = null;

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    if (selectRow == null) {
    gestionOuvrage.addOuvrage(ouvrage);
    }
    else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")){
        ouvrage.id = rowId;
        gestionOuvrage.editOuvrage(ouvrage)
    }

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
    cell3 = newRow.insertCell(2);


    var editButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.setAttribute('onclick', 'onEdit(this)')
 
   cell3.appendChild(editButton) 
  }
  
}

function onEdit(buttonReference) {
    selectRow = buttonReference.parentElement.parentElement;
    rowId = selectRow.cells[0].innerHTML
    var ouvrage = new Ouvrage();
    ouvrage = gestionOuvrage.getItem(rowId)
    document.getElementById("inputTitle").value = ouvrage.titre;

}
