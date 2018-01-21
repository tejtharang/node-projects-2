var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var options = {
	"auth" :{
		"authSoruce" : "admin"
	},
	"user" : "admin",
	"pass" : "admin123"
};
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

mongoose.connect("mongodb://localhost/yelp_camp",options);

var campSchema = new mongoose.Schema({
	name 
})


app.listen(3000,"localhost");