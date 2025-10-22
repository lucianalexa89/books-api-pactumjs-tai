const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
require('dotenv').config();

const baseUrl = process.env.baseUrl;

describe('POST -> API request - create a new book ', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });
  it('Create new book', async () => {
    const randomName = faker.person.fullName();
    const requestBody = {
      title: 'Homo Sapiens',
      author: `${randomName}`,
    };
    await spec().post(`${baseUrl}/books`).withBody(requestBody).expectStatus(201);
  });
});
