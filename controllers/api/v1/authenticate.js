const User = require("../../../models/Users");
const passport = require("../../../passport/passport");

const postsignup = async (req, res, next) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;

    const user = new User({firstname: firstname, lastname: lastname, email: email}); 
    await user.setPassword(password);
    await user.save().then(result =>{
        res.json({
            "status": "success"
        })
    }).catch(error => {
        console.log(error);
        res.json({
            "status": "error",
            "message": error
        })
    });
}

const postlogin = async (req, res, next) => {
    const user = await User.authenticate()(req.body.email, req.body.password).then(result => {
        res.json({
            "status": "success",
            "data": {
                "user": result
            }
        });
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
    });
} 

module.exports.postsignup = postsignup; 
module.exports.postlogin = postlogin;