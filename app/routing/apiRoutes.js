var friend = require('../data/friend.js')
module.exports = function (app) {
    app.get('../data/friend.js', (req, res) => {
        res.json(friend);

    });
    app.post('../data/friend.js', (req, res) => {
        friend.push(req.body)
        res.json(true);
    });
}