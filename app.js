    
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
let port = process.env.PORT||9120;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors')
let {dbConnect,getData,postData,updateOrder,deleteOrder} = require('./controller/dbController');
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello I am Express Js And you are gonna like me alot...Hiii From express!')
})

// get all categories
app.get('/categories',async (req,res)=>{
    let query = {};
    let collection = "categories"
    let output = await getData(collection,query)
    res.send(output)
})

//just to check something
app.get('/try',async (req,res)=>{
    let query = {};
    let collection = "try"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/nykaaFaishon',async (req,res)=>{
    let query = {};
    if(req.query.category_id){
        query = {category_id:Number(req.query.category_id)}
    }else{
        query={}
    }
    let collection = "nykaaFaishon"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/faishontype',async (req,res)=>{
    let query = {};
    if(req.query.faishontypeId){
        query = {faishontype_id: Number(req.query.faishontypeId)}
    }else{
        query={}
    }
    let collection = "faishontype"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/details/:id',async(req,res)=>{
    let id = Number(req.params.id);
    let query = {product_id:id}
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output);
})

app.get('/products',async (req,res)=>{

    let query = {};
    if(req.query.prodId){
        query = {product_id: Number(req.query.prodId)}
    }else{
        query={}
    }
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output)
})


// app.get('/details',async(req,res)=>{
//     let query = {};
//     if(req.query.productId){
//         query = {product_id: Number(req.query.productId)}
//     }else{
//         query={}
//     }
//     let collection = "products"
//     let output = await getData(collection,query)
//     res.send(output);
// })



app.get('/indianwear',async (req,res)=>{
    let query = {};
    // if(req.query.productId){
    //     query = {"products.sarees":Number(req.query.productId)}
    // }else{
    //     query={}
    // }
    let collection = "indianwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/westernwear',async (req,res)=>{
    let query = {};
    let collection = "westernwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/womenfootwear',async (req,res)=>{
    let query = {};
    let collection = "womenfootwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/jwellery',async (req,res)=>{
    let query = {};
    let collection = "jwellery"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/topwear',async (req,res)=>{
    let query = {"category_id":1};
    let collection = "topwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/ethnicwear',async (req,res)=>{
    let query = {};
    let collection = "ethnicwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/menfootwear',async (req,res)=>{
    let query = {};
    let collection = "menfootwear"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/haircare',async (req,res)=>{
    let query = {};
    let collection = "haircare"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/skincare',async (req,res)=>{
    let query = {};
    let collection = "skincare"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/makeup',async (req,res)=>{
    let query = {};
    let collection = "makeup"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/fragrance',async (req,res)=>{
    let query = {"category_id":5};
    let collection = "fragrance"
    let output = await getData(collection,query)
    res.send(output)
})



app.get('/allProducts',async (req,res)=>{
    let query = {};
    let collection = "allProducts"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/details',async (req,res)=>{
    let query = {};
    let collection = "details"
    let output = await getData(collection,query)
    res.send(output)
})

// app.get('/details/:id', async(req,res) => {
//     let id = new Mongo.ObjectId(req.params.id)
//     let query = {_id:id}
//     let collection = "products";
//     let output = await getData(collection,query);
//     res.send(output)
// })

//get orders
// app.get('/orders',async (req,res)=>{
//     let email = req.query.email;
//     if(email){
//         query={email:email}
//     }
//     let query = {};
//     let collection = "orders"
//     let output = await getData(collection,query)
//     res.send(output)
// })

app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query={email:req.query.email}
    }else{
        query = {}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})

//place order
// app.post('/placeOrder',async(req,res)=>{
//     let data = req.body;
//     let collection = "orders";
//     let response = await postData(collection , data)
//     res.send(response)
// })
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = "orders";
    // console.log(">>>",data)
    let response = await postData(collection,data)
    res.send(response)
})
// app.get('/details/:id',async(req,res)=>{
//     let id = Number(req.params.id);
//     let query = {faishontype_id:id}
//     let collection = "indianwear"
//     let output = await getData(collection,query)
//     res.send(output);
// })



//get selected product details on basis of faishontype_id
app.post('/productDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {faishontype_id:{$in:req.body.id}};
        let collection = 'products';
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Your data is not in the form of array!')
    }
})
//get selected product details on basis of category_id
app.post('/productDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {category_id:{$in:req.body.id}};
        let collection = 'products';
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Your data is not in the form of array!')
    }
})
//get selected items details
app.post('/productDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {prod_id:{$in:req.body.id}};
        let collection = 'allProducts';
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Your data is not in the form of array!')
    }
})
//update order
app.put('/updateOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

//delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})

app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})