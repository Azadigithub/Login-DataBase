let userElem = document.querySelector("#user-name");
let passElem = document.querySelector("#password");
let emailElem = document.querySelector("#email");
let formElem = document.querySelector("#form");

formElem.addEventListener("submit", function (e) {
    e.preventDefault();
  //   console.log("sub");
  let usersdata = {
    username: userElem.value,
    password: passElem.value,
    email: emailElem.value,
  };

  // console.log(...Object.entries(data));
    console.log(usersdata.username);
    console.log(usersdata.password);
    console.log(usersdata.email);

  //POST requset    =>  https://submit-database-default-rtdb.firebaseio.com
  fetch("https://submit-database-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
        //   "Authorization": "admin"
    },
    body: JSON.stringify(usersdata),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  clear();
});

function clear() {
  userElem.value = "";
  passElem.value = "";
  emailElem.value = "";
}
