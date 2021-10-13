document.getElementById("navbarjs").innerHTML = `
    <div>
    <div class="saturn"><img src="icono2.jpg" alt="ico" id="icono"></div>
    <a href="index.html"><div class="navbar">Juanito y sus pegatinas</div></a>
    </div>
    <div>
    <a href="Catalogo.html"><div class="navbar">Catálogo</div></a>
    <a href="personalizados.html"><div class="navbar">Contacto</div></a>
    </div>
    `


document.getElementById("footerjs").innerHTML = `
    <p> Juanito y sus pegatinas - © 2021 </p>
    <a href="https://facebook.com"><img src="face.png" alt="" class="redes"></a>
    <a href="https://instagram.com"><img src="insta.png" alt="" class="redes"></a>
    `


// function validateForm() {
//   let x = document.forms["form1"]["formNombre"].value;
//   let y = document.forms["form1"]["formEmail"].value;
//   if (x == "") {
//     alert("Asegurese de completar el campo de Nombre con sus datos!");
//     return false;
//   }
//   if (y == "") {
//     alert("Asegurese de completar el campo de Email con sus datos!");
//     return false;
//   }
// }
var formulario = document.getElementsByName ('form1')[0];

var validarNombre = function(e){
  if (formulario.formNombre.value == 0){
      alert("Completa el campo nombre");
      e.preventDefault();
    }
};
var validarEmail = function(e){
  if (formulario.formEmail.value == 0){
      alert("Completa el campo Email");
      e.preventDefault();  
  } else {
    if (!formulario.formEmail.value.includes("@") || !formulario.formEmail.value.includes(".")) {
      alert ("Debe ingresar un Email valido")
      e.preventDefault(); 
    }
    if (formulario.formEmail.value.indexOf("@") > formulario.formEmail.value.lastIndexOf(".")) {
      alert ("Debe ingresar un Email valido")
      e.preventDefault(); 
    }
  }
};
var validarStickers = function(e){
  if (formulario.codigoStickers.value == 0){
      alert("Completa el campo Código stickers");
      e.preventDefault();  
  }
};

var validar = function(e){
  validarNombre(e);
  validarEmail(e);
  validarStickers(e);
};

formulario.addEventListener("submit", validar);


