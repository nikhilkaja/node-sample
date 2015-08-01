/**
 * Created by nikhilkaja on 8/1/15.
 */
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jetbrains');

var Product =  mongoose.model('product',{ name: String});

var product = new Product({name: " WebStrom "});

product.save( function (err){

     if(err){

         console.log("error");
     }
    else{

         console.log("saved");
     }


});


Schema = mongoose.Schema;

var itemSchema = new Schema({

    itemName : { type: String , unique:true },
    game : String,
    price : Number,
    quantityAvailable : Number,
    color : String

});

var ITEM = mongoose.model('item',itemSchema);

var cricketBat1 = new ITEM({itemName : "kookabura bat" , game : "cricket" , price : 10 , quantityAvailable:10, color : "black"});

cricketBat1.save (function (err){

    if(err){

        console.log(err.message);
    }
    else {

        console.log(err.message);
        console.log(err.messageHeader);
    }


});