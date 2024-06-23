const { userService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../Utils/common');

/**
 * POST: /worko/user/
 * req-body { email: 'user@example.com', name: 'John Doe', age: 30, city: 'New York', zipCode: '10001' }
 */
async function createUser(req, res) {
    try {
        const user = await userService.createUser({
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            city: req.body.city,
            zipCode: req.body.zipCode
        });
        SuccessResponse.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * GET: /worko/user/
 * req-body {}
 */
async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        SuccessResponse.data = users;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * GET: /worko/user/:userId
 * req-body {}
 */
async function getUserById(req, res) {
    try {
        const user = await userService.getUserById(req.params.userId);
        SuccessResponse.data = user;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * DELETE: /worko/user/:userId
 * req-body {}
 */
async function softDeleteUser(req, res) {
    try {
        const result = await userService.softDeleteUser(req.params.userId);
        SuccessResponse.data = result;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * PATCH: /worko/user/:userId
 * req-body { name: 'Updated Name' }
 */
async function updateUser(req, res) {
    try {
        const updatedUser = await userService.updateUser(req.params.userId, req.body);
        SuccessResponse.data = updatedUser;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    softDeleteUser,
    updateUser
};