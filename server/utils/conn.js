// const { Client } = require('pg');
// const client = new Client({
//   connectionString: 'postgresql://postgres.nijsusrxiztmqzlaouct:Nm3Y0mxYjQP85f44@aws-0-ap-south-1.pooler.supabase.com:6543/postgres',
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// client.connect(err => {
//   if (err) {
//     console.error('Connection error', err.stack);
//   } else {
//     console.log('Connected');
//   }
// });
// module.exports = client;

const {Client} = require('pg');
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "1234",
  database: "postgres"
})
client.connect(function(err) {
  if(err) throw err;
  else{
    console.log("connected testt");
  } 
});
module.exports = client;