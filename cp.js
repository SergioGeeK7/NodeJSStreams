var fs = require('fs');
console.log(process.argv[2], '->', process.argv[3]);

var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);


readStream.on("data",function (chunk){
    writeStream.write(chunk);
});

readStream.on("end",function (err){
   if(err) 
       return console.log(err);
    console.log("Lectura Finalizada");
    writeStream.end(); // close the writeable stream to finalize the writing
});

//Some basic error handling
readStream.on('error', function (err) {
  console.log("ERROR", err);
});

writeStream.on('error', function (err) {
  console.log("ERROR", err);
});
//readStream.pipe(writeStream);
// however, to show how streams work, we have done things the long way.

// req.pipe(write) //on.data -> stream.pipe(destination, [options]) ,init,end
-->// res.pipe(read)  //.write
// read.pipe(res)  //on.data


/*Connects this read stream to destination WriteStream. Incoming data on this stream gets written to destination. The destination and source streams are kept in sync by pausing and resuming as necessary.

Emulating the Unix cat command:

process.stdin.resume();
process.stdin.pipe(process.stdout);

YOTENGODATOS.pipe(destino)

https://nodejs.org/docs/v0.4.10/api/streams.html#streams
https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-stream-pipe
*/
