const server = require('net').createServer()

let counter = 0
let sockets = {}

server.on('connection', socket => {

    socket.id = counter++
    sockets[socket.id] = socket

    //socket.setEncoding('utf8')

    console.log('Client connected');
    socket.write('Welcome new client!\n')

    socket.on('data', data => {
        Object.entries(sockets).forEach(el => {
            el[1].write(`${socket.id}: `)
            el[1].write(data)
        })
    })

    socket.on('end', () => {
        delete sockets[socket.id]
        console.log('Client Disconnected');
    })
})

server.listen(8888, () => {
    console.log('server listening on 8888');
})
