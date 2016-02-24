// Writing to Buffers

var buffer1 = new Buffer(8);
var buffer2 = new Buffer([ 8, 6, 7, 5, 3, 0, 9]);
//This initializes the buffer to the contents of this array. Keep in mind that the contents of the array are integers representing bytes.
var buffer3 = new Buffer("I'm a string!", "utf-8")
var buffer_ = new Buffer(16);
var w = buffer_.write("Hello", "utf-8") // output 5 ... we had just write 5 bytes into this buf
buffer_.write(" world!", 5, "utf-8")
console.log(buffer_);
console.log("H".charCodeAt());
console.log("e".charCodeAt());

//buffer.write(" world!", 5, "utf-8")
//7
//When buffer.write has 3 arguments, the second argument indicates an offset, or the index of the buffer to start writing at.


//Reading from Buffers


//Probably the most common way to read buffers is to use the toString method, since many buffers contain text:

// >buffer.toString('utf-8')
//'Hello world!\u0000�k\t'

//Again, the first argument is the encoding. In this case, it can be seen that not the entire buffer was used! Luckily, because we know how many bytes we've written to the buffer, we can simply add more arguments to "stringify" the slice that's actually interesting:

// >buffer.toString("utf-8", 0, 12)
//'Hello world!'

buffer_[12] = buffer_[11];
//33
buffer_[13] = "1".charCodeAt();
//49
buffer_[14] = buffer_[13];
//49
buffer_[15] = 33
//33
var srt = buffer_.toString("utf-8");
console.log(srt);

// test
var snowman = "☃";
//snowman.length
//1
//> Buffer.byteLength(snowman)
//3

//------------------
var bufferrrr = new Buffer(500)
bufferrrr.write("wwwwww");
console.log(bufferrrr.length);
//> buffer.write(snowman)
//3
//> buffer.length
//16

//------------------
//> var frosty = new Buffer(24)
//> var snowman = new Buffer("☃", "utf-8")
//> frosty.write("Happy birthday! ", "utf-8")
//16
//> snowman.copy(frosty, 16)
//3
//> frosty.toString("utf-8", 0, 19)
//'Happy birthday! ☃'
//
//
//----------
//
//> var puddle = frosty.slice(16, 19)/// puddle se llevo el pedazo de memoria 
//> puddle.toString()
//'☃'
//> puddle.write("___") // escribo en el pedazo de memoria
//3
//> frosty.toString("utf-8", 0, 19) // ahora muestra completo
//'Happy birthday! ___'

