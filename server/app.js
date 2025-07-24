const express = require('express');
const app = express();

app.listen('3003', (err) => {
    if(err){ 
        console.log(err)
    }
    else{ 
        console.log(`working`)
    }
})