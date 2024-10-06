function saveToLocalStorage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const termsAccepted = document.getElementById("terms").checked;

  if (name && email && password && dob && termsAccepted) {
    const user = {
      name,
      email,
      password,
      dob,
      termsAccepted,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    displayUsers();
  } else {
    alert("Please fill all the fields and accept the terms.");
  }
}

function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userTableBody = document.getElementById("userTableBody");
  userTableBody.innerHTML = "";

  users.forEach((user) => {
    const row = `<tr>
        <td class="px-4 py-2">${user.name}</td>
        <td class="px-4 py-2">${user.email}</td>
        <td class="px-4 py-2">${user.password}</td>
        <td class="px-4 py-2">${user.dob}</td>
        <td class="px-4 py-2">${user.termsAccepted ? "Yes" : "No"}</td>
      </tr>`;
    userTableBody.innerHTML += row;
  });
}

document.addEventListener("DOMContentLoaded", displayUsers);
