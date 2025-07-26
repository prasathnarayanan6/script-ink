const {loginModel} = require('../Model/loginm');
const Login = async (req, res) => {
    const {user_email, user_password} = req.body
    try
    {

        if(!user_email || !user_password)
        {
            res.status(400).json({
                statusDescrip: 'All fields are required',
                code: 400
            })
        }
        else
        {
            const result = await loginModel(user_email, user_password);
            if(result.code == 200)
            {
                res.status(200).send(result)
            }
            else if(result.code == 401)
            {
                res.status(401).send(result)
            }
            else if(result.code == 404)
            {
                res.status(404).send(result)
            }
        }
    }   
    catch(err)
    {
        res.status(200).json(err)
    }
}
module.exports = {Login}