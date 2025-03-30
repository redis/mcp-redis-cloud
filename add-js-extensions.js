import fs from "fs";
import path from "path";

const directories = [
  "src/clients/generated/core",
  "src/clients/generated/models",
  "src/clients/generated/services",
  "src/clients/generated",
];

directories.forEach((directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.readdir(directory, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.lstatSync(filePath).isFile() && filePath.endsWith(".ts")) {
        fs.readFile(filePath, "utf8", (err, data) => {
          if (err) {
            return console.log("Unable to read file: " + err);
          }

          const result = data.replace(
            /(import .* from '.*)(?<!\.js)';/g,
            "$1.js';",
          );

          fs.writeFile(filePath, result, "utf8", (err) => {
            if (err) return console.log("Unable to write file: " + err);
          });
        });
      }
    });
  });
});

// Explicitly process the generated/index.ts file
const indexPath = "src/clients/generated/index.ts";
if (fs.existsSync(indexPath)) {
  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      return console.log("Unable to read file: " + err);
    }

    const result = data.replace(/(import .* from '.*)(?<!\.js)';/g, "$1.js';");

    fs.writeFile(indexPath, result, "utf8", (err) => {
      if (err) return console.log("Unable to write file: " + err);
    });
  });
}
