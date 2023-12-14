const fs = require('node:fs');
const pc = require('picocolors');

function readFile(route) {

  console.log(`${pc.blue("======= Lector de Archivos  ======== \n")}`);
  fs.readFile(route, 'utf-8', (error, Text) => {

    if (error) {
      return console.log(`${pc.red("No se pudo leer el archivo , Error :")} ` + `${error}`);
    }

    console.log("\n" + `${pc.green("Leyendo Archivo ........")}` + "\n" + "\n" + `${pc.bold(pc.blue(Text))}`);

  });
}

module.exports = {
  readFile
}
