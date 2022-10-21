const express = require('express')
const cors = require('cors');
const Home = require('./Routes/home');
const Story = require('./Routes/story');
const Fitness = require('./Routes/fitness');
const Technology = require('./Routes/technology');
const Hollywood = require('./Routes/hollywood');
const Toursim = require('./Routes/tourism');
const Food = require('./Routes/food');

const app = express();
const port = process.env.PORT||5050;

app.use(cors());

app.get('/',(req,res) =>{
    res.json(Home).status(200);
    res.end();
})
app.get('/story',(req,res) =>{
    res.json(Story).status(200);
    res.end();
})
app.get('/fitness',(req,res) =>{
    res.json(Fitness).status(200);
    res.end();
})
app.get('/technology',(req,res) =>{
    res.json(Technology).status(200);
    res.end();
})
app.get('/hollywood',(req,res) =>{
    res.json(Hollywood).status(200);
    res.end();
})
app.get('/toursim',(req,res) =>{
    res.json(Toursim).status(200);
    res.end();
})
app.get('/food',(req,res) =>{
    res.json(Food).status(200);
    res.end();
})
app.listen(port, () => {
    console.log(`Connected to port ${port}✅`);
})

///https://server-blog-project.herokuapp.com