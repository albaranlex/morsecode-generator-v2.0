const code = {
  1: ".____",
  2: "..___",
  3: "...__",
  4: "...._",
  5: ".....",
  6: "_....",
  7: "__...",
  8: "___..",
  9: "____.",
  0: "_____",
  a: "._",
  b: "_...",
  c: "_._.",
  d: "_..",
  e: ".",
  f: ".._.",
  g: "__.",
  h: "....",
  i: "..",
  j: ".___",
  k: "_._",
  l: "._..",
  m: "__",
  n: "_.",
  o: "___",
  p: ".__.",
  q: "__._",
  r: "._.",
  s: "...",
  t: "_",
  u: ".._",
  v: "..._",
  w: ".__",
  x: "_.._",
  y: "_.__",
  z: "__..",
  ".": "._._._",
  ",": "__..__",
  "?": "..__..",
  "'": ".____.",
  "/": "_.._.",
  "(": "_.__.",
  ")": "_.__._",
  "&": "._...",
  ":": "___...",
  ";": "_._._.",
  "=": "_..._",
  "+": "._._.",
  "-": "_...._",
  _: "..__._",
  '"': "._.._.",
  $: "..._.._",
  "!": "_._.__",
  "@": ".__._.",
};

const CodeGenerator = (props) => {
  let text = props.userInput.toLowerCase().split("");
  let result;
  if (!text.length == 0) {
    result = text.map((e) => code[e]);
  } else {
    result = "Your code will appear here";
  }
  return <span>{result}</span>;
};

export default CodeGenerator;
