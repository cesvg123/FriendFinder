var friend = require('../data/friend.js');


module.exports = function (app) {
    app.get('/api/friend', (req, res) => {
        console.log(friend)
        res.json(friend);

    });
    app.post('/api/friend', (req, res) => {
        friend.push(req.body)
        res.json(true);
    });
}