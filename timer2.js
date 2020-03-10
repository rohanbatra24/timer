const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  setTimeout(() => {
    // if (key === 'b') {
    //   console.log('now');
    // }
    console.log(Number(key));
  }, key * 1000);
});
