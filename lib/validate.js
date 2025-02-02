import validator from "validator";

export function isEmail(text) {
  return validator.isEmail(text);
}

export function isURL(text) {
  return validator.isURL(text);
}

export function isLinkedInURL(text) {
  return validator.isURL(text) && text.includes("linkedin");
}

export function isEmployeeSize(text) {
  const employeeSizeRegEx = /^(?:\d+-\d+|\d+k\+|\d+k|\d+\+|\d+)$/;
  return employeeSizeRegEx.test(text);
}

export function isCompanyName(text) {
  return (
    !validator.isNumeric(text) &&
    !validator.isURL(text) &&
    !isEmployeeSize(text)
  );
}
