const dns = require('dns')

// dns.lookup('www.google.com', (err, add) => {
//     console.log(add)
// })

dns.reverse('172.217.11.164', (err, hostnames) => {
    console.log(hostnames)
})
