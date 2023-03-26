"use strict";

let Models = require("../models");

const getComment = (res) => {
    Models.Comment.find({}, {}, {}, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

const createComment = (data, res) => {
    new Models.Comment(data).save((err,data) => {
        if(err) throw err
        res.send({ result: 200 , data: data})
    });
}

module.exports = {
    getComment, createComment
}