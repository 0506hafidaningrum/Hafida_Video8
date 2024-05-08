const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('ningrumhafida31@gmail.com'));
// console.log(validator.isMobilePhone('089646912050', 'id-ID'));
// console.log(validator.isNumeric('089646912050'));

//console.log(chalk.blue('Hello World!'));
const nama = 'Sandhika';
const pesan = chalk`Lorem, ipsum dolar {bgRed sit amet} consectetur {bgGreen.italic adipisicing} elit. Nama saya : ${nama}`;
console.log(pesan);