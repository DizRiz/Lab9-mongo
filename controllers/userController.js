"use strict";
let Models = require("../models");

const getUsers = (res) => {
//finds all users
        Models.User.find({}, {}, {}, (err, data) => {
            if (err) throw err;
            res.send({result: 200, data: data})
        });
}
    
const createUser = (data, res) => {
//creates a new user using JSON data POSTed in request body
        console.log(data)
        new Models.User(data).save((err, data) => {
            if (err) throw err
            res.send({ result: 200, data: data})
        });
}

const updateUser = (req, res) => {
    //updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.User.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
    
const deleteUser =  (id, res) => {
    Models.User.findByIdAndDelete(id, (err, data) => {
        if (err) throw err;
        res.send({ result: 200, data: data })
    }); 
}
    
module.exports = {
        getUsers, createUser, updateUser, deleteUser,
    }