#!/usr/bin/env node
import { readCSV, writeCSV } from "./lib/io.js";
import core from "./lib/core.js";

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;

function main() {
  const csvData = readCSV(argv.input);

  const [clean, errors] = core(csvData.body);

  // Generate clean file
  writeCSV(argv.output, clean);
  // Generate errors file
  writeCSV(argv.errors, errors);
}

main();
