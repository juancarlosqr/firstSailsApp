module.exports = function (req, res, next) {
    if (req.session.user) {
        var action = req.param('action');
        if (action == "create") {
            req.body.userId = req.session.user.id;
            req.body.username = req.session.user.username;
        }
        next();
    } else {
        res.send(403,{ error:"user is not authenticated"});
    }
};