const axios = require('axios')

module.exports = {
    check: async(req, res, next) => {
        try {
            const FetchReq = await axios.get('https://httpbin.org/headers', {
                headers: {
                    accept: "application/json"
                }
            })

            res.send(FetchReq.headers)
        } catch (err) {
            next(err)
        }
    },
    post: async(req, res, next) => {
        try {
            const { firstname, lastname } = req.body

            const FetchPost = await axios({
                method: 'POST',
                url: 'https://httpbin.org/post',
                params: {
                    firstname: firstname,
                    lastname: lastname
                }
            })

            // return json dari axios body
            res.json(FetchPost.data)
        } catch (err) {
            next(err)
        }
    }
}