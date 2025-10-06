const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
const getAllBooksSchema = require ('../data/response/get-all-books-schema.json');

const baseUrl = 'http://localhost:3000';

describe('GET -> API request - get all books', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get all books', async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200).expectJsonSchema(getAllBooksSchema);
  });
});
