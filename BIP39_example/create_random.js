var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(256, Mnemonic.Words.ENGLISH);
console.log(code.toString());
var xpriv = code.toHDPrivateKey();
console.log(xpriv.toString());
