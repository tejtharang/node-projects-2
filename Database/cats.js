var mongoose = require("mongoose");
options = {
    "auth": {
        "authSource": "admin"
    },
    "user": "admin",
    "pass": "admin123"
};

mongoose.connect("mongodb://localhost/cat_app",options);

// This is to tell the javascript that schema looks like this
// But this does not mean that we cannot add more fields or less fields


//////////////////////////////////////////////////////////////////////////////////////
////// ADDING CATS TO DATABASE ///////////////////////////////////////////////////////
var catSchema = new mongoose.Schema({
	name : String,
	age : Number,
	temperament : String
});

// We then compile that Schema to a variable 
var Cat = mongoose.model("Cat",catSchema);
//                         ^ is pluralized and the collection's name comes from here

/*var george = new Cat({
	name : "Mrs. Norris",
	age : 7,
	temperament : "Evil"
});

george.save(function(err,cat){
	if(err){
		console.log(err);
	}
	else{
		console.log("We just saved a cat to the DB");
		console.log(cat);
	}
}); */
////////////////////////////////////////////////////////////////////////////////////////
/////// CREATNG A NEW CAT AND ADDING TO THE DB /////////////////////////////////////////
Cat.create({
	name : "Girish",
	age : 22,
	temperament : "Not bad at all"
},function(err,cats){
	if(err){
		console.log("error");
	}
	else{
		console.log(cats);
	}
});

///////////////////////////////////////////////////////////////////////////////////////
//////////// RETRIEVING CATS FROM THE DATABASE ////////////////////////////////////////
Cat.find({},function(err,cats){
	if(err){
		console.log(rrr);
	}
	else{
		console.log(cats);
	}
});