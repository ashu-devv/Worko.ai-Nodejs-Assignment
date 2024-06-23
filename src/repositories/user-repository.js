const User = require('../models/User');
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }
}

const userRepository = new UserRepository();
module.exports = userRepository;