//transform
//
//Transform streams are a certain type of duplex stream (both readable and writable). The distinction is that in Transform streams, the output is in some way calculated from the input.
//
//You might also hear transform streams referred to as "through streams".
//
//Through streams are simple readable/writable filters that transform input and produce output

////

//duplex
//
//Duplex streams are readable/writable and both ends of the stream engage in a two-way interaction, sending back and forth messages like a telephone. An rpc exchange is a good example of a duplex stream. Any time you see something like:
//
//a.pipe(b).pipe(a)
//you're probably dealing with a duplex stream.

//classic streams
//
//Classic streams are the old interface that first appeared in node 0.4. You will probably encounter this style of stream for a long time so it's good to know how they work.
//
//Whenever a stream has a "data" listener registered, it switches into "classic" mode and behaves according to the old API.


// so streams are data storage and it can decode or into streams or emit events such an objects or bytes and then you
// can read them with .data event or pipe a readable stream with something that writes that into something
// or just use the duplex stream and read them... remember a | b | c . linux pipes