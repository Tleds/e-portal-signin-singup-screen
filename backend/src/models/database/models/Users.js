const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class Users extends Model {
  static init(sequelize){
    super.init({
      email: DataTypes.STRING(100),
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING(100),
      cellphone: DataTypes.STRING(11),
    },{
      sequelize,
      tableName: 'users'
    });
    this.addHook('beforeSave', async (user) =>{
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash);
  }
  generateToken() {
    return jwt.sign({
      id: this.id
    }, 
    process.env.SECRET,{
      expiresIn: '1h'
    });
  }
}

module.exports = Users;