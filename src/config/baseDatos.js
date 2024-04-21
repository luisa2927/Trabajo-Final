// importamos las dependencias que necesitamos
import mongoose from "mongoose";

// crear una conexion que nos conecta con la base de datos
const conexionMongo = async () => {

    await mongoose.connect(process.env.BD_URL,{})

    //control de errores con try - catch
    try{
        console.log("conexion exitosa");
    }catch(error){
        console.log("error de conexion",error.message);
    }
}


// tenemos que exportar nuestra funcion para llamarla desde nuestro servidor

export default conexionMongo;
