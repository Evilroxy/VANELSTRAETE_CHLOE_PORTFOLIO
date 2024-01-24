let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let nom = document.getElementById("name");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");
  let caractere = ["@" , "com"]
    
  let caractereNom = " ";
  if (nom.value == "") {
    nom.style.borderColor = "red";
  }
  if (email.value == "") {
    email.style.borderColor = "red";
  }
  if (email.value.match(caractere)) {
    email.style.borderColor = "green"
  } else {
    email.style.borderColor = "red";
  }
  if (nom.value.match(caractereNom)) {
    nom.style.borderColor = "green"
  } else {
    nom.style.borderColor = "red";
  }
});
