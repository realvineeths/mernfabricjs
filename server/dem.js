const mongoose=require('mongoose');
const express=require('express');
const app=express();
const User=require('./modules/user');
const passport=require('passport');
const session=require('express-session');
const Localstrategy=require('passport-local');
const Routes=require('./routes/users');
const bodyparser=require('body-parser');
// const { urlencoded } = require('express');
const flash=require('connect-flash');

mongoose.connect('mongodb://localhost:27017/passportdem1')
.then(()=>{
    console.log('Mongo is connected');
})
.catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');

app.use(flash());

app.use(bodyparser.urlencoded({extended:false}));
app.use(session({secret:'asecret' }));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    // console.log(req.session);
    
    res.locals.registeredUser=req.user;
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})

app.use('/',Routes);

// app.get('/fakeuser',async (req,res)=>{
//     const user=new User({email:'vini2@gmail.com',username:'vini1'});
//     const newuser=await User.register(user,'vini1234');
//     res.send(newuser);
// })

app.listen(8888,()=>{
    console.log('SESSION HEARING..');
})