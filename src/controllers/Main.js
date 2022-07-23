const mainController = {
  showHome(req, res) {
    req.session.user;
    return res.render("home");
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },
};

module.exports = mainController;