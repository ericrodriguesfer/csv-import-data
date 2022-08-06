import FileReader from "filereader";

import transformDataCsv from "./transformDataCsv.js";

const fileReader = new FileReader();

function importDataFromCsv(csv) {
  let data = undefined;

  if (csv) {
    fileReader.onload = function (event) {
      const text = event.target.result;
      data = transformDataCsv(text);
    };

    fileReader.readAsText(csv);
  }

  return data;
}

export default importDataFromCsv;
