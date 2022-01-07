// declaration
var ovrageBLO = new OvrageBLO();
var selecteRow = null 

document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ovrage = readovrage();
    if (selecteRow == null) {
        ovrage.id = ovrageBLO.counter
        ovrageBLO.counter++;
        insertNewRow(ovrage);
        ovrageBLO.ajouteOvrage(ovrage);
    }
    else{
      if (confirm("Êtes-vous sûr de modifier cette œuvre?"))
        editRow(work)

        resetForm();
   }
   function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectedRow = null;
}
})

function readOvrage() {
var ovrage = new Ovrage();
ovrage.title = document.getElementById(inputTitle).value;
selecteRow = null;
}



function insertNewRow(ovrage) {
    var tableBody = document.getElementById("ovragesTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ovrage.id;
    newRow.insertCell(1).innerHTML = ovrage.Title;

    var modifierButton = document.createElement("button")
    var suprimerButton = document.createElement("button")

    var modifierContent = document.createTextNode("Edit")
    modifierButton.appendChild(editContent)
    modifierButton.setAttribute('onclick', 'onEdit(this)')

    var modifierContent = document.createTextNode('Delete')
    suprimerButton.appendChild(suprimerContent)
    suprimerButton.setAttribute("onclick", 'onDelete(this)')

    cell3.appendChild(modifierButton)
    cell3.appendChild(suprimerButton)
}




