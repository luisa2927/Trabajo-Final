//1. verificar conexion con html
console.log("hola soy ingreso");

// crearmi funcion
const IniciarSecion = async () => {

    //2. obtener los valores ingresados por el usuario
    const correo = document.getElementById("correo").value;
    const contrsena = document.getElementById("contrasena").value;

    console.log(correo, contrasena);

    try {

        //3. Realizar la petision GET a nuestra base de datos
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuarios = await respuesta.json();
        console.log(usuarios);

        //4. verificar si se encontro el usuario con correo y contraseña

        const esUsuarioRegistrado = usuaruios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);

        if(esUsuarioRegistrado){

            // verificamos si es admin
            const correoAdmin = "admin@gmail.com";

            if(esUsuarioRegistrado.correo == correoAdmin){
                alert("Bienvenido Administrador");
                window.location.href = "./admin.html";
            }else{
              alert("Ingreso exitoso");
                window.location.href = "./index.html"
            }




        }else{
          alert("correo o contraseña incorrectos. Usuario no encontrado! Vuelve a intentarlo o registrate"); 
        }



    } catch (err) {
        console.error("error al verificar inicio de sesion:", error);
    }




}