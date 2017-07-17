/**
 * Created by koustubhgaikwad on 7/17/17.
 */
let abstractTradeFactory = require('../services/trading/AbstractTradeFactory');
var fs = require('fs');

let btcChinaTrade = abstractTradeFactory.getInstance("BTCChina");

var config = JSON.parse(fs.readFileSync('../config.json', 'utf8')).offline;

var result = btcChinaTrade.getTradeData(config.start_timestamp, config.end_timestamp, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmJ0Y2MuY29tIiwiYXVkIjoiODkyNTk2IiwiZXhwIjoxNTAwMjc1NjE4LCJpYXQiOjE1MDAyNTM5MjksIm90cCI6ZmFsc2UsInJlbSI6ZmFsc2UsImFwaSI6ImFjY291bnQifQ.bGPyrKt9Ktd-lKrAyikmAij7hzBbNO7Tj988TiG80Qg',config.results_in_single_page,config.page_no);
result.then((data) => {

  console.log(data);
}).catch((err) => {
  console.log(err);
});



