const buildSpinner = function(character, delay) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay);

  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay + 800);
};

// group 1
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// group 2
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// group 3
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// group 4
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

buildSpinner('|', 100);
buildSpinner('/', 300);
buildSpinner('-', 500);
buildSpinner('\\', 700);

