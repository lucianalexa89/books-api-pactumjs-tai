const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
const getBookByIdSchema = require('../data/response/get-book-by-id-schema.json');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('GET -> API request - get book by id', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get book by id', async () => {
    await spec().get(`${baseUrl}/books/1`).expectStatus(200).expectJsonSchema(getBookByIdSchema);
  });

  it('Get book by id - invalid scenario', async () => {
    await spec()
      .get(`${baseUrl}/books/3100`)
      .expectStatus(404)
      .expectBodyContains('Book not found.');
  });
});
