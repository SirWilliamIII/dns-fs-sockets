const fs = require('fs')
const path = require('path')

const dirname = path.join(__dirname)


fs.mkdirSync(dirname + '/newone')

const ms1Day = 60 * 60 * 24 * 1000


for(let i = 0; i < 10; i++) {
    const filePath = path.join(dirname, `file${i}`)

    fs.writeFile(filePath, i, err => {
        if(err) {
            throw err
        }
        const time = (Date.now() - i * ms1Day) / 1000

        fs.utimes(filePath, time, time, err => {
            if(err) {
                throw err
            }
        })
    })

}
