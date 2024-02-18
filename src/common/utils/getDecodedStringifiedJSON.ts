import { safeJSONParse } from ".";

export const getDecodedStringifiedJSON = (str: string) => {
  try {
    return safeJSONParse(decodeURIComponent(atob(str)));
  } catch {
    return undefined;
  }
};
