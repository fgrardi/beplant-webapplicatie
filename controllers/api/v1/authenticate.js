const User = require("../../../models/Users");
const jwt = require("jsonwebtoken");

const postsignup = async (req, res, next) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;

    const user = new User({firstname: firstname, lastname: lastname, email: email}); 
    await user.setPassword(password);
    await user.save().then(result =>{
        // console.log(result._id);
        console.log(result.email);

        let token = jwt.sign({
            // uid: result._id,
            email: result.email
        }, "Gardensecret");

        res.json({
            "status": "success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "error",
            "message": error
        })
        console.log(error);
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