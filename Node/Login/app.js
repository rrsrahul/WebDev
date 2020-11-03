const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const app = express();

const initialisePassport = require('./passport_config');
initialisePassport(passport);

app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false}));

const users = [];



app.get('/',(req,res)=>
{
    res.render('index.ejs',{ name:'Rahul'});
})

app.get('/login',(req,res)=>
{
    res.render('login.ejs');
})

app.get('/register',(req,res)=>
{
    res.render('register.ejs');
})

app.post('/register',async(req,res)=>
{
 try{

    const hashedPw = await  bcrypt.hash(req.body.password,10);
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPw
    })

    res.redirect('/login')   
 }
 catch(err)
 {
    res.redirect('/register');
 }

 console.log(users);
})

app.listen(3000);