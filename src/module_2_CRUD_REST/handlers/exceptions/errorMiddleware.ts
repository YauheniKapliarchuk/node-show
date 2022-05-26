import HttpException from './HttpException';
import { NextFunction, Request, Response } from 'express';
import constants from '../../config/constants';
import logger from '../../config/logger_config';

const errorMiddleware = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.status || 500;
    const message = error.message || constants.SOMETHINF_WENT_WRONG;
    const errorMethod = error.method || 'Is not method.';

    const defaultTab = '                                ';
    const defaultLoggerString = `${new Date().toDateString()  } ----------  ${status}  ${errorMethod} REQUEST: ${request.method}  ${request.url}\n ${defaultTab}  ${message}\n ${defaultTab}`;

    logger.error(defaultLoggerString);

    response
        .status(status)
        .send(message);

    next();
};

export default errorMiddleware;
