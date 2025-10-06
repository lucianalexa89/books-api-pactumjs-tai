const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');

const baseUrl = 'http://localhost:3000';

describe('PUT -> API request - update book', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Update book by id', async () => {
    const randomName = faker.person.fullName();
    const requestBody = {
      title: 'The three Musketeers',
      author: `${randomName}`,
    };
    await spec().put(`${baseUrl}/books/5`).withBody(requestBody).expectStatus(200);
  });
});
