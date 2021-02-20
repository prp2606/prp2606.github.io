function add() {
  let expense = document.getElementById("expense").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;

  if (expense != "" && date != "" && amount != "") {
    let table = document.getElementById("list");

    let tablebody = Array.from(table.children);
    let tablebodyrow = document.createElement("tr");
    tablebodyrow.innerHTML = `<td>${expense}</td>`;
    tablebodyrow.innerHTML += `<td>${date}</td>`;
    tablebodyrow.innerHTML += `<td>₹ ${amount}</td>`;
    tablebodyrow.innerHTML += `<td><button onclick="removeitem()">DELETE</button></td>`;

    tablebody[1].appendChild(tablebodyrow);

    document.getElementById("exp").value = "";
    document.getElementById("dte").value = "";
    document.getElementById("amt").value = "";
  }
}

function removeitem() {
  let td = event.srcElement.parentElement;
  let item = td.parentElement;
  item.style.display = "none";
}
