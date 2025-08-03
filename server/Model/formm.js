const client = require('../utils/conn');
const formm = (id, title, premise, genre, output_type, language, requester) => {
    return new Promise((resolve, reject) => {
            const isPrivileged = [101, 102, 103].includes(Number(requester.role));
            if(!isPrivileged)
            {
                return resolve({
                    status: 'Unauthorized',
                    code: 401,
                    message: 'You do not have permission to access'
                })
            }
            client.query('INSERT INTO job_information(job_id, email_id, title, premise, genre, output_type, language, restarted) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [id, requester.user_email, title, premise, genre, output_type, language, 'false'], (err, result)=> {
                    if (err) { return reject(err)}
                    else {
                        return resolve(result);
                    }
            })
    })
}
module.exports = {formm}