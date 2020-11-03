require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');


const app = express();

const initialisePassport = require('./passport_config');
initialisePassport(passport,
    (email => {return users.find(user => user.email === email)}),
        id=> users.find( user=>user.id===id)
    );

app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

const users = [];

const checkAuthenticated = (req,res,next)=>
{
    if(req.isAuthenticated())
    {
        return next();
    }
    else
    {
        res.redirect('/login')
    }
}

const checkNotAuthenticated =(req,res,next)=>
{
    if(req.isAuthenticated())
    {
        return res.redirect('/');
    }
    next();
}



app.get('/',checkAuthenticated,(req,res)=>
{
    res.render('index.ejs',{ name:req.user.name});
})

app.get('/login',checkNotAuthenticated,(req,res)=>
{
    res.render('login.ejs');
})

app.post('/login',checkNotAuthenticated,passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}) )

app.get('/register',checkNotAuthenticated,(req,res)=>
{
    res.render('register.ejs');
})

app.post('/register',checkNotAuthenticated,async(req,res)=>
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