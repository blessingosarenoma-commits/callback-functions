console.log("goodmorning!");
function greetuser() {
  console.log("greetuser");
}
function runmyfunction(greetuserCallback) {
  console.log("i want to runmyfunction");
  console.log("notify the user");
  greetuserCallback();
}
runmyfunction(greetuser);
