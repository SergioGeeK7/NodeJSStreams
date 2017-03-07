// Lets read from stdin and write to a file:

var fs = require('fs');

var file = fs.createWriteStream('./out.txt');

process.stdin.on('data', function(data) {
  file.write(data);
});
process.stdin.on('end', function() {
  file.end();
});

//process.stdin.resume(); // stdin in paused by default
//Running the code above will write everything you type in from stdin to the file out.txt, until you hit Ctrl+d (e.g. the end of file indicator in Linux).

//You can also pipe readable and writable streams using readableStream.pipe(destination, [options]). This causes the content from the read stream to be sent to the write stream, so the program above could have been written as:

var fs = require('fs');
// read -> write
process.stdin.pipe(fs.createWriteStream('./out.txt'));
process.stdin.resume();