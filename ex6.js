fs = require("fs");

//VALOR A SER ADD
let value = 'rlx';

fs.appendFile("arquivo.txt", value, function (err) {
  if (err) return console.log(err);
  console.log("Adicionado com sucesso!");
});

fs.readFile("arquivo.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
