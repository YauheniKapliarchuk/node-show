import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import UserService from '../../services/UserService';


const userIdsAssignToGroupMiddleware = () => {
    const userService = new UserService();
    return async (request: Request, response: Response, next: NextFunction) => {
        const validUsers = await userService.getUserIds();
        const validUserIds = validUsers.map((user: any) => {
            return String(user.id);
        });
        const requestedUserIds = request.body.userIds;

        if (!compareUserIds(requestedUserIds, validUserIds)) {
            response.status(400).send('Users NOT FOUND or Doest not exist.');
        } else {
            // eslint-disable-next-line callback-return
            next();
        }
    };
};

const compareUserIds = (requestedUserIds: [],  validUserIds: string[]) => {
    return requestedUserIds.every((requestedUserId) => validUserIds.indexOf(requestedUserId) > -1);
};

export default userIdsAssignToGroupMiddleware;
