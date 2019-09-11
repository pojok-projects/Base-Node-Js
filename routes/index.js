// fungsi ini digunakan untuk import controller
const HelloController = require('../controller/HelloController')

// fungsi ini digunakan untuk membuat route
const router = (app) => {

    // route default tanpa controller
    app.get('/', (req, res) => {
        res.send({
            message: "Anda sukses melakukan route nodejs"
        })
    })

    // route dengan controller
    app.get('/hello', HelloController.hello)
    app.get('/world', HelloController.world)
}

module.exports = router