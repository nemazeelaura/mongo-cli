var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');

//   var allChoice = prompt("Type 'all' and press enter to display all the restaurants' names: ");
//   if(allChoice == "all"){
//   	 collection.find().toArray(function(err, docs){
//   	    console.log(docs);
//     });
//   } else {
//   	console.log("Aw, you don't want to see the restaurants?");
//   } 
// });


//getting info of restaurant typed in
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
  // var findName = prompt("Type in 'restaurant' name for information");   
  //   collection.find({name: findName}).forEach(function(docs){
  //   	console.log(docs);
  //   });

//add new restaurant to db
//   mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var name  = prompt("Enter new restaurant name");
//   var address  = prompt("Enter address");
//   var zipcode  = prompt("Enter zipcode");
//   collection.insert({
//   	"name" : name,
//   	"address" : address,
//   	"zipcode" : zipcode});
// });

 
//add new restaurant to db
//   mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var name  = prompt("Enter new restaurant name");
//   var address  = prompt("Enter address");
//   var zipcode  = prompt("Enter zipcode");
//   collection.insert({
//   	"name" : name,
//   	"address" : address,
//   	"zipcode" : zipcode});
// });

//user can edit restaurant
//   mongo.connect(url, function(err, db){
// 	  var collection = db.collection('restaurants');
// 	  var name  = prompt("What restaurant do you want to change?");
// 	  var update  = prompt("What is the change?");
// 	  collection.update(
// 	  {name: name},
// 	  {$set : {name: update}
// 	});	
// });

//user can remove restaurant
  mongo.connect(url, function(err, db){
	  var collection = db.collection('restaurants');
	  var remove  = prompt("What restaurant do you want to remove? ");
	  collection.remove({name: remove});	
});

 




  