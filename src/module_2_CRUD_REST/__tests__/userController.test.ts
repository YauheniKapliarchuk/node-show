import { jest } from '@jest/globals';
import { mock, users } from '../models/__mocks__';
import UserController from '../controllers/UserController';
import 'regenerator-runtime/runtime';
import constants from '../config/constants';

describe('UserController', () => {
    it('Get All Users', async () => {
        const request = mock.request();
        const response = mock.response();

        const userService = {
            getUsers: jest.fn().mockResolvedValue(users)
        };

        await new UserController(userService).getAllUsers(request, response);

        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(users);
    });

    it('Create new User', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        const newUser = {
            login: 'Test Login 1',
            password: '123QWERTYU',
            age: '11'
        };

        request.body = jest.fn().mockResolvedValue(newUser);

        const userService = {
            addNewUser: jest.fn().mockResolvedValue(users[0])
        };

        await new UserController(userService).createNewUser(request, response, next);

        expect(response.json).toHaveBeenCalledTimes(1);
        expect(response.json).toHaveBeenCalledWith(users[0]);
    });

    it('Get User by ID', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        request.params.userId = jest.fn().mockResolvedValue(users[0].id);
        const userService = {
            getUserById: jest.fn().mockResolvedValue(users[0])
        };

        await new UserController(userService).getUserById(request, response, next);

        expect(response.json).toHaveBeenCalledTimes(1);
        expect(response.json).toHaveBeenCalledWith(users[0]);
    });

    it('Get User by ID. User not found', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        request.params.userId = jest.fn().mockResolvedValue(users[0].id);
        const userService = {
            getUserById: jest.fn().mockResolvedValue(undefined)
        };

        await new UserController(userService).getUserById(request, response, next);

        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(constants.GET_USER_NOT_FOUND);
        expect(response.status).toHaveBeenCalledWith(404);
    });

    it('Update User by ID', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        const updatedUser = {
            login: 'Test Login 1',
            password: '123QWERTYU',
            age: '11'
        };

        request.params.userId = jest.fn().mockResolvedValue(users[0].id);
        request.body = jest.fn().mockResolvedValue(updatedUser);

        const userService = {
            updateUser: jest.fn().mockResolvedValue(1)
        };

        await new UserController(userService).updateUserById(request, response, next);

        expect(response.json).toHaveBeenCalledTimes(1);
    });

    it('Delete User', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        request.params.userId = jest.fn().mockResolvedValue(users[0].id);

        const userService = {
            deleteUser: jest.fn().mockResolvedValue(users[0])
        };

        await new UserController(userService).deleteUser(request, response, next);

        expect(response.json).toHaveBeenCalledTimes(1);
        expect(response.json).toHaveBeenCalledWith(users[0]);
    });

    it('Get Auto Suggest Users', async () => {
        const request = mock.request();
        const response = mock.response();
        const next = mock.next();

        request.query.loginSubstring = jest.fn().mockResolvedValue(users[0].login);
        request.query.limit = jest.fn().mockResolvedValue(100);

        const userService = {
            getAutoSuggestUsers: jest.fn().mockResolvedValue(users)
        };

        await new UserController(userService).getAutoSuggest(request, response, next);

        expect(response.send).toHaveBeenCalledTimes(1);
        expect(response.send).toHaveBeenCalledWith(users);
    });
});
