const { v4: uuidv4 } = require('uuid');
const {formm, getFormData} = require('../Model/formm');
const formc = async(req, res) => {
    const requester = req.user;
    const {title, premise, genre, output_type, language} = req.body;
    try
    {
        //const id = uuidv4();
        const response = await formm(title, premise, genre, output_type, language, requester);
        res.status(200).json({
            result: response
        })
    }
    catch(err)
    {
        res.status(500).json({
            err: err.message
        })
    }
}
const getFormDatac = async(req, res) => {
    // const requester = req.user;
    try
    {
        const response = await getFormData();
        res.status(200).send(response.rows);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
}
module.exports = {formc, getFormDatac}