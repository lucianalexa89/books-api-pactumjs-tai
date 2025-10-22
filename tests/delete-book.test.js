const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
const { getNewBookId } = require('../lib/create-post');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('DELETE -> API request - delete book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Delete book by id', async () => {
    const newBookId = await getNewBookId(baseUrl);
    await spec().delete(`${baseUrl}/books/${newBookId}`).expectStatus(200);
  });
});
