const supertest = require('supertest');

const url = 'http://localhost:3000';

describe('url', () => {
    test('testando...', () => {
        return supertest(url).get('/user')
        .then((response) => {
            expect(response.statusCode).toBe(200)
        })
        .catch((error) => {
            console.log(error);
        })
    })
})