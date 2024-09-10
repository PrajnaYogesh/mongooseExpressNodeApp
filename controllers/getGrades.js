// const db = require('../db/conn');

// async function getPosts(req,res) {
//     let collection = await db.collection("posts");
//  let results = await collection.find({}).limit(10).toArray;
//  res.send(results).status(200);
// }

// module.exports = getPosts;


const { ObjectId } = require('mongodb');

const { connect } = require('../db/conn');

async function getGradesById(req, res) {
    try {
        const db = await connect(); // Ensure connection is established
        const collection = db.collection('grades');
        // const id = parseInt(req.params.id)
               let query = { _id:new ObjectId(req.params.id) };
        // console.log(query);
               let result = await collection.findOne(query);
        // console.log(result);
        if(!result){
           return res.send("Not found").status(404);
        }
        return res.send(result).status(200);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Internal Server Error');
    }
}



async function getGradesByStudentID(req,res){
try {
    const db = await connect(); // Ensure connection is established
        const collection = db.collection('grades');
        console.log("I am here");
        
        let studentId = parseInt(req.params.studentId);
        console.log(studentId);
        let query = {student_id : studentId};
        console.log(query);
        
        let result = await collection.findOne(query);
        if(!result){
            return res.send("Not found").status(404);
         }
         return res.send(result).status(200);
     } catch (error) {
         console.error('Error fetching posts:', error);
         res.status(500).send('Internal Server Error');
     }
}


module.exports = {getGradesById, getGradesByStudentID};