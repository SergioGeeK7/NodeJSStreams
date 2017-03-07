//Buffers in Node are a higher-performance alternative to strings. Since Buffers represent raw C memory allocation, they are more appropriate for dealing with binary data than strings. There are two reasons why buffers are useful:
//They are allocated outside of V8, meaning that they are not managed by V8. While V8 is generally high performance, sometimes it will move data unnecessarily. Using a Buffer allows you to work around this and work with the memory more directly for higher performance.
//They do not have an encoding, meaning that their length is fixed and accurate. Strings support encodings such as UTF-8, which internally stores many foreign characters as a sequence of bytes. Manipulating strings will always take into account the encoding, and will transparently treat sequences of bytes as single characters. This causes problems for binary data, since binary data (like image files) are not encoded as characters but rather as bytes - but may coincidentally contain byte sequences which would be interpreted as single UTF-8 characters.
//Working with buffers is a bit more complicated than working with strings, since they do not support many of the functions that strings do (e.g. indexOf). Instead, buffers act like fixed-size arrays of integers. The Buffer object is global (you don’t have to use require() to access it). You can create a new Buffer and work with it like an array of integers:

// Create a Buffer of 10 bytes
var buffer = new Buffer(10);
// Modify a value
buffer[0] = 255;
// Log the buffer
console.log(buffer);
// outputs: <Buffer ff 00 00 00 00 00 4a 7b 08 3f>

//Note how the buffer has it’s own representation, in which each byte is shown a hexadecimal number. For example, ff in hex equals 255, the value we just wrote in index 0. Since Buffers are raw allocations of memory, their content is whatever happened to be in memory; this is why there are a number of different values in the newly created buffer in the example.
//
//Buffers do not have many predefined functions and certainly lack many of the features of strings. For example, strings are not fixed size, and have convenient functions such as String.replace(). Buffers are fixed size, and only offer the very basics:


// buffer === memory .... is data
// Stream === flow canal of data

//However, if you need to use the string functions on buffers, you can convert them to strings using buffer.toString() and you can also convert strings to buffers using new Buffer(str). Note that Buffers offer access to the raw bytes in a string, while Strings allow you to operate on charaters (which may consist of one or more bytes). For example:

var buffer = new Buffer('Hyvää päivää!'); // create a buffer containing “Good day!” in Finnish
var str = 'Hyvää päivää!'; // create a string containing “Good day!” in Finnish
// log the contents and lengths to console
console.log(buffer);
console.log('Buffer length:', buffer.length);
console.log(str);
console.log('String length:', str.length);

//Note how buffer.length is 18, while string.length is 13 for the same content. This is because in the default UTF-8 encoding, the “a with dots” character is represented internally by two characters (“c3 a4” in hexadecimal). The Buffer allows us to access the data in it’s internal representation and returns the actual number of bytes used, while String takes into account the encoding and returns the number of characters used. When working with binary data, we frequently need to access data that has no encoding - and using Strings we could not get the correct length in bytes. More realistic examples could be, for example, reading an image file from a TCP stream, or reading a compressed file, or some other case where binary data will be accessed.
















