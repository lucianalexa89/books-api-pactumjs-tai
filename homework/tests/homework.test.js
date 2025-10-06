const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');

const baseUrl = 'http://localhost:3000';

describe('API automated Test Suite - homework', () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it('Get all posts', async () => {
    await spec().get(`${baseUrl}/books`).expectStatus(200);
  });

  it('Get post by id', async () => {
    await spec().get(`${baseUrl}/books/4`).expectStatus(200);
  });

  it('Update post by id', async () => {
    const randomName = faker.person.fullName();
    const requestBody = {
      title: 'The three Musketeers',
      author: `${randomName}`,
    };
    await spec().put(`${baseUrl}/books/5`).withBody(requestBody).expectStatus(200);
  });

  it('Create new post', async () => {
    const randomName = faker.person.fullName();
    const requestBody = {
      title: 'Homo Sapiens',
      author: `${randomName}`,
    };
    await spec().post(`${baseUrl}/books`).withBody(requestBody).expectStatus(201);
  });
});
