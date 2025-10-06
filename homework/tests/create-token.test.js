const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');

const baseUrl = 'http://localhost:3000';

describe('POST -> API request - create token', () => {
  it('Retrieve token', async () => {
    const requestBody = {
      email: 'rv@tai.com',
      password: 'learnwithrv',
    };

    const AUTH_TOKEN = await spec()
      .post(`${baseUrl}/auth/login`)
      .withBody(requestBody)
      .expectStatus(200);
  });
});
