
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 


    const nombre = document.getElementById("nombre").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();

 
    if (nombre === "" || password === "" || confirmar === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Información incompleta, debe completar todos los campos solicitados.",
      });
      return;
    }


    if (password !== confirmar) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
      return;
    }


    Swal.fire({
      icon: "success",
      title: "Cuenta creada",
      text: "El usuario se registró correctamente",
    });


    formulario.reset();
  });
});
