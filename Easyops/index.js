var selectedRow = null;

function onFromSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    } else{

    }

}

// Retrive the data

function readFormData(){
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["cno"] = document.getElementById("cno").value;
    return formData;
}

// Insert the data

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.cno;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick = 'onDelete(this)'>x</button>`
}

// Delete the data

function onDelete(td){
    if(confirm("Do you want to delete this record")){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset the data

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("cno").value = "";
}