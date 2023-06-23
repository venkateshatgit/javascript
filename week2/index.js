const express = require("express");
const { listen } = require("express/lib/application");
const app = express()
const port = 3000


function handleFirstRequest(req, res){
    let ans = calculateSum(req.query.counter);
    res.send(`The sum of 100 is ${ans}`)
}

app.get('/handleSum', handleFirstRequest);


function listenPort(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, listenPort)


function calculateSum(n){
    let sum=0;
    for(let i=0; i<=n; ++i)
        sum+=i;
    
    return sum;
}