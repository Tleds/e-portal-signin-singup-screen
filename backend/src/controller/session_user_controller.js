const Users = require('../models/database/models/Users');

class SessionUserController {
  async checkCredentials(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({
      attributes: ['id', 'email', 'password_hash'],
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        mensagem: 'Usuário inválido',
        auth: false,
      });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        mensagem: 'Usuário inválido',
        auth: false,
      });
    }

    return res.status(200).json({
      token: user.generateToken(),
      email: user.email,
      auth: true,
    });
  }
}

module.exports = new SessionUserController();
