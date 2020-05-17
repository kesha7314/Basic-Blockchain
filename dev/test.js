const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(73, 'kesha', 'shah');

bitcoin.createNewTransaction(100, 'shah', 'jainish');

bitcoin.createNewBlock(10555, 'kesha', 'shah');

bitcoin.createNewTransaction(1560, 'shah', 'jainish');

console.log(bitcoin);









