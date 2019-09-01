//const request = require('supertest');
const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits', () => {
    describe('add()', () => {
        beforeEach(async () => {
            await db('hobbits').truncate();
        });
    });


    it('should insert 2 hobbits', async () => {
        // await Hobbits.add({ name: "dude1" });
        // await Hobbits.add({ name: "dude2" });

        await db('hobbits').insert({ name: "dude1" });
        await db('hobbits').insert({ name: "dude2" });

        const hobbits = await db('hobbits');
        expect(hobbits).toHaveLength(hobbits.length);
    });
});