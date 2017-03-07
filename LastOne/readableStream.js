//readable streams
//
//Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling .pipe():
//
//readableStream.pipe(dst)

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('beep '); // events
rs.push('boop\n');
rs.push(null);

rs.pipe(process.stdout);
// rs.push(null) tells the consumer that rs is done outputting data.


// chunks on demand
var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
// Here we push the letters 'a' through 'z', inclusive, but only when the consumer is ready to read them.