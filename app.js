//1.importar las dependencias que vamos a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";



//2. CONFIGURAR NUESTRO SERVIDOR
const app = express();
const puerto = 9000

//2.1 CONFIGURAR LAS VARIABLE DE ENTORNOS
dotenv.config();



// ESTABLECER CONECCION CON NUESTRO INDEX HTML


//4. INICIALIZAR NUESTRO SERVIDOR


app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});