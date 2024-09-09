// const {MongoClient} = require('mongodb');
// const connectionString = process.env.ATLAS_URL|| "Default string here";

// const client = new MongoClient(connectionString);

// let conn;
// try{
//     conn =  client.connect();

// }catch(e){
//     console.error(e)
// }

// let db = conn.db("sample_training");

// module.exports= db;


const { MongoClient } = require('mongodb');
const connectionString = process.env.ATLAS_URL || "your_default_connection_string_here";

const client = new MongoClient(connectionString);

let db = null;

async function connect() {
    if (!db) {
        try {
            await client.connect();
            console.log('Connected to the database');
            db = client.db("sample_training"); // Replace with your database name
        } catch (e) {
            console.error('Error connecting to the database:', e);
            throw e;
        }
    }
    return db;
}

module.exports = { connect, client };