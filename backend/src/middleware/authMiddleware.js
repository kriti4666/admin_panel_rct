const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.send("Please Login Again!");
    }
    else{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if(err){
                return res.send("Please login!")
            }else{
                req.body.userId = decoded.userId;
                next();
            }
        })
    }
}


module.exports = { Authenticate}