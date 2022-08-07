// Importando a função de transformação de dados da biblioteca csv-import-data
import { transformDataCsv } from "csv-import-data";

// Importando o módulo fs do node, para tratamentos com arquivos e diretivas similares
import fs from "fs";

// Fazendo a leitura e parseamento do arquivo data.csv que se encontra na raiz deste exemplo
const dataCsv = fs.readFileSync("data.csv", "utf-8");

// Chamando a função de transformação da biblioteca passando os dados parseados na linha anterior para a biblioteca realizar o devido tratamento
const data = transformDataCsv(dataCsv);

// Imprimindo no console o resultado da execução da biblioteca
console.log(data);

// Resultado de saída foi o abaixo
/*
[
  {
    name: 'teste 1',
    email: 'teste1@gmail.com',
    age: '22',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 2',
    email: 'teste2@gmail.com',
    age: '23',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 3',
    email: 'teste3@gmail.com',
    age: '24',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 4',
    email: 'teste4@gmail.com',
    age: '25',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 5',
    email: 'teste5@gmail.com',
    age: '26',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 6',
    email: 'teste6@gmail.com',
    age: '27',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 7',
    email: 'teste7@gmail.com',
    age: '28',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 8',
    email: 'teste8@gmail.com',
    age: '29',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 9',
    email: 'teste9@gmail.com',
    age: '30',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 10',
    email: 'teste10@gmail.com',
    age: '31',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 11',
    email: 'teste11@gmail.com',
    age: '32',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 12',
    email: 'teste12@gmail.com',
    age: '33',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 13',
    email: 'teste13@gmail.com',
    age: '34',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 14',
    email: 'teste14@gmail.com',
    age: '35',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 15',
    email: 'teste15@gmail.com',
    age: '36',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 16',
    email: 'teste16@gmail.com',
    age: '37',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 17',
    email: 'teste17@gmail.com',
    age: '38',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 18',
    email: 'teste18@gmail.com',
    age: '39',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 19',
    email: 'teste19@gmail.com',
    age: '40',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 20',
    email: 'teste20@gmail.com',
    age: '41',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 21',
    email: 'teste21@gmail.com',
    age: '42',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 22',
    email: 'teste22@gmail.com',
    age: '43',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 23',
    email: 'teste23@gmail.com',
    age: '44',
    phones: [ '5555955555555', '5555955555555' ]
  },
  {
    name: 'teste 24',
    email: 'teste24@gmail.com',
    age: '45',
    phones: [ '5555955555555', '5555955555555' ]
  }
]
*/
