import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

import { passportConfig } from '../../config/passport_config';
import constants from '../../config/constants';
import { UserInterface } from '../../models';

const authMiddleware = () => {
    return (request: Request, response: Response, next: NextFunction) => {
        passportConfig.authenticate('bearer', { session: false }, (error: Error, object: UserInterface) => {
            if (error) {
                return next(new HttpException(403, constants.JWT_EXPIRED, 'authenticate'));
            }
            if (!object) {
                return next(new HttpException(401, constants.JWT_UNAUTHORIZED, 'authenticate'));
            }
            next();
        })(request, response, next);
    };
};

export default authMiddleware;
