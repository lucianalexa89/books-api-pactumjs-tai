const { faker } = require('@faker-js/faker');
const { spec, request } = require('pactum');
require('dotenv').config();

const getNewBookId = async (
  baseUrl,
  title = faker.lorem.words({ min: 1, max: 3 }),
  author = faker.person.fullName()
) => {
  const requestBody = {
    title: title,
    author: author,
  };
  const newPostId = await spec().post(`${baseUrl}/books`).withBody(requestBody).expectStatus(201);
  return newPostId.body.id;
};

module.exports = {
  getNewBookId,
};
