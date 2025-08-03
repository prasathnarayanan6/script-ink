const express = require('express');
const app = express();
const loginRouter = require('./Routes/LoginRouter.js')
const registerRouter = require('./Routes/RegisterRouter.js');
const formRouter = require('./Routes/formRouter.js');
const Authenticate = require('./utils/Authenticate.js');
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
app.use('/api/v1', loginRouter);
app.use('/api/v1', registerRouter);
app.use('/api/v1', Authenticate, formRouter)