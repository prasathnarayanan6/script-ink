const client = require('../utils/conn');
// import axios from 'axios';
// const formm = (id, title, premise, genre, output_type, language, requester) => {
//     return new Promise((resolve, reject) => {
//             const isPrivileged = [101, 102, 103].includes(Number(requester.role));
//             if(!isPrivileged)
//             {
//                 return resolve({
//                     status: 'Unauthorized',
//                     code: 401,
//                     message: 'You do not have permission to access'
//                 })
//             }
//             const test
//             client.query('INSERT INTO public.job_information(job_id, email_id, title, premise, genre, output_type, language, restarted) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [id, requester.user_email, title, premise, genre, output_type, language, falsecd], (err, result)=> {
//                     if (err) { return reject(err)}
//                     else {
//                         return resolve(result);
//                     }
//             })
//     })
// }

const axios = require('axios');
const formm = async (title, premise, genre, output_type, language, requester) => {
  return new Promise(async (resolve, reject) => {
    const isPrivileged = [103].includes(Number(requester.role));
    if (!isPrivileged) {
      return resolve({
        status: 'Unauthorized',
        code: 401,
        message: 'You do not have permission to access',
      });
    }
    const kickoffBody = {
      email_id: requester.user_email,
      title,
      premise,
      genre,
      output_type,
      language,
      restarted: false,
    };
    try {
      const kickoffRes = await axios.post(
        'https://powerful-ambition-production.up.railway.app/kickoff',
        kickoffBody
      );
      const job_id = kickoffRes?.data?.job_id;
      if (!job_id) {
        return resolve({
          status: 'Error',
          code: 500,
          message: 'Kickoff failed: job_id missing',
        });
      }
      client.query(
        'INSERT INTO public.job_information(job_id, email_id, title, premise, genre, output_type, language, restarted) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
        [job_id, requester.user_email, title, premise, genre, output_type, language, false],
        (err, result) => {
          if (err) return reject(err);
          return resolve({
            status: 'Success',
            code: 200,
            message: 'Job Initiated and record inserted',
            job_id,
          });
        }
      );
    } catch (err) {
      console.error('Kickoff error:', err.message);
      return resolve({
        status: 'Error',
        code: 502,
        message: 'Failed to call kickoff API',
        error: err.message,
      });
    }
  });
};

const getFormData = () => {
    return new Promise((resolve, reject) => {
        // const isPrivileged = [101, 102].includes(Number(requester.role));
        // if(!isPrivileged)
        // {
        //     return resolve({
        //             status: 'Unauthorized',
        //             code: 401,
        //             message: 'You do not have permission to access'
        //     })
        // }
        client.query('SELECT * FROM job_information', (err, result) => {
            if(err) { return reject(err)}
            else{
                return resolve(result);
            }
        })
    })
}
module.exports = {formm, getFormData}