const { task } = require("zenaton");

module.exports = task("TaskA", async function() {
  console.log("Task A starts");

  // connector code here?
  
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  console.log("Task A ends");
  return "You are rank 1";
});
