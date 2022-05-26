import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

const errorResponse = (schemaErrors: []) => {
    const errors = schemaErrors.map((error: any) => {
        const { path, message } = error;
        return { path, message };
    });

    return {
        status: 'failed',
        errors
    };
};

const middleware = (schema: any, property: any) => {
    return (request: Request, response: Response, next: NextFunction) => {
        // @ts-ignore
        const { error } = schema.validate(request[property], {
            abortEarly: false,
            allowUnknown: false
        });

        if (error) {
            response.status(400).json(errorResponse(error.details));
        } else {
            // eslint-disable-next-line callback-return
            next();
        }
    };
};

export default middleware;
