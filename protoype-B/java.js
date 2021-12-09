document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ovrage = readOvrage();
    insertNewRow(ovrage);
})


function readOvrage() {

    var ovrage = {};
    ovrage["title"] = document.getElementById("inputTitle").value;
    ovrage["author"] = document.getElementById("inputAuthor").value;
    ovrage["price"] = parseFloat(document.getElementById("inputPrix").value);
    ovrage["date"] = document.getElementById("inputDate").value;
    ovrage["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("ovrageType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            ovrage["type"] = cheackValues[i].value;
            break;
        }
    }
    return ovrage;
}



function insertNewRow(ovrage) {
    var tableBody = document.getElementById("ovragesTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ovrage.title;
    newRow.insertCell(1).innerHTML = ovrage.author;
    newRow.insertCell(2).innerHTML = ovrage.price;
    newRow.insertCell(3).innerHTML = ovrage.date;
    newRow.insertCell(4).innerHTML = ovrage.language;
    newRow.insertCell(5).innerHTML = ovrage.type;
    cell7 = newRow.insertCell(6)


}