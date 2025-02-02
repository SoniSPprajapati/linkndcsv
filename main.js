import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

import { readCSV, writeCSV } from "./lib/io.js";

const leads = readCSV(argv.input);
console.log(leads.body);

writeCSV("test.csv", leads.body);
