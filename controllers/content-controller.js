const content = require('../models/content');
const type = require('../models/type');

/**
 * View Create Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewCreateContentController = async (req, res) => {
    try {
        let types = await type.find();
        return res.render('create-content', {
            types: types
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * Create Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createContentController = async (req, res) => {
    try {
        // Input data from client
        let data = req.body;
        data.createdAt = new Date();

        // Create new format content
        const saveItem = new content();

        let listItems = ['title', 'typeNew', 'detail', 'content', 'imageShow', 'active', 'createdAt', 'imageContent', 'contentMore'];

        listItems.map(e => {
            if (!data[e]) {
                saveItem[e] = null;
            } else {
                saveItem[e] = data[e];
            }
        });

        // Save data into database
        await saveItem.save();

        return res.redirect('/contents');
    } catch (error) {
        console.log(error);
    }
}

/**
 * View All Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewAllContentController = async (req, res) => {
    try {
        let items = await content.find();
        res.render('view-content', {
            data: items
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports.viewAllContentController = async (req, res) => {
    try {
        let items = await content.find();
        res.render('view-content', {
            data: items
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * View Update Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.viewUpdateContentController = async (req, res) => {
    try {
        let id = req.params.id;

        let item = await content.findById(id);
        let types = await type.find();

        res.render('update-content', {
            data: item,
            types: types
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * Update Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.updateContentController = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;

        let item = await content.findById(id);

        Object.assign(item, data);

        await item.save();

        res.redirect(`/update-contents/${id}`);
    } catch (error) {
        console.log(error);
    }
}
//remove abc
/**
 * Remove Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.removeContentController = async (req, res) => {
    let id = req.params.id;

    await content.findByIdAndDelete(id);

    res.redirect('/contents');
}


/**
 * View All Content Controller
 * @param {*} req 
 * @param {*} res 
 */
module.exports.showAllContentController = async (req, res) => {
    try {
        let checkType = req.query.search;

        let menu = await type.find({
            active: 'active'
        });

        let item = await content.find({
            active: 'active'
        });
      

        let items = await content.find({
            active: 'active',
            typeNew: checkType
        });

        res.render('view-all-contents', {
            menu: menu,
            data: items,
            da: item
            
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports.showAlls = async (req, res) => {
    try {
        let checkType = req.query.search;

        let menu = await type.find({
            active: 'active'
        });
        // let items = await content.find({active: 'active'});
        let items = await content.find({
            active: 'active',
            typeNew: checkType
        });
        
        res.render('view-all', {
            data: items,
            menu: menu
        });
    } catch (error) {
        console.log(error);
    }
}
// show- one- content
module.exports.showOne = async (req, res) => {
    try {
        let id = req.params.id;

        console.log(id);

        let item = await content.findById(id);
        let types = await type.find();

        let menu = await type.find({
            active: 'active'
        });
        res.render('view-one', {
            da: item,
            types: types,
            menu: menu
        });
    } catch (error) {
        console.log(error);
    }
}