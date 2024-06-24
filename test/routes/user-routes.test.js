const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index');
const { serverConfig } = require('../../src/config');
const { expect } = chai;

chai.use(chaiHttp);

describe('User Routes', () => {
  describe('GET /worko/user', () => {
    it('should get all users', async () => {
      const res = await chai.request(app)
        .get('/worko/user')
        .set('Authorization', serverConfig.SECRET_KEY);

      expect(res).to.have.status(200);
      expect(res.body.data).to.be.an('array');
    });
  });

  describe('POST /worko/user', () => {
    it('should create a user', function(done) { 
      this.timeout(20000); 

      chai.request(app)
        .post('/worko/user')
        .set('Authorization', serverConfig.SECRET_KEY)
        .send({
          name: 'John Doe',
          email: 'john264@example.com',
          age: 22,
          city: 'Kanpur',
          zipCode: '256856'
        })
        .then(res => {
          expect(res).to.have.status(201);
          expect(res.body.data.name).to.equal('John Doe');
          expect(res.body.data.email).to.equal('john264@example.com');
          expect(res.body.data.age).to.equal(22);
          expect(res.body.data.city).to.equal('Kanpur');
          expect(res.body.data.zipCode).to.equal('256856');
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});
