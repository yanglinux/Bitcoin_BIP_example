var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic("car boring library token tattoo rail example seven dress welcome later behave scale slab nation case cross grape caught couple history shell tooth produce", Mnemonic.Words.ENGLISH);
console.log(code.toString());
var xpriv = code.toHDPrivateKey();
console.log(xpriv.toString());
