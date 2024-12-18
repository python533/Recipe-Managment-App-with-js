const express=require("express") ;
const cors=require("cors");
const mongoose=require("mongoose");
const recipeRoute("./src/routes/recipeRoutes");

const app= express();
app.use(cors());
app.use(express.json());

//Mongo DB Bağlantı URL'i
const url=`mongodb+srv://sampath:Sampath123@cluster0.zikbkf9.mongodb.net/RMA-API?retryWrites=true&w=majority`;
const port=5000;

//Mongo Db Bağlantı
mongoose
 .connect(url)
 .then(()=>{
   console.log("Veri Tabanına Bağlanıldı.");
 })

.catch((err)=>{
console.log(`VeriTabanına Bağlanırken Hata Meydana Geldi. n${err}`)
});


//Tarifle ilgili isteklerin işlenmesine yönelik yönergeler
app.use("/recipes",recipeRoutes);

//Server'ı başlatma
app.listen(port,()=>{
  console.log(`App listening on port ${port}`;
});
