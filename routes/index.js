// fungsi ini digunakan untuk import controller
const HelloController = require('../controller/HelloController')
const PostController = require('../controller/PostController')

// fungsi ini digunakan untuk import controller menggunakan index.js
const { ApiTestController } = require('../controller')

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

    // route dengan controller dan body parser
    app.post('/post/create', PostController.create)
    app.get('/post/:id', PostController.show)

    // route dengan controller, body parser, dan axios
    app.get('/check', ApiTestController.check)
    app.post('/httppost', ApiTestController.post)
}

module.exports = router