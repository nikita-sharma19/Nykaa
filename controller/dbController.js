// let mongo = require('mongodb');
// let {MongoClient} = require('mongodb');
// // let mongoUrl = "mongodb://127.0.0.1:27017";
// "mongodb+srv://nikitasharma0414:<zckzCLwCXoyYhyJZ>@firstcluster.xdmtwby.mongodb.net/?retryWrites=true&w=majority"
// let client = new MongoClient(mongoUrl);

// async function dbConnect(){
//     await client.connect()
// }
// let db = client.db("Nykaa");

// async function getData(colName, query){
//     let output =[];
//     try{
//         const cursor = db.collection(colName).find(query);
//         for await (const data of cursor){
//             output.push(data)
//         }
//         cursor.closed
        
//         // output = await db.collection(colName).find(query).toArray()
//     }
//     catch(err){
//         output.push({"Error":"Error in getData"})
//     }
// }

// module.export = {
//     dbConnect,
//     db,
//     getData
// }

let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
// let mongoUrl = "mongodb://127.0.0.1:27017";
let databaseUrl = "mongodb+srv://nikita_0414:FJt1CSXbmQAYQLir@firstcluster.xdmtwby.mongodb.net/?retryWrites=true&w=majority"


let client = new MongoClient(databaseUrl)

async function dbConnect(){
    await client.connect()
}

let db = client.db('nykaa');
//Function to get the data
async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    } catch(err){
        output.push({"Error":"Error in getData"})
    }
    return output
}
//Function to Post data
// async function postData(colName,data){
//     let output;
//     try{
//         await db.collection(colName).insertOne(data);
//         output = {"response":"Item added"};
//         }
//     catch(err){
//         output = {"response":"Error in postData"};
//     }
//     return output;
// }

//Function to Post data
async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data)
    }
    catch(err){
        output = {"response":"Error in postData"}
    }
    return output
}

// update
async function updateOrder(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {"response":"Error in update data"}
    }
    return output
}

// delete
async function deleteOrder(colName,condition){
    let output;
    try{
        output = await db.collection(colName).deleteOne(condition)
    } catch(err){
        output = {"response":"Error in delete data"}
    }
    return output
}

 module.exports = {
    dbConnect , 
    getData,
    postData,
    updateOrder,
    deleteOrder
 }
