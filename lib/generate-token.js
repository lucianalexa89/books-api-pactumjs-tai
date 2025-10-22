const { spec } = require('pactum');
require('dotenv').config();

const generateToken = async (baseUrl, email, password) => {
  const requestBody = {
    email: process.env.email,
    password: process.env.password,
  };
  const response = await spec()
    .post(`${process.env.baseUrl}/auth/login`)
    .withBody(requestBody)
    .expectStatus(200);
  return response.body.token;
};

module.exports = {
  generateToken,
};
