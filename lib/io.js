import { readFileSync, writeFileSync } from "fs";
import Papa from "papaparse";

export function readCSV(file) {
  const fileData = readFileSync(file, "utf-8");
  const csvData = Papa.parse(fileData, {
    header: true,
  });

  return { header: csvData.meta.fields, body: csvData.data };
}

export function writeCSV(file, data) {
  const stringify = Papa.unparse(data);
  writeFileSync(file, stringify);
}
