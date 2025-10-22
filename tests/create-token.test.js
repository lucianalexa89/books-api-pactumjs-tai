const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('POST -> API request - create token', () => {
  it('Retrieve token', async () => {
    const requestBody = {
      email: process.env.email,
      password: process.env.password,
    };

    const AUTH_TOKEN = await spec()
      .post(`${baseUrl}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
