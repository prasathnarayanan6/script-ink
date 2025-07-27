const client = require('../utils/conn');
const jwt = require('jsonwebtoken');
const {comparePasswords} = require('../utils/hash');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const loginModel = (user_email, user_password) => {
     return new Promise((resolve, reject) => {
            client.query('SELECT * FROM user_data WHERE email_address=$1 and status=$2', [user_email, 'active'], async(err, result) => {
                if(err)
                {
                    return reject(err)
                }
                if(!result  || result.rows.length === 0)
                {
                    return resolve({ status: 'User Not Found or Account Disabled', code: 404})
                }
                const user = result.rows[0];
                const isMatch = await comparePasswords(user_password, user.user_password);
                if(!isMatch)
                {
                    return resolve({status: "Invalid_Password", code: 401});
                }
                let role = user.user_role;
                const accessToken = jwt.sign({user_email,role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
                resolve({ accessToken: accessToken, id: user_email, role: role, status: 'Login Authenticated', code: 200});
            })
    })
}
const registerModel = (first_name, last_name, phone_number, email_address, user_password) => {
    return new Promise((resolve, reject) => {
           client.query('INSERT INTO user_data(first_name, last_name, phone_number, email_address, user_password) VALUES($1, $2, $3, $4, $5)', [first_name, last_name, phone_number, email_address, user_password], (err, result) => {
                if(err)
                {
                    return reject(err);
                }
                else {
                    return resolve(result);
                }
           })
    })
}
module.exports = {loginModel, registerModel}