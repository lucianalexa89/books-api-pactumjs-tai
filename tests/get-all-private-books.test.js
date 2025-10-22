const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
const { generateToken } = require('../lib/generate-token');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('GET -> API request - get all private books', () => {
  let token;
  before(async () => {
    token = await generateToken(baseUrl);
    request.setDefaultTimeout(10000);
  });

  it('Get all private books - unauthorized', async () => {
    await spec().get(`${baseUrl}/private/books`).expectStatus(401);
  });

  it('Get all private books', async () => {
    await spec()
      .get(`${baseUrl}/private/books`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200);
  });
});
