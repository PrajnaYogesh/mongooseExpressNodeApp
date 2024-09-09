// const db = require('../db/conn');

// async function getPosts(req,res) {
//     let collection = await db.collection("posts");
//  let results = await collection.find({}).limit(10).toArray;
//  res.send(results).status(200);
// }

// module.exports = getPosts;


const { connect } = require('../db/conn');

async function getPosts(req, res) {
    try {
        const db = await connect(); // Ensure connection is established
        const collection = db.collection('posts');
        const results = await collection.find({}).limit(10).toArray();
        res.status(200).send(results);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = getPosts;