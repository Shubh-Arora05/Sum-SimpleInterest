const express = require('express') ;
const app = express() ;

app.listen(3005) ;
const bodyparse = require('body-parser')
app.use(bodyparse.json()) ;

app.get('/simpleinterest' , (req, res)=>{
    const p = parseInt(req.query.p) ;
    const r = parseInt(req.query.r) ;
    const t = parseInt(req.query.t) ;
    let ans = (p*r*t)/100 ;
    res.send(ans.toString()) ;
})

app.get('/sum' , (req, res)=>{
    const n1 = parseInt(req.query.n1) ;
    const n2 = parseInt(req.query.n2) ;
    let ans = n1 + n2 ;
    res.send(ans.toString()) ;
})
