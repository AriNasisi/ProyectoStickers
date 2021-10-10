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


function validateForm() {
  let x = document.forms["form1"]["formNombre"].value;
  let y = document.forms["form1"]["formEmail"].value;
  if (x == "") {
    alert("Asegurese de completar el campo de Nombre con sus datos!");
    return false;
  }
  if (y == "") {
    alert("Asegurese de completar el campo de Email con sus datos!");
    return false;
  }
}



