import fs from "fs"


fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  console.log("lets see which one run fast");