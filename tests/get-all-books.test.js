const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
const getAllBooksSchema = require('../data/response/get-all-books-schema.json');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('GET -> API request - get all books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get all books', async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200).expectJsonSchema(getAllBooksSchema);
  });
});
