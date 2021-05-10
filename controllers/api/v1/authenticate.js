const login = (req, res) => {
    res.json({
        "status": "success",
        "user": "Sarah"
    })
}
  
const signup =(req, res) => {
    res.json({
        "status": "success",
        "user": "Fien"
    });
}

module.exports.login = login;
module.exports.signup = signup;