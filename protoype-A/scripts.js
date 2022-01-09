var ouvrageBLO = new OuvrageBLO();

var selectRow = null;
var ouvrageId = null;

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    if (selectRow == null) {
        ouvrage.id = ouvrageBLO.compteur
        // ouvrageBLO.compteur++;
    
        ouvrageBLO.addOuvrage(ouvrage);
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?")){
        ouvrage.id = rowId;
        ouvrageBLO.editOuvrage(ouvrage)
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
    var ouvrageList = ouvrageBLO.getAllItem()
    console.log(ouvrageBLO.getAllItem())
    var tableBody = document.getElementById("ouvrageTable").getElementsByTagName('tbody')[0];
   while(tableBody.rows.length>0){
       tableBody.deleteRow(0);
   }
   for(var i = 0; i < ouvrageList.length; i++){
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ouvrageList[i].id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ouvrageList[i].title;
    cell3 = newRow.insertCell(2)

    var editButton = document.createElement("button")
        var deleteButton = document.createElement("button")
    
        var editContent = document.createTextNode("Edit")
        editButton.appendChild(editContent)
        editButton.setAttribute('onclick', 'onEdit(this)')
    
        var deleteContent = document.createTextNode('Delete')
        deleteButton.appendChild(deleteContent)
        deleteButton.setAttribute("onclick", 'onDelete(this)')
    
        cell3.appendChild(editButton)
        cell3.appendChild(deleteButton)
    }

  
}



function onEdit(buttonReference) {
    selectRow = buttonReference.parentElement.parentElement;
    rowId = selectRow.cells[0].innerHTML
    var ouvrage = new Ouvrage();
    ouvrage = ouvrageBLO.getItem(rowId)
    document.getElementById("inputTitle").value = ouvrage.titre;

}

function onDelete(buttonReference) {
    if (confirm("Êtes-vous sûr de supprimer cette œuvre?")) {
        var row = buttonReference.parentElement.parentElement;
        var rowId = row.cells[0].innerHTML

        document.getElementById("ouvrageTable").deleteRow(row.rowIndex)
        
        ouvrageBLO.deletOuvrage(rowId)
        resetForm()
        console.log(ouvrageBLO.ouvrageList)
    }
}
