import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../server/server';

chai.use(chaiHttp);
chai.should();

const BASE_URL = '/api/v1';

describe('App', () => {
    describe('/', () => {
        it('should return a response', (done) => {
            chai.request(app)
                .get(`${BASE_URL}`)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    done();
                });
        });
    });
});




