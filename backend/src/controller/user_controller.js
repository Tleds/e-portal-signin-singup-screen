const User = require('../models/database/models/Users');

class UserController {
  async store(req, res) {
    const { email, password, cellphone } = req.body;

    try {
      const user = await User.create({
        email,
        password,
        cellphone,
      });
      return res.status(201).json({
        token: user.generateToken(),
        email: user.email,
        mensagem: 'Usuário criado com sucesso',
      });
    } catch (e) {
      return res.status(500).json({
        mensagem: 'Erro interno no servidor',
      });
    }
  }
}

module.exports = new UserController();
