const fs = require('node:fs');
const pc = require('picocolors');
const { wordArray } = require('../BLL/WordCounter');

let formatNext = {
  wordP: "",
  oration: " ",
  numberLine: 0,
  nameFile: ""
}
function searchWord(route, word) {
  fs.readFile(route, "utf-8", (error, text) => {
    if (error) {

      return console.log(`${pc.red("No se pudo leer el archivo , Error :")} ` + `${error}`);
    }

    console.log("\n" + `${pc.blue("Leyendo Archivo ........")}` + "\n");
    let search = new RegExp(word);
    if (search.test(text)) {

      let arrayW = wordArray(text);
      let index = arrayW.indexOf(word);
      let line = text.split("\n").length;
      line = line - 1;
      formatNext = {
        wordP: word,
        oration: `${arrayW[index - 1]} ${arrayW[index]}  ${arrayW[index + 1]}`,
        numberLine: line,
        nameFile: route

      }
      console.log(`
    ${pc.blue(" Se encontro la palabra :")}
    ${pc.green(formatNext.wordP)}
    ${pc.blue(" En la siguiente oracion  :")}
    ${pc.magenta(formatNext.oration)}
    ${pc.blue("Numero de lineas del texto : " + formatNext.numberLine)}
    ${pc.blue("Nombre del archivo : " + formatNext.nameFile)}
`);
    }
  });
}

module.exports = {
  searchWord
}
