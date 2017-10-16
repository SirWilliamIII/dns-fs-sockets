const server = require('net').createServer()

server.on('connection', socket => {
    console.log('Client connected');
    socket.write('Welcome new client!\n')


    socket.on('data', data => {
        console.log('data is: ', data);
        socket.write('data is: ')
        socket.write(data)
    })

    socket.setEncoding('utf8')
})

server.listen(4000, () => {
    console.log('server listening on 8000');
})
