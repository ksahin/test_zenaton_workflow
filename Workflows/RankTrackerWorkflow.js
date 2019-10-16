"use strict";
const { workflow } = require("zenaton");

module.exports = workflow("RankTrackerWorkflow", function*() {


const scrapingninja = this.connector("scrapingninja", "CONNECTOR_ID");

yield scrapingninja.get("/v1/store/google", { query: { search: "ma_query", country_code: "fr"} });
yield this.run.task("TaskB");
});