// file ini adalah controller
// define dengan const untuk setiap function

const hello = (req, res) => {
    res.send({
        hello: 'world'
    })
}

const world = (req, res) => {
    res.send({
        world: 'is strong'
    })
}

module.exports = {
    hello,
    world
}