const Category = require('../models/categories');
const User = require('../models/users');


exports.getCategory = (req, res, next)=>{

    const name = req.body.name;   


};
exports.postCategory = (req, res, next) => {

    const category = new Category({
        
        name: req.body.name
         
    });
    category.save().then(result=>{
        
        res.status(200).json({"message":"Category Successfully Created!"});

    }).catch(err=>{
        console.log(err);        
    });

};
exports.createSubject = (req, res, next) => {

    const id = req.params.categoryId;
    const subjectName = req.body.name;
    Category.findByIdAndUpdate({_id:id}, {$push: {subjects: {name:subjectName}}})
    .then(result=>{
        res.status(200).json({"message":"The subject has been added"});
        console.log(result);
        
    }).catch(err => {
        console.log(err);
        res.status(500).json({"error" : error});
    });

};