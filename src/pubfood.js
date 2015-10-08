/**
 * pubfood
 * Copyright (c) 2015 Yieldbot, Inc. - All rights reserved.
 */

'use strict';

/*eslint no-unused-vars: 0*/

/**
 * Pubfood.
 *
 * A browser client header bidding JavaScript library.
 *
 * @module pubfood
 */
(function(global, undefined, ctor) {

  if (global) {
    module.exports = ctor(global, global.pfConfig || {});
  }

}(window || {}, undefined, function(global, config) {
  /**
   * @memberof module:pubfood
   * @private
   */
  var pubfood = function(config) {
    return new pubfood.library.init(config);
  };

  pubfood.library = pubfood.prototype = {
    version: '0.0.1',
    whoAmI: function() {
      console.log('instanceOf \'pubfood\' v' + this.version);
    },
    model: require('./model'),
    util: require('./util'),
    mediator: require('./mediator')
  };

  pubfood.log = function(msg) {
    console.log(msg);
  };

  var api = pubfood.library.init = function(config) {
    this.mediator = pubfood.
      library.
      mediator.
      auctionMediatorBuilder(config);
    return this;
  };

  api.prototype = {
    pubfood: pubfood.library,
    provider: require('./provider'),
    assembler: require('./assembler')

  };

  global.pubfood = pubfood;
  return pubfood;
}));

