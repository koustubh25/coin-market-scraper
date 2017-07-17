/**
 * Created by koustubhgaikwad on 7/16/17.
 */
class TradeData{
  constructor(url){
    this.endPointUrl = url;
  }

  getTradeData(start_timestamp, end_timestamp, json_web_token, results_in_single_page, page_no){};

}
module.exports = TradeData;
