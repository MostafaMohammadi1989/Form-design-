// var button = document.getElementById("submit");
// var username = document.getElementById("username");
// var password = document.getElementById("password");
// var email = document.getElementById("email");
// var tbody = document.getElementById("tbody");

// button.addEventListener("click", function () {
//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   td.appendChild(document.createTextNode(username.value));
//   tr.appendChild(td);
//   tbody.appendChild(tr);
// });

var button = document.getElementById("submit");

button.addEventListener("click", function () {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const email = document.getElementById("email");

  const tbody = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  const newRow = tbody.insertRow();

  const usernameCell = newRow.insertCell();
  const passwordCell = newRow.insertCell();
  const emailCell = newRow.insertCell();

  const usernameText = document.createTextNode(username.value);
  const passwordText = document.createTextNode(password.value);
  const emailText = document.createTextNode(email.value);

  usernameCell.appendChild(usernameText);
  passwordCell.appendChild(passwordText);
  emailCell.appendChild(emailText);
});
