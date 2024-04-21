// importamos las dependencias que necesitamos
import mongoose from "mongoose";
const conexionMongo = async () => {
    await mongoose.connect(BD_URL,{})
    //control de errores
    try{
        console.log("conexion exitosa");
    }catch(error){
        console.log("error de conexion",error.message);
    }
}

export default conexionMongo;