const userRepository = require('../repositories/user-repository');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../Utils/errors/app-error');

async function createUser(userData) {
    try {
        console.log('Creating a new user:', userData);
        const user = await userRepository.create(userData);
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.name === 'ValidationError') {
            let explanations = Object.values(error.errors).map((val) => val.message);
            throw new AppError(explanations, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getUsers() {
    try {
        const users = await userRepository.getAll();
        return users;
    } catch (error) {
        throw new AppError('Cannot fetch users', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getUserById(userId) {
    try {
        const user = await userRepository.getById(userId);
        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }
        return user;
    } catch (error) {
        throw new AppError('Cannot fetch user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function softDeleteUser(userId) {
    try {
        const user = await userRepository.delete(userId);
        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }
        return user;
    } catch (error) {
        throw new AppError('Cannot delete user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateUser(userId, updateData) {
    try {
        const user = await userRepository.update(userId, updateData);
        if (!user) {
            throw new AppError('User not found', StatusCodes.NOT_FOUND);
        }
        return user;
    } catch (error) {
        throw new AppError('Cannot update user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    softDeleteUser,
    updateUser
};