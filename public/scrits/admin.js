//1. verificar coneccion con html
console.log("hola soy admin");


// Funccion para obtener los datos de mi base

const mostrarUsuarios = async () => {

    try {
        const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
        const usuariods = respuesta.json();
        console.log(Usuariosguardados);
    } catch (error) {

        console.error("Error al obtener los usuarios", error);

    }

}
function mostrarTablas(Usuarios){}
    const tabla = document.getElementById("miTabla");
    tabla.innerHTML = "";
    Usuarios.forEach(usuario => {
        // por cada usuario(forEach) usuario, me va a crear una fila en la tabla

        tabla.innerHTML += 
        
        `</tr>
    </thead>
    <tbody class="table.grupo-divisor" id="miTabla">
      <tr>
        <td>${usuario.nombtreCompleto}</td>
        <td>${usuario.correo}</td>
        <td>
            <button type="button" class="btn btn-danger"
           {usuario._id} "onclick=eliminarUsuario(event)">
            <i class="bi bi-trash"> </bi-trash></i>
            Eliminar
        </button>
      </tr> `

    });


mostrarUsuarios();


//funcion para eliminar usuarios por id
function eliminarUsuario(event){
    console.log("eliminar");

}