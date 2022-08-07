# csv-import-data

Está é uma biblioteca que foi proposta como solução a uma problemática encontrada, e a problemática é a seguinte: dada uma planilha de dados em formato .csv, desejasse extrair os dados da mesma em formato json ou melhor dizendo, em notações Javascript. Quando me deparei com esse problema tive que realizar muitas pesquisas para chegar a uma solução viável, assim decidi implementar esta biblioteca, com esse compilado de entendimentos e soluções encontradas por mim, para a mesma sirva para mais pessoas na comunidade que venha a passar por esse problema. A biblioteca pode ser acessada no npm procurando pelo nome da mesma ou [clicando aqui](https://www.npmjs.com/package/csv-import-data).

## Tecnologias utilizadas no projeto
* NodeJs
* Javascript
* FileReader

## Funcionalidades da biblioteca

* ```transformDataCsv```
    
    * Onde basicamente já sem fez a leitura prévia do arquivo .csv, e deseja transformar/converter/transferir e etc, os dados do .csv para notação em Javascript, ou melhor dizendo em JSON.

* ```importDataFromCsv```

    * Quando não foi feito nada com .csv, apenas a obtenção do mesmo, com essa função é possível realizar a leitura e parseamento do mesmo, para daí realizar a transformação dos dados contidos no mesmo, essa função faz uso do módulo FileReader para realizar a leitura e parseamento do arquivo .csv.

## Como utilizar a biblioteca

Primeiramente realizar a instalação da biblioteca em seu projeto, como segue abaixo algumas formas:

```bash
npm i csv-import-data              # Opção 01
npm install csv-import-data        # Opção 02
yarn add csv-import-data           # Opção 03
```

Após isso, a mesma já estará em seu projeto, para a utilizar é simples, como irei expor nos exemplos abaixo:

* Realizar a importação da biblioteca, de diferentes formas:

    ```js
    import {importDataFromCsv, transformDataCsv} from "csv-import-data";
    ```

    Essa importação é utilizando as versões mais recentes do Javascript e suas funcionalidades, onde realizar a importação utilizando a cláusula import e etc, e basicamente realizamos a importação e podemos desestruturar apenas umas ou as duas funções da biblioteca para as usar como melhor preferir. 

    ```js
    const csvimportdata = require("csv-import-data");
    ```

    Essa importação já é a mais antiga, mas também ainda funcional dentro do ecossistema que envolve o Javascript, onde basicamente realizamos a importação atravéz da cláusula require, e a atribuimos a uma variável dentro do escopo do código, e podemos utilizar os recursos da mesma em forma de objeto e método, como será exposto mais abaixo.

* Utilizar de a biblioteca:

    ### Função transformDataCsv:


    ```js
    import {transformDataCsv} from "csv-import-data";

    /*
     Aqui assumisse que foi feita a leitura do csv de alguma forma. E que o mesmo está atribuído a uma variável chamada data.
    */

    const result = transformDataCsv(data);

    console.log(result);
    ```
    Assumindo que o arquivo .csv tenha sido uma tabela como essa abaixo:

    | name  | age   |
    | ------- | -------- |
    | Sebartião   | 21    |
    | Irineu   | 33    |

    O retorno vindo da biblioteca e que será impresso no console do código de exemplo acima, será o seguinte:

    ```json
    [
        {
            name: "Sebartião", 
            age: 21
        },
        {
            name: "Irineu", 
            age: 33
        }
    ]
    ```
    Caso esteja usando a outra configuração de projeto, onde a chamada a biblioteca seja feita com o require:

    ```js
    const csvImportData = require("csv-import-data");

    /*
     Aqui assumisse que foi feita a leitura do csv de alguma forma. E que o mesmo está atribuído a uma variável chamada data.
    */

    const result = csvImportData.transformDataCsv(data);

    console.log(result);
    ```
    
    Assumindo que o arquivo .csv tenha sido uma tabela como essa abaixo:

    | animal  | brothers   |
    | ------- | -------- |
    | Patolino   | Goku,Freeza,Cell    |
    | Perna Longa   | Pikachu,Mew    |

    O retorno vindo da biblioteca e que será impresso no console do código de exemplo acima, será o seguinte:

    ```json
    [
        {
            animal: "Patolino", 
            brothers: ["Goku", "Freeza", "Cell"]
        },
        {
            animal: "Perna Longa", 
            brothers: ["Pikachu", "Mew"]
        }
    ]
    ```
    Onde pode-se observar que a biblioteca realizar o tratamento de valores dispostos em formato de array também. Desde de que estejam seguindo os princípios de valores em lista em .csv, que é dentro de aspas duplas separados por vírgula, onde a tabela acima estruturalmente estaria assim:

    ```csv
    animal,brothers
    Patolino,"Goku,Freeza,Cell"
    Perna Longa,"Pikachu,Mew"
    ```

    ### Função importDataFromCsv:


    ```js
    import {importDataFromCsv} from "csv-import-data";

    /*
     Aqui assumisse que foi feito o pré-carregamento do arquivo .csv. E que o mesmo está atribuído a uma variável chamada data.
    */

    const result = importDataFromCsv(data);

    console.log(result);
    ```
    Assumindo que o arquivo .csv tenha sido uma tabela como essa abaixo:

    | name  | age   |
    | ------- | -------- |
    | Sebartião   | 21    |
    | Irineu   | 33    |

    O retorno vindo da biblioteca e que será impresso no console do código de exemplo acima, será o seguinte:

    ```json
    [
        {
            name: "Sebartião", 
            age: 21
        },
        {
            name: "Irineu", 
            age: 33
        }
    ]
    ```
    Caso esteja usando a outra configuração de projeto, onde a chamada a biblioteca seja feita com o require:

    ```js
    const csvImportData = require("csv-import-data");

    /*
     Aqui assumisse que foi feito o pré-carregamento do arquivo .csv. E que o mesmo está atribuído a uma variável chamada data.
    */

    const result = csvImportData.importDataFromCsv(data);

    console.log(result);
    ```
    
    Assumindo que o arquivo .csv tenha sido uma tabela como essa abaixo:

    | animal  | brothers   |
    | ------- | -------- |
    | Patolino   | Goku,Freeza,Cell    |
    | Perna Longa   | Pikachu,Mew    |

    O retorno vindo da biblioteca e que será impresso no console do código de exemplo acima, será o seguinte:

    ```json
    [
        {
            animal: "Patolino", 
            brothers: ["Goku", "Freeza", "Cell"]
        },
        {
            animal: "Perna Longa", 
            brothers: ["Pikachu", "Mew"]
        }
    ]
    ```
## Observações

* A biblioteca ainda está em desenvolvimento e evolução, assim podem ser encontrados bugs em seu uso, caso encontre algum, sinta-se a vontade de reportar o mesmo comigo, seja enviando um e-mail para o e-mail presente na última seção deste readme, ou mesmo abrindo uma issue aqui no GitHub mesmo em [criar issue](https://github.com/ericrodriguesfer/csv-import-data/issues).

* A função ```transformDataCsv```, já está bem madura e testada, o que não ocorre com a ```importDataFromCsv```, pois necessita-se de mais alguns testes com a mesma.

* Caso queira contribuir com o projeto, sinta-se a vontade, abrindo issues, pull request, sugerindo melhorias e etc.

## CASO QUEIRA SABER MAIS SOBRE O PROJETO

Pode entrar em contato comigo pelo seguinte email: ericdesenvolvedor7@gmail.com.