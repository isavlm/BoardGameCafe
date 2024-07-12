// convert-csv-to-json.js

const csvFilePath =
  "//data_files/Boardgames for Play - Sheet1.csv"; // Replace with your CSV file path
const fs = require("fs");
const csvtojson = require("csvtojson");

csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        // Save JSON data to a file
        fs.writeFileSync("games.json", JSON.stringify(jsonObj, null, 2));
        console.log("Conversion completed: games.json file created.");
})
    .catch((err) => console.error("Error converting CSV to JSON:", err));
