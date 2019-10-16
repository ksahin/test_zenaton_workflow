const { task } = require("zenaton");

module.exports = task("TaskB", async function() {
  console.log("Task B starts");

  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  console.log("Task B ends");
  return 0;
});
