const request = require('supertest');
const knex = require("../db/knex");
const expect = require('chai').expect;

const app = require("../app");

describe('CRUD Stickers', () => {
    before((done) => {
        //run migrations
        knex.migrate.latest()
            .then(() => {
                //run seeds
                return knex.seed.run()
            }) 
            .then(() => done());
    })
    it('List all Records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.be.a('array');
                done();
            });
    });
    it('List a record', (done) => {
        request(app)
            .get('/api/v1/stickers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body).to.be.a('object');
                done();
            });
    });
});