require('../../src/models/index');
const Users = require('../../src/models/database/models/Users');
const request = require('supertest');
const app = require('../../src/app');

describe('Registro de usuários',()=>{
  it('deve cadastrar o usuário com credenciais válidas', async () =>{
    const response = await request(app)
    .post('/users')
    .send({
      email:'teste3@gmail.com',
      cellphone:'31123456478',
      password:'12345678',
    });

    expect(typeof response.body.token).toBe('string');
    expect(response.body.email).toBe('teste3@gmail.com');
    expect(response.body.mensagem).toBe('Usuário criado com sucesso');
    expect(response.status).toBe(201);
  });
  it('deve tentar cadastra um usuário com e-mail inválido', async ()=>{
    const response = await request(app)
    .post('/users')
    .send({
      email:'teste3gmail.com',
      cellphone:'31123456478',
      password:'12345678',
    });

    expect(response.body.mensagem).toBe('E-mail inválido');
    expect(response.status).toBe(403);
  })
})