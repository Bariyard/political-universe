const replace = require("replace-in-file");

const basePath = "/political-universe";

const options = {
  //you may need to modify the file address to suite your project
  files: "./out/**",
  from: [/\/design_assets/g, /\\\/political-universe\/design_assets/g],
  to: [`${basePath}/design_assets`, `\\\/political-universe\\\/design_assets`]
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
