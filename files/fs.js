const fs = require('fs')

const file = fs.readFile(__dirname+ '/stuff.txt', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data.toString())
})
