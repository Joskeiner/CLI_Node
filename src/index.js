const rl = require('node:readline/promises');
const { logoPresent } = require('./logo/logo');
const pc = require('picocolors');
const { wordCounter } = require('./BLL/WordCounter');
const { readFile } = require('./BLL/ReadFile.js');
const { searchWord } = require('./BLL/searchWord');

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout

})


async function main() {
  logoPresent();
  const answerString = await readLine.question(` ${pc.blue("Que accion desea realizar ?? 🤔")}
${pc.yellow(" 1) Contar las palabras de un archivo 📚 ")}
${pc.yellow(" 2) Mostrar el contenido de un archivo 📖  ")}
${pc.yellow(" 3) Buscar palabra en un archivo 🔎 ")}` + '\n');

  const number = parseInt(answerString);
  //    console.log(typeof(number));
  routers(number);



}
main();



async function routers(router) {

  if (router != undefined) {
    if (router == 1) {

      let nameRouter = await readLine.question(`${pc.blue("Porfavor  Ingrese la ruta del archivo ")}\n`);
      wordCounter(nameRouter.trim());

      let main = await readLine.question(`${pc.blue("Si desea volver al menu principal  escriba :")}${pc.green(" Y")}\n${pc.blue("si desea salir :")} ${pc.red("X")} \n`);

      BackMenu(main);

    } else if (router == 2) {

      let nameRouter = await readLine.question(`${pc.blue("Porfavor  Ingrese la ruta del archivo ")}\n`);
      readFile(nameRouter.trim());

      let main = await readLine.question(`${pc.blue("Si desea volver al menu principal  escriba :")}${pc.green(" Y")}\n${pc.blue("si desea salir :")} ${pc.red("X")} \n`);

      BackMenu(main);
    }
    else if (router == 3) {
      let nameRouter = await readLine.question(`${pc.blue("Porfavor Ingrese la ruta del archivo")}\n`);
      let word = await readLine.question(`${pc.blue("Ingrese la palabra a Buscar")}\n`);
      searchWord(nameRouter, word);
    }
    else {
      console.log(`${pc.red("ERROR ALERT!!!! ")} ${router}`)

    }
  }
}

function BackMenu(action) {
  if (action == "Y" || action == "y") {
    main();
  }
  else if (action == "X" || action == "x") {
    readLine.close();
  }
}


