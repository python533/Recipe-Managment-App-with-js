const mongoose= require("mongoose");

//Tarif Şemasının Tanımlanması
const recipeSchema({
name : {type: String,required:true},
ingredients : {type: String,required:true},
description : {type: String,required:true},
});

module.exports= mongoose.model("Recipe",recipeSchema);
