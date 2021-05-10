router.get("/login", (req, res) => {
    res.json({
        "status": "success",
        "user": "Sarah"
    })
  });
  
  router.get("/signup", (req, res) => {
    res.json({
        "status": "success",
        "user": "Fien"
    });
  });

module.exports.postsignup = postsignup;
module.exports.postlogin = postlogin;
module.exports.emailauth = emailauth;