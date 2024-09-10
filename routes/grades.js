const express = require('express');
const router = express.Router();
const getGrades = require('../controllers/getGrades')

router.get('/:id',getGrades.getGradesById );
router.get('/student/:studentId',getGrades.getGradesByStudentID);

module.exports=router;