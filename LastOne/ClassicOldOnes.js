//classic readable streams  node 0.4. 
//
//Classic readable streams are just event emitters that emit "data" events when they have data for their consumers and emit "end" events when they are done producing data for their consumers.
//
//.pipe() checks whether a classic stream is readable by checking the truthiness of stream.readable.
//
//Here is a super simple readable stream that prints A through J, inclusive:

var Stream = require('stream');
var stream = new Stream;
stream.readable = true;

var c = 64;
var iv = setInterval(function () {
    if (++c >= 75) {
        clearInterval(iv);
        stream.emit('end');
    }
    else stream.emit('data', String.fromCharCode(c));
}, 100);

stream.pipe(process.stdout);

//To read from a classic readable stream, you register "data" and "end" listeners. Here's an example reading from process.stdin using the old readable stream style:
//
process.stdin.on('data', function (buf) {
    console.log(buf);
});
process.stdin.on('end', function () {
    console.log('__END__');
});


//-----------------
//Note that whenever you register a "data" listener, you put the stream into compatability mode so you lose the benefits of the new streams2 api.
//
//You should pretty much never register "data" and "end" handlers yourself anymore. If you need to interact with legacy streams, use libraries that you can .pipe() to instead where possible.
//
//For example, you can use through to avoid setting up explicit "data" and "end" listeners:

var through = require('through');
process.stdin.pipe(through(write, end));

function write (buf) {
    console.log(buf);
}
function end () {
    console.log('__END__');
}

//or use concat-stream to buffer up an entire stream's contents:

var concat = require('concat-stream');
process.stdin.pipe(concat(function (body) {
    console.log(JSON.parse(body));
}));

//
//classic writable streams
//
//Classic writable streams are very simple. Just define .write(buf), .end(buf) and .destroy().
//
//.end(buf) may or may not get a buf, but node people will expect stream.end(buf) to mean stream.write(buf); stream.end() and you shouldn't violate their expectations.

//core stream documentation
//You can use the readable-stream module to make your streams2 code compliant with node 0.8 and below. Just require('readable-stream') instead of require('stream') after you npm install readable-stream.

// https://github.com/substack/stream-handbook

























