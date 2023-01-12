const fs = require("fs");
const path = require("path");

const pasta = "teste3";
const arquivo = "test.txt";

fs.mkdir(path.join(__dirname, pasta), {}, (error) => {
  if (error) {
    return console.log("Erro mkdir: " + error);
  }

  console.log("Pasta criada com sucesso");

  fs.writeFile(
    path.join(__dirname, pasta, arquivo),
    "conteudo do arquivo",
    (error) => {
      if (error) {
        return console.log("Erro writeFile: ", error);
      }

      console.log("Arquivo criado com sucesso.");

      fs.appendFile(path.join(__dirname, pasta, arquivo), "!", (error) => {
        if (error) {
          return console.log("Erro appendFile: ", error);
        }

        console.log("Anexo inserido com sucesso");
      });
    }
  );
});

fs.readFile(path.join(__dirname, pasta, arquivo), "utf-8", (error, data) => {
  if (error) {
    return console.log("error", data);
  }

  return console.log("leitura realizada com sucesso");
});
