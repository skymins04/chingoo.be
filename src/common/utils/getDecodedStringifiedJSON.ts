import { safeJSONParse } from ".";

export const getDecodedStringifiedJSON = (json: any) =>
  safeJSONParse(decodeURIComponent(atob(json)));
