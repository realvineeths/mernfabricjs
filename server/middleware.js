module.exports.isSignedin=(req,res,next)=>{
    if(!req.isAuthenticated())
    {

        return res.status(400).json({
            success:false,
            message: validationResult.message,
            errors: validationResult.errors            
        });
    }
    next();
}
