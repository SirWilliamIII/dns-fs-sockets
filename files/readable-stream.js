const { Readable } = require('stream')

const inStream = new Readable({
    read(size) {
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++))
            if(this.currentCharCode > 90) {
                this.push(null)
            }
        }, 200)
    }
})

inStream.currentCharCode = 65
inStream.pipe(process.stdout)

