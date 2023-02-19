var form = document.querySelector("form");
var table = document.querySelector("table tbody");

function addRow() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let email = document.querySelector("#email").value;

  let row = document.createElement("tr");
  let cellUsername = document.createElement("td");
  let cellPassword = document.createElement("td");
  let cellEmail = document.createElement("td");
  let cellDelet = document.createElement("td");
  let deletBtn = document.createElement("button");

  cellUsername.textContent = username;
  cellPassword.textContent = password;
  cellEmail.textContent = email;
  deletBtn.textContent = "Delet";

  deletBtn.addEventListener("click", () => {
    row.remove();
  });

  cellDelet.appendChild(deletBtn);
  row.appendChild(cellUsername);
  row.appendChild(cellPassword);
  row.appendChild(cellEmail);
  row.appendChild(cellDelet);
  table.appendChild(row);
}

document.querySelector("#submit").addEventListener("click", addRow);
