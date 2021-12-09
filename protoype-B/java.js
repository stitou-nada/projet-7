var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var Ovrage = readOvrage();
    if(selectedRow ===null){
        insertNewRow(Ovrage);
    }
    else{
        updateRecord(Ovrage);
    }
    resetForm();
});


function readOvrage() {

    var Ovrage = {};
    Ovrage["title"] = document.getElementById("inputTitle").value;
    Ovrage["author"] = document.getElementById("inputAuthor").value;
    Ovrage["price"] = parseFloat(document.getElementById("inputPrix").value);
    Ovrage["date"] = document.getElementById("inputDate").value;
    Ovrage["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("OvrageType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            Ovrage["type"] = cheackValues[i].value;
            break;
        }
    }
    return Ovrage;
}



function insertNewRow(Ovrage) {
   {
        var tableBody = document.getElementById("OvragesTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = Ovrage.title;

    newRow.insertCell(1).innerHTML = Ovrage.author;
    
    newRow.insertCell(2).innerHTML = Ovrage.price;
        
    newRow.insertCell(3).innerHTML= Ovrage.date;
    
    newRow.insertCell(4).innerHTML= Ovrage.language
   
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = Ovrage.type;
    
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button>  <button onClick='onDelete(this)'>Delete</button>`;

    }
    



}
//Edit the Ovrage
function onEdit(td){
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById('inputTitle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('inputAuthor').value = selectedRow.cells[1].innerHTML;
    document.getElementById('inputPrix').value = selectedRow.cells[2].innerHTML;
    document.getElementById('inputDate').value = selectedRow.cells[3].innerHTML;
    document.getElementById('inputLanguage').value = selectedRow.cells[4].innerHTML;
    document.getElementById('gridCheck').value = selectedRow.cells[5].innerHTML;


}
function updateRecord(Ovrage){
    selectedRow.cells[0].innerHTML = Ovrage.title;
    selectedRow.cells[1].innerHTML = Ovrage.author;
    selectedRow.cells[2].innerHTML = Ovrage.price;
    selectedRow.cells[3].innerHTML = Ovrage.date;
    selectedRow.cells[4].innerHTML = Ovrage.language;
    selectedRow.cells[5].innerHTML = Ovrage.type;


}
//Delete the Ovrage
function onDelete(td){
    if(confirm('Voulez-vous supprimer cet enregistrement ?')){
      var  row = td.parentElement.parentElement;
        document.getElementById('OvragesTable').deleteRow(row.rowIndex)
    }
    resetForm();
}

//reset the Ovrage
function resetForm(){
    document.getElementById('inputTitle').value ='';
    document.getElementById('inputAuthor').value ='';
    document.getElementById('inputPrix').value ='';
    document.getElementById('inputDate').value ='';
    document.getElementById('inputLanguage').value ='';
    document.getElementById('gridCheck').value ='';

}