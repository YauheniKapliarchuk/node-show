import fs from 'fs';
import csvConverter from 'csvtojson';
import { pipeline } from 'stream';
const csvFilePath = 'src/module_1_fundamental/csv/Book.csv';
const txtFilePath = 'src/module_1_fundamental/csv/Book.txt';

// @ts-ignore
pipeline(
    fs.createReadStream(csvFilePath),
    csvConverter(),
    fs.createWriteStream(txtFilePath),
    (error: Error) => {
        if (error) {
            console.log(`Something went wrong. ERROR --- : ${  error}`);
        }
    }
);
