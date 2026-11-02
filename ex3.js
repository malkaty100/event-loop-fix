// ex3.js
// function help(i){
// console.log(i);

// }
function run() {
  for (var i = 0; i < 3; i++) {
setTimeout(((num) => () => console.log(num))(i), 0);    // help(i)
  }
}

if (typeof module !== "undefined") module.exports = { run };
