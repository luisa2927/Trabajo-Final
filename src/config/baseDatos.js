// importamos las dependencias que necesitamos
import mongoose from "mongoose";
const conexionMongo = async () => 
    await mongoose.connect(BD_URL,{})
    inport conexionMongo from"./src/config/"
    //control de errores
    try{
        console.log("conexion exitosa");
        caches("console.error"),
        console.log("error de conexion:",console.error.mensaje);
console.log("conexion exitosa");
catch(error){
    console.log("Error de conexion")
}
  }
  