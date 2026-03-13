console.log("Rishabh Bajpai the best programmer");

const fs = require("fs");
fs.writeFile("output.txt", "writing File", (err) => {
  if (err) console.log("error occured");
  else console.log("file written successfully");
});
