const yup = require('yup');

module.exports = {
  async checkUserStore(req, res, next) {
    try {
      const schema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required(),
        password: yup.string().min(6).max(16).required(),
        cellphone: yup.string().min(11).max(11).required(),
      });
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (e) {
      return res.status(403).json({
        mensagem: e.message,
      });
    }
  },
};
