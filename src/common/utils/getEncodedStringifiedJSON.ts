export const getEncodedStringifiedJSON = (json: any) =>
  btoa(encodeURIComponent(JSON.stringify(json)));
