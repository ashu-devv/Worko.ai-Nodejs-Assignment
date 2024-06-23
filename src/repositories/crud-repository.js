const { Types } = require('mongoose');
const AppError = require('../Utils/errors/app-error');

class CrudRepository {
    constructor(model) {
        if (!model) {
            throw new Error('A valid model must be provided');
        }
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw new AppError('Failed to create resource', 500);
        }
    }

    async getById(id) {
        try {
            if (!Types.ObjectId.isValid(id)) {
                throw new AppError('Invalid ID', 400);
            }
            const response = await this.model.findById(id);
            if (!response) {
                throw new AppError('Resource not found', 404);
            }
            return response;
        } catch (error) {
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async getAll() {
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            throw new AppError('Failed to fetch resources', 500);
        }
    }

    async update(id, data) {
        try {
            if (!Types.ObjectId.isValid(id)) {
                throw new AppError('Invalid ID', 400);
            }
            const response = await this.model.findByIdAndUpdate(id, data, { new: true });
            if (!response) {
                throw new AppError('Resource not found', 404);
            }
            return response;
        } catch (error) {
            throw new AppError(error.message, error.statusCode || 500);
        }
    }

    async delete(id) {
        try {
            if (!Types.ObjectId.isValid(id)) {
                throw new AppError('Invalid ID', 400);
            }
            const response = await this.model.findByIdAndDelete(id);
            if (!response) {
                throw new AppError('Resource not found', 404);
            }
            return response;
        } catch (error) {
            throw new AppError(error.message, error.statusCode || 500);
        }
    }
}

module.exports = CrudRepository;