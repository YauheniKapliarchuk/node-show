import Controller from './Controller';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import middleware from '../handlers/validations/middleware';
import schemas from '../handlers/validations/schemas';
import UserService from '../services/UserService';
import TokenData from '../models/auth/TokenData';
import AuthService from '../services/AuthService';
import constants from '../config/constants';
import HttpException from '../handlers/exceptions/HttpException';

class AuthenticationController implements Controller {
    path = '/auth';
    router = express.Router();
    userService = new UserService();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}/login`, middleware(schemas.validateLogInData, 'body'), this.logginIn);
    }

    logginIn = async (request: Request, response: Response, next: NextFunction) => {
        const userData = request.body;
        await this.userService.getUserByLoginAndPassword(userData.login, userData.password)
            .then((requestedUser: any) => {
                requestedUser.password = undefined;
                const tokenData: TokenData = AuthService.createToken(requestedUser);
                response.send({
                    message: constants.SUCCESSFUL_LOGIN,
                    token: tokenData.token
                });
            })
            .catch((error: Error) => {
                next(new HttpException(401, constants.FAILED_LOGIN, `logginIn --- ${error}`));
            });
    };
}

export default AuthenticationController;
