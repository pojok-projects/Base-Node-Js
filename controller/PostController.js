module.exports = {
    create: async(req, res, next) => {
        try {
            const { post } = req.body

            res.send(post)
        
        } catch (err) {
            next(err)
        }
    },
    show: async(req, res, next) => {
        try {

            res.send(req.params.id)

        } catch (err) {
            next(err)
        }
    }
}