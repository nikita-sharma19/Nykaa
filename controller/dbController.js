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
let mongoUrl = "mongodb+srv://nikitasharma0414:<zckzCLwCXoyYhyJZ>@firstcluster.xdmtwby.mongodb.net/?retryWrites=true&w=majority"

let client = new MongoClient(mongoUrl)

async function dbConnect(){
    await client.connect()
}

let db = client.db('Nykaa');

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

module.exports = {
    dbConnect,
    db,
    getData
}
