import Controller from './Controller';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';
import middleware from '../handlers/validations/middleware';
import schemas from '../handlers/validations/schemas';
import { UserInterface } from '../models';
import HttpException from '../handlers/exceptions/HttpException';
import authMiddleware from '../handlers/auth/authMiddleWare';
import constants from '../config/constants';

class UserController implements Controller {
    path = '/user';
    router = express.Router();
    userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`${this.path}/list`, authMiddleware(), this.getAllUsers);
        this.router.get(`${this.path}/auto`, middleware(schemas.validateSortSchema, 'query'), this.getAutoSuggest);
        this.router.post(this.path, authMiddleware(), middleware(schemas.userPostSchema, 'body'), this.createNewUser);
        this.router.route(`${this.path}/:userId`)
            .get(authMiddleware(), middleware(schemas.validateUserIdSchema, 'params'), this.getUserById)
            .delete(authMiddleware(), middleware(schemas.validateUserIdSchema, 'params'), this.deleteUser)
            .put(authMiddleware(), middleware(schemas.validateUserIdSchema, 'params'), middleware(schemas.userUpdateSchema, 'body'), this.updateUserById);
    }

    // -------------------------- GET All Users ----------------------------------------------
    getAllUsers = async (request: Request, response: Response) => {
        const users = await this.userService.getUsers();
        response.send(users);
    };

    // -------------------------- CREATE new User --------------------------------------------
    createNewUser = async (request: Request, response: Response, next: NextFunction) => {
        const requestedUser: UserInterface = request.body;
        await this.userService.addNewUser(requestedUser)
            .then((newUser: any) => {
                response.json(newUser);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'createNewUser'));
            });
    };

    // -------------------------- GET User By ID ---------------------------------------------
    getUserById = async (request: Request, response: Response, next: NextFunction) => {
        await this.userService.getUserById(String(request.params.userId))
            .then((requestedUser: any) => {
                if (requestedUser && !requestedUser.isDeleted) {
                    response.json(requestedUser);
                } else {
                    response.status(404).send(constants.GET_USER_NOT_FOUND);
                }
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'getUserById'));
            });
    };

    // -------------------------- UPDATE User ------------------------------------------------
    updateUserById = async (request: Request, response: Response, next: NextFunction) => {
        this.getUserById(request, response, next);

        const requestedUser = request.body;
        const userId: string = request.params.userId;

        await this.userService.updateUser(requestedUser, userId)
            .then(() => {
                response.json(requestedUser);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'updateUserById'));
            });
    };

    // -------------------------- DELETE User ------------------------------------------------
    deleteUser = async (request: Request, response: Response, next: NextFunction) => {
        const deleteUser = this.getUserById(request, response, next);

        await this.userService.deleteUser(deleteUser, request.params.userId)
            .then((deletedUser: any) => {
                response.json(deletedUser);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'deleteUser'));
            });
    };

    // -------------------------- GET Auto Suggest Users -------------------------------------
    getAutoSuggest = async (request: Request, response: Response) => {
        const users = await this.userService.getAutoSuggestUsers(String(request.query.loginSubstring), Number(request.query.limit));
        return response.send(users);
    };
}

export default UserController;
