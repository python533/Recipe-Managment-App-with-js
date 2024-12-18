const express=require("express");
const recipeController= require("../../src/controllers/recipeController");
const router= express.Router();

//Tüm Tarifleri Alma
router.get("/", recipeController.getAllRecipes);

//ID Numarasına Göre tarif Alma
router.get("/:id",recipeController.getRecipeById);

//Yeni Tarif Oluşturma
router.post("/",recipeController.createRecipe);

//ID Numarasına Göre Tarif Güncelleme
router.put("/:id",recipeController.updateRecipe);

//ID Numarasına göre tarif Silme
router.delete("/:id",recipeController.deleteRecipe);


module.exports=router;
