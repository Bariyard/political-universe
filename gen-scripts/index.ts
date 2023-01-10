// console.log('yes');
import * as d3 from "d3";
import * as fs from "fs";
console.log("yes");

function TOTAL_FILTER_EVENT() {
  let data2 = fs.readFileSync(
    "./analysed/[TOTAL-FILTER-EVENT]count.csv",
    "utf-8"
  );

  let data = d3.csvParse(data2, d3.autoType);

  fs.writeFileSync(
    "../public/data/[TOTAL-FILTER-EVENT]count.json",
    JSON.stringify(data)
  );
  // let total_filter_event_csv = fs.readFileSync(
  //   "./analysed/[TOTAL-FILTER-EVENT]count.csv",
  //   "utf-8"
  // );

  // var data = d3.csvParse(total_filter_event_csv, d3.autoType);
  console.log(data);
}

function SAMPLE_FILTER_EVENT() {
  let data2 = fs.readFileSync(
    "./analysed/[CATEGORIES-FILTER]ตำรวจ & ทหาร.csv",
    "utf-8"
  );

  let data = d3.csvParse(data2, d3.autoType);

  fs.writeFileSync(
    "../public/data/[CATEGORIES-FILTER]ตำรวจ & ทหาร.json",
    JSON.stringify(data)
  );
  // let total_filter_event_csv = fs.readFileSync(
  //   "./analysed/[TOTAL-FILTER-EVENT]count.csv",
  //   "utf-8"
  // );

  // var data = d3.csvParse(total_filter_event_csv, d3.autoType);
  console.log(data);
}

// TOTAL_FILTER_EVENT();
SAMPLE_FILTER_EVENT();
