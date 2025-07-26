const client = require('../utils/conn');
const loginModel = (user_email, user_password) => {
    return new Promise((resolve, reject) => {
            client.query('', [], (err, result) => {
                if(err)
                {
                    return reject(err)
                }
                else
                {
                   return resolve(result);
                }
            })
    })
}