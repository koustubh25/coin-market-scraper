/**
 * Created by koustubhgaikwad on 7/17/17.
 */
var BTCChinaTrade = require('./BTCChinaTrade');

class BTCChinaTradeFactory{

    static getInstance() {
      return (new BTCChinaTrade());
    }
}

module.exports = BTCChinaTradeFactory;
