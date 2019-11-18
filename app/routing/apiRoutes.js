var friends = require('../data/friend')
module.exports = function (app) {
    app.get('../data/friend', (req, res) => {
        res.json(friends);

    });
    app.post('../data/friend', (req, res) => {
        friends.push(req.body)
        res.json(true);
    });
    return console.log('I am using this' + app)
}