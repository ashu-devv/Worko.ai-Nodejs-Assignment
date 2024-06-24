const { expect } = require('chai');
const sinon = require('sinon');
const User = require('../../src/models/user');
const {userService }= require('../../src/services');

describe('User Service', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = { name: 'John Doe', email: 'john@example.com' };
      sinon.stub(User, 'create').resolves(mockUser);

      const result = await userService.createUser(mockUser);

      expect(result).to.deep.equal(mockUser);
    });
  });

  describe('getUsers', () => {
    it('should retrieve all users', async () => {
      const mockUsers = [{ name: 'John Doe' }, { name: 'Jane Doe' }];
      sinon.stub(User, 'find').resolves(mockUsers);

      const result = await userService.getUsers();

      expect(result).to.deep.equal(mockUsers);
    });
  });
});
