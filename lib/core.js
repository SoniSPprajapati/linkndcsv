import * as v from "./validate.js";

export default function (records) {
  const clean = [];
  const errors = [];

  for (let row of records) {
    const rowError = [];

    if (!v.isCompanyName(row["Company Name"])) {
      rowError.push("Company name invalid");
    }

    if (!v.isLinkedInURL(row["LinkedIn Profile URL"])) {
      rowError.push("LinkedIn Profile invalid");
    }

    if (!v.isEmployeeSize(row["Employee Size"])) {
      rowError.push("Employee Size invalid");
    }

    if (!v.isURL(row["Website URL"])) {
      rowError.push("Website URL invalid");
    }

    if (rowError.length) {
      errors.push({ ...row, errors: rowError.join(" / ") });
    } else {
      clean.push(row);
    }
  }

  return [clean, errors];
}
