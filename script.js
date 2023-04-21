function addRow() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var age = parseInt(document.getElementById("age").value);

 if (name.trim() === '' || surname.trim() === '') {
  alert("Užpildykite visus laukelius.");
  return;
}
if (!isNaN(name) || !isNaN(surname)) {
  alert("Vardas ir pavardė negali būti skaičiai");
  return;
}
  if (isNaN(age) || age <= 0) {
    alert("Patikslinkite amžių")  
  }
  // siek tiek pajuokavimui :)
  if (isNaN(age) || age >= 90) {
    alert("Juk neesi toks senas :D")  
  }

  var table = document.getElementById("table");
  var row = document.createElement("tr");

  var cell = document.createElement("td");
  var cellText = document.createTextNode(name);
  cell.appendChild(cellText);
  row.appendChild(cell);

  cell = document.createElement("td");
  cellText = document.createTextNode(surname);
  cell.appendChild(cellText);
  row.appendChild(cell);

  cell = document.createElement("td");
  cellText = document.createTextNode(age);
  cell.appendChild(cellText);
  row.appendChild(cell);

  table.appendChild(row);

document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("age").value = "";
}


// Istrina pirma
function removeFirst() {
  var table = document.getElementById("table");
  var rowCount = table.rows.length;
  if (rowCount > 4) {
    table.deleteRow(4);
  }
}

// istrina paskutini
function removeLast() {
  var table = document.getElementById("table");
  var rowCount = table.rows.length;
  if (rowCount > 4) {
    table.deleteRow(rowCount - 1);
  }
}
