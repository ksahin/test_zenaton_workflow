"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("RankTrackerWorkflow", function*() {
  yield this.run.task("TaskA");
  yield this.run.task("TaskB");
});