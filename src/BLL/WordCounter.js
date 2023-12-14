// === call backs =====
// Manejo de Archivos:
// Crea un script que lea un archivo de texto y cuente el número de palabras en él. Utiliza callbacks para manejar la asincronía de la lectura del archivo.
const { Console } = require('node:console');
const fs = require('node:fs');
const pc = require('picocolors');


function wordCounter(route) {

  console.log(`${pc.blue("======= Contador de Palabras  ======== \n")}`);
  fs.readFile(route, 'utf-8', (error, Text) => {

    if (error) {
      return console.log(`${pc.red("No se pudo leer el archivo , Error :")} ` + `${error}`);
    }

    //console.log( "\n"+ `${pc.blue("Leyendo Archivo ........")}` + "\n"+"\n"+  `${pc.magenta(Text)}`);

    let palabras = [];
    palabras = wordArray(Text);
    console.log('\n');
    console.log(`${pc.magenta("Numero de palabras es : ")}${pc.blue(palabras.length)} `);
  });
}

function wordArray(word) {
  let palabras = [];
  palabras = word.split(/\s+/).filter((item) => item.length > 0);

  return palabras;
}
module.exports = {
  wordArray, wordCounter
}
