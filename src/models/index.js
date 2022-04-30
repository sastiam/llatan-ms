const fs = require("fs");
const path = require("path");
const {conn} = require('../boot/db');

const basename = path.basename(__filename);

const modelDefiners = [];

let models = {}

fs.readdirSync(path.join(__dirname))
  .filter(
    (file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, file)));
  });


modelDefiners.forEach((model) => model(conn));


let entries = Object.entries(conn.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

models = Object.fromEntries(capsEntries);

module.exports = models;