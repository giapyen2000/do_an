const users = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * View Register Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewRegisterController = (req, res) => {
    return res.render('register');
}

/**
 *  Register Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.registerController = async (req, res) => {
    try {
        let data = req.body;
        data.createdAt = new Date();
        

        let listItemSave = ['firstName', 'lastName', 'email', 'password', 'createdAt'];

        let saveItem = new users();

        listItemSave.map(key => {
            if (!data[key]) {
                saveItem[key] = null;
            } else if (key == 'password') {
                let hashPassword = bcrypt.hashSync(data[key], 10);
                saveItem[key] = hashPassword;
            } else {
                saveItem[key] = data[key];
            }
        });

        await saveItem.save();

        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

/**
 * View Login Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewLoginController = (req, res) => {
    try {
        return res.render('login');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Login Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.loginController = async (req, res) => {
    try {
        let data = req.body;

        let user = await users.findOne({
            email: data.email,
        });

        if (user) {
            let decoded = bcrypt.compareSync(data.password, user.password);
            
            if (decoded) {
                res.cookie('userId', user.id);
                res.redirect('/contents');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.log(error);
    }
}


/**
 * Logout Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.logoutController = (req, res) => {
    try {
        res.clearCookie('userId');
        res.redirect('/login');
    } catch (error) {
        console.log(error);
        res.redirect('/login');
    }
}