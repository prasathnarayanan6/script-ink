const express = require('express');
const app = express();
const loginRouter = require('./Routes/route')
const client = require('./utils/conn.js')
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.listen('3003', (err) => {
    if(err){ 
        console.log(err)
    }
    else{ 
        console.log(`working`)
    }
})

app.use('/api/v1', loginRouter)