import replaceByIndex from "../utils/replaceByIndex.js";

function transformDataCsv(data) {
  const csvHeader = data.slice(0, data.indexOf("\n")).split(",");
  const csvRows = data.slice(data.indexOf("\n") + 1).split("\n");

  const csvRowsFormated = csvRows.map((row) => {
    let newRow = row;

    for (let i = 0; i < row.length; i++) {
      if (row[i] === '"') {
        for (let j = i + 1; j < row.length; j++) {
          if (row[j] === '"') {
            i = j;
            break;
          }

          if (row[j] === ",") {
            newRow = replaceByIndex(newRow, j, ";");
          }
        }
      }
    }

    return newRow.replace(/"/g, "");
  });

  const array = csvRowsFormated.map((row) => {
    const values = row.split(",");

    const formtedValue = csvHeader.reduce((object, header, index) => {
      if (String(values[index]).match(/;/)) {
        object[header] = String(values[index]).split(";");
      } else {
        object[header] = values[index];
      }

      return object;
    }, {});

    return formtedValue;
  });

  array.splice(array.length - 1, 1);

  return array;
}

export default transformDataCsv;
