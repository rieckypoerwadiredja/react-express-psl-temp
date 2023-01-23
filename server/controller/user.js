module.exports = {
    name: (req, res) => {
        res.json({
        "users":["user1", "user2", "user3"]
        })
    },
    quote: (req, res) => {
        res.json({
        "quotes":["quote1", "quote2", "quote3"]
        })
    }

}