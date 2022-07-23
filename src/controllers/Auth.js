const { User } = require('../models');
const bcrypt = require('bcryptjs');

const authController = {
  showLogin: (req, res) => {
    return res.render("auth/login");
  },
  login: async (req, res) => {
    try{
      const {email, password} = req.body;
      const user = await User.findOne({ where: {email} });
  
      if(!user || !bcrypt.compareSync(password, user.password)){
        return res.render("auth/login", {error: "Credenciais incorretas!"})
      }

      Object.assign(req.session, {
        user: {
          id: user.id,
          name: user.name,
          username: user.username
        }
      })

      return res.redirect("/home")

    }
    catch(error){
      console.log(error);
      return res.render("auth/login", {error: "Sistema indisponível!"})
    }
  },
  showRegister: (req, res) => {
    return res.render("auth/register");
  },
  store: async (req, res) => {
    try {

    const { email, name, username, password} = req.body;

    const verifyUser = await User.findOne({where: {email}});

    if(verifyUser) {
      return res.render("auth/register", {error: 'Não foi possível realizar o cadastro!'});
    }

    const hash = bcrypt.hashSync(password, 10);

    const user = await User.create({
      email,
      name,
      username,
      password: hash
    })
    return res.redirect('/home');

    } catch(error) {
      console.log(error)
      return res.render('auth/register', {error: "Sistema indisponível no momento!"})
    }
  }
};

module.exports = authController;
