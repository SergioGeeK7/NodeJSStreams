// In other words, Streams use events to deal with data as it happens, rather than only with a callback at the end

//Readable streams emit the event data for each chunk of data that comes in, and an end event, which is emitted when there is no more data. req.on.'data

//Writeable streams can be written to with the write() function, and closed with the end() function. All types of streams emit error events when errors arise.

