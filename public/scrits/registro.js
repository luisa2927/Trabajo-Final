1. // verificar coneccion con html
console.log("hola soy registro");

2. // crear mi funcion para registro

const registrarUsuario = async () => { }

// obtener los datos de mi formulario
const nombreCompleto = document.getElementById
    ("nonbreCompleto").value;
const correo = document.getElementById("correo").
    value;
const contrasena = document.getElementById("contrasena").value;

console.log(nombreCompleto, correo, contrasena);

//2.2crear un objeto con los datos del usuario
const datosUsuario = {
    nombreCompleto,
    correo,
    contrasena
}

console.log(datosUsuario);

//2.3 Hacer la peticion POST para crear usuario en nuestra base de datos
async function crearUsuario(){
    try {

        const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
            {
                method: "POST",
                headers: { "contemt-Type": "application/json"},
                body: JSON.stringify(datosUsuario)
            }
        );
        const nuevoUsuario = await respuesta.json();
        console.log("Usuario creado exitosamente", nuevoUsuario);
        //condicional para redireccionar a ingreso.html
        if(nuevoUsuario){
            alert("Registro exitoso");
            window,location.href = "./_ingreso.html"
        }else{
            alert("Ups! error de registro, intentalo nuevamente");
        }
              
    
    } catch (error) {
        console.error("Error al registrar usuario"), error
    
    
    
    }
}
