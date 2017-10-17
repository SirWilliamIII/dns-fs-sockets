const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname + '/thisfolder')

const files = fs.readdirSync(dirname)


files.forEach(file => {
    const filePath = path.join(dirname, file)

    fs.stat(filePath, (err, stats) => {
        if(err) {
            throw err
        }

        console.log(filePath)
        console.log(stats.size);

        fs.truncate(filePath, err => {
            if(err) {
                throw err
            }
        })
    })
})
