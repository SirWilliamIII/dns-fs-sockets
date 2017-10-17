const fs = require("fs");
const path = require("path");

const dirname = path.join(__dirname, "logs");

const files = fs.readdirSync(dirname);

console.log(files)

files.forEach(file => {
    let filePath = path.join(dirname + file);

    console.log(filePath)
});
