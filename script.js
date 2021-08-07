var a = prompt("Please write pirru birthday wish karde");
var b = prompt(
  "Ek baar aur likh de pirru birthday wish karde junki iss bar bina bole wish kar rahi"
);
if (
  a.toLowerCase().trim() == "pirru birthday wish karde" &&
  b.toLocaleLowerCase().trim() == "pirru birthday wish karde"
) {
  window.location.href = "start.html";
} else {
  alert("invalid details");
  window.location.href = "index.html";
}
