const fs = require('fs')
fs.writeFile('arquivo.txt','', function(){console.log('Executado com Sucesso!')})

fs.readFile("arquivo.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });