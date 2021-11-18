let express = require('express');
let router = express.Router();
let Person = require('../models/student');

router.get("/student", function (req, res) {
    res.render('student')
})

router.post("/student", function (req, res) {
    
    Person.create(req.body.student, function (err, student) {
        console.log(req.body.student);
        if (err) {
            console.error(err);
        } else {
            res.redirect('/student/student');
        }
    })
    
})

module.exports = router;