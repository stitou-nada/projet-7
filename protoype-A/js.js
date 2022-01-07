// declaration
var ovrage = new ovrage();
var ovrageBLO = new OvrageBlo();


document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    readOvrage()
    insertNewRow(ovrage);
    ovrageBlo.ajouteOvrage(ovrage);
})


function readOvrage() {
ovrage.id = ovrageBlo.conter++;
ovrage.title = document.getElementById(inputTitle).value
}



function insertNewRow(ovrage) {
    var tableBody = document.getElementById("ovragesTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ovrage.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ovrage.Title;
}