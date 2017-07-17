/**
 * Created by koustubhgaikwad on 7/17/17.
 */
var BTCChinaTradeFactory = require('./BTCChinaTradeFactory');

class AbstractTradeFactory{

  static getInstance(exchange_name){
    switch(exchange_name){
      case "BTCChina":
      {
        return BTCChinaTradeFactory.getInstance();
      }

      default: return BTCChinaTradeFactory.getInstance();
    }
  }

}

module.exports = AbstractTradeFactory;
