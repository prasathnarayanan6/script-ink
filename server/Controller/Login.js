const {loginModel, registerModel} = require('../Model/loginm');
const {HashPassword} = require('../utils/hash');
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
const RegisterController = async(req, res) => {
    const {first_name, last_name, phone_number, email_address, user_password} = req.body;
    try
    {
        const result = await registerModel(first_name, last_name, phone_number, email_address, HashPassword(user_password));
        res.status(200).send(result);
    }
    catch(err)
    {
        if(err.code==="23505")
        {
                   return res.status(403).json({
                        err: 403,
                        desc: "data already exists"
                    })
        }
        else
        {
            return res.status(500).send("Internal Server Error")
        }
    }
}
module.exports = {Login, RegisterController}