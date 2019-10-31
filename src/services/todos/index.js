
const create = (store) => {
    console.log(store)
}

const get = (store) => {
    console.log(store)
}

module.exports = (store) => {
    return {
        create: create.bind(this, store),
        get: get.bind(this,store)
    }
}