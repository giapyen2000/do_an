const type = require('../models/type');

/**
 * View Create Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewCreateTypeController = (req, res) => {
    try {
        return res.render('create-type');
    } catch (error) {
        console.log(error);
    }
}

/**
 * Create Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createTypeController = async(req, res) => {
    try {
        let data = req.body;
        data.createdAt = new Date();
        
        const saveItem = new type();
        let listItems = ['title', 'active', 'createdAt'];

        listItems.map(e => {
            if (!data[e]) {
                saveItem[e] = null;
            } else {
                saveItem[e] = data[e];
            }
        })
        
        await saveItem.save();

        return res.redirect('/create-types')
    } catch (error) {
        console.log(error);
    }
}

/**
 * View All Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewAllTypeController = async (req, res) => {
    try {
        let items = await type.find();
        res.render('view-type', {
            data: items
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * View Update Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewUpdateTypeController = async (req, res) => {
    try {
        let id = req.params.id;

        let item = await type.findById(id);

        res.render('update-type', {
            data: item
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * Update Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.updateTypeController = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;

        let item = await type.findById(id);

        Object.assign(item, data);
        await item.save();

        res.redirect(`/update-types/${id}`);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Remove Type Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.removeTypeController = async (req, res) => {
    try {
        let id = req.params.id;

        await type.findByIdAndDelete(id);

        res.redirect(`/types`);
    } catch (error) {
        console.log(error);
    }
}
