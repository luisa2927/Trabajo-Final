//1.importar las dependencias que vamos a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";
 import conexionMongo from "./src/config/baseDatos.js";


//2. CONFIGURAR NUESTRO SERVIDOR
const app = express();
const puerto = 9000

//2.1 CONFIGURAR LAS VARIABLE DE ENTORNOS
dotenv.config();
conexionMongo();


// ESTABLECER CONECCION CON NUESTRO INDEX HTML
const rutaPublica = path.join(process.cwd(), 
"public");
app.use(express.static(rutaPublica));

app.use(express.json());

//Especificamos que vamos a caceder a index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(rutaPublica,"index.html"));
});
//4. INICIALIZAR NUESTRO SERVIDOR


app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});
