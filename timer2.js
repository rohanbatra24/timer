const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
console.log('Menu:\nPress 0 - 9 to set a timer\nb to beep now\nctrl + c to quit');
stdin.on('data', (key) => {
  if (key === 'b') {
    console.log('Beep!');
  } else if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else {
    console.log(`Setting timer for ${key} seconds`);
    setTimeout(() => {
      console.log(`Beep! (${Number(key)} seconds elapsed)`);
    }, Number(key) * 1000);
  }
});
