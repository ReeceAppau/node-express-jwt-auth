module.exports.signup_get = (req, res) => {
    res.render("signup");
};
module.exports.login_get = (req, res) => {
    res.render("home");
};
module.exports.signup_post = (req, res) => {
    res.render("new signup");
};
module.exports.login_post = (req, res) => {
    res.render("new login");
};
