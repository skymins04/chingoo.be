export const copyText = (text: string) => {
  const ele = document.createElement("textarea");
  ele.value = text;
  document.body.appendChild(ele);

  ele.select();
  document.execCommand("copy");
  document.body.removeChild(ele);
};
