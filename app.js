    
//     let exp = require('express');
//     let app = exp();
//     let port = 1220;

//     let{dbConnect,db} = require('./controller/dbController.js');

//     app.get('/',(req,res) =>{
//         res.send('Hii from Nykaa server or you can call me just express');
//     })

//     app.get('/products',(req,res) =>{
//         res.send('Here are all the products you are looking for!');
//     })

//     app.listen(port,(err) =>{
//      dbConnect();
//      if(err) throw err;
//      console.log(`Sever is running on port:${port}`);
// })

let express = require('express');
let app = express();
let port = 9120;
let {dbConnect,getData} = require('./controller/dbController')

app.get('/',(req,res) => {
    res.send('Hiii From express')
})

// get all location
app.get('/Categories',async (req,res)=>{
    let query = {};
    let collection = "Categories"
    let output = await getData(collection,query)
    res.send(output)
})

//get all mealType
app.get('/mealType', async (req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.send(output)
})

app.get('/restaurants', async(req,res) => {
    let query = {}
    if(req.query.stateId){
        query={state_id: Number(req.query.stateId)}
    }else{
        query = {}
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})



app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})