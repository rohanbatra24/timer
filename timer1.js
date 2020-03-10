const args = process.argv.slice(2);

// console.log(args);

const argsNum = [];

for (let arg of args) {
  arg = Number(arg);
  if (arg !== NaN && arg > 0 && Number.isInteger(arg)) {
    argsNum.push(arg);
  }
}

// console.log(argsNum);

for (let i = 0; i < argsNum.length; i++) {
  setTimeout(() => {
    console.log(argsNum[i]);
  }, argsNum[i] * 1000);
}
