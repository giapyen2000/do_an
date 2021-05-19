const users = require('../models/user');

module.exports.checkAuth = async (req, res, next) => {
    try {
        let userId = req.cookies.userId;
        
        if (!userId) {
            res.redirect('/login');
        }

        let user = await users.findOne({
            _id: userId
        });

        if (!user) {
            res.redirect('/login');
        }

        next();
    } catch (error) {
        
    }
}