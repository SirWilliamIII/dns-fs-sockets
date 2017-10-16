const user = {
    id: 0,
    name: '',
    ip_address: 0
}

Object.entries(user).forEach((el) => {
    el[1].write(`{user.id}: `)
    el[1].write(data)
})
