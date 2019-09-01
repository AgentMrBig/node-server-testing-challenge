const request = require('supertest');
const hobbits = require('./hobbitsRouter')

describe('hobbitsRouter.js', () => {
    describe('GET /', () => {
        it('should return 200 ok', async () => {
            request(hobbits).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('should return array of hobbits', async () => {
            const res = await request(hobbits).get('/');
            expect(res.body).toBeInstanceOf(Array);
        })
    })
    describe('DELETE /:id', () => {
        it('should return http status code 204', async () => {
            const res = await request(hobbits).delete('/1')
            expect(res.body).toMatchObject({});
        })


    })
})