const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const basicAuth = require('../middlewares/basic-auth');

router.get('/', 
    basicAuth, 
    userController.getUsers
);
router.get('/:userId', 
    basicAuth, 
    userController.getUserById
);
router.post('/', 
    basicAuth, 
    userController.createUser
);
router.put('/:userId', 
    basicAuth, 
    userController.updateUser
);
router.patch('/:userId', 
    basicAuth, 
    userController.updateUser
);
router.delete('/:userId', 
    basicAuth, 
    userController.softDeleteUser);

module.exports = router;
