const sharedPkgA = require("shared-pkg-a");
module.exports.hello = () => {
    console.log("nameA", sharedPkgA.NAME);
    console.log("nameA lodash", sharedPkgA.lodashVersioon);
};
