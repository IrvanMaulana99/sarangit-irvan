document.getElementById("button").addEventListener("click", function (e) {
  var sarangit = window.confirm(
    "Apa anda yakin ingin membuka website Sarang IT ?"
  );
  if (sarangit) {
    location.href = "Http://sarang-it.com/";
  }
});
document.getElementById("button2").addEventListener("click", function (e) {
    var sarangit = window.confirm(
      "Apa anda yakin ingin membuka website Profil ?"
    );
    if (sarangit) {
      location.href = "https://irvangarut.netlify.app/";
    }
  });
