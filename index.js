import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL="https://botw-compendium.herokuapp.com/api/v3/compendium/"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/monsters",async (req,res)=>{
    try {
        const response= await axios.get(API_URL+"category/monsters");
        const result = response.data;
        res.render("categoriesPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/creatures",async (req,res)=>{
    try {
        const response= await axios.get(API_URL+"category/creatures");
        const result = response.data;
        res.render("categoriesPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/equipment",async (req,res)=>{
    try {
        const response= await axios.get(API_URL+"category/equipment");
        const result = response.data;
        res.render("categoriesPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/materials",async (req,res)=>{
    try {
        const response= await axios.get(API_URL+"category/materials");
        const result = response.data;
        res.render("categoriesPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/treasure",async (req,res)=>{
    try {
        const response= await axios.get(API_URL+"category/treasure");
        const result = response.data;
        console.log(result);
        res.render("categoriesPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/details", async (req,res)=>{
    try {
        const response= await axios.get(API_URL+`entry/${req.body["oSelected"]}`);
        const result = response.data;
        res.render("detailsPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.post("/search", async (req,res)=>{
    try {
        const response= await axios.get(API_URL+`entry/${req.body["item"]}`);
         const result = response.data;
        res.render("detailsPage.ejs",{data:result.data})
    } catch (error) {
        console.error(error);
        res.render("errorPage.ejs");
    }
});

app.listen(port,()=>{
    console.log(`Server is runnin on ports ${port}`);
});