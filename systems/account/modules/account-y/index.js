const x = require("account-x");
const sharedPkgB = require("shared-pkg-b");
x.hello();
console.log("nameB", sharedPkgB.NAME);
console.log("nameB lodash", sharedPkgB.lodashVersioon);
