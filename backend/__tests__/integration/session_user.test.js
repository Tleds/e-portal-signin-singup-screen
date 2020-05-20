require('../../src/models/index');
const Users = require('../../src/models/database/models/Users');
const request = require('supertest');
const app = require('../../src/app');

describe('Sessão do usuário', ()=>{
  beforeEach(async ()=>{
    await Users.sequelize.truncate();
  })
  it('deve fazer o login do usuário com dados válidos', async ()=>{
    const user = await Users.create({
      email: 'teste@gmail.com',
      password: '123456789',
      cellphone: '31123456789'
    });

    const response = await request(app)
    .post('/session_users')
    .send({
      email: user.email,
      password: user.password,
    });

    expect(typeof response.body.token).toBe('string');
    expect(response.body.email).toBe('teste@gmail.com');
    expect(response.body.auth).toBe(true);
    expect(response.status).toBe(200);
  });
  it('deve fazer o login do usuário com credenciais inválidas', async ()=>{
    const user = await Users.create({
      email: 'teste@gmail.com',
      password: '123456789',
      cellphone: '31123456789'
    });

    const response = await request(app)
    .post('/session_users')
    .send({
      email: 'usuarioInvalido@gmail.com',
      password: user.password,
    });

    expect(response.body.mensagem).toBe('Usuário inválido');
    expect(response.body.auth).toBe(false);
    expect(response.status).toBe(401);

  })

})