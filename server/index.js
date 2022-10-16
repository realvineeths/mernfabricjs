const express=require('express');
const mongoose=require('mongoose');
const passport=require('passport');
const app=express();
const LocalStrategy=require('passport-local');
const session=require('express-session');
const flash=require('connect-flash');
const bodyparser=require('body-parser');
const cors=require('cors');
const User= require('./modules/user')
const isSignedinModule=require('./middleware')

mongoose.connect('mongodb://localhost:27017/passportdem1')
.then(()=>{
    console.log('Mongo is connected');
})
.catch((err)=>{
    console.log(err);
})

app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}));

app.use(session({secret:'asecret' }));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.registeredUser=req.user;
    next();

})

app.post('/user/register',async (req,res,next)=>{

    try {
        const {email,username,password}=req.body;
        const user = new User({email,username});
        const reguser= await User.register(user,password);  
        // req.flash('success','welcome');
        req.login(reguser,err=>{
            if(err) return next(err)

        })
        // res.send('success');
        // res.json({status:'success'})
        res.sendStatus(200);
        // console.log('yayy!');
        // console.log(reguser);
    } catch (e) {

        res.sendStatus(404)
        // console.log('no!!');
    }
})

app.get('/homepage',isSignedinModule.isSignedin,(req,res)=>{

    return res.status(200).json({
        success:true,
        redirectUrl:'/homepage'
    })
})

app.post('/user/login',passport.authenticate('local'),(req,res)=>{

    // console.log('we are in!!');
    res.sendStatus(200);
})

app.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
    }
)})


app.listen(1837,()=>{
    console.log('SESSION HEARING..');
})