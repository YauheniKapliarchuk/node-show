import Controller from './Controller';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import GroupService from '../services/GroupService';
import HttpException from '../handlers/exceptions/HttpException';
import constants from '../config/constants';
import middleware from '../handlers/validations/middleware';
import schemas from '../handlers/validations/schemas';
import userIdsAssignToGroupMiddleware from '../handlers/validations/userIdsAssignToGroupMiddleware';
import authMiddleware from '../handlers/auth/authMiddleWare';

class GroupController implements Controller {
    path = '/group';
    router = express.Router();
    groupService: GroupService;

    constructor(groupService: GroupService) {
        this.groupService = groupService;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`${this.path}/list`, authMiddleware(), this.getAllGroups);
        this.router.post(`${this.path}/addUsers/:groupId`,
            authMiddleware,
            middleware(schemas.validateGroupIdSchema, 'params'),
            middleware(schemas.groupAddUserSchems, 'body'),
            userIdsAssignToGroupMiddleware(),
            this.addUsersToGroup);
        this.router.post(`${this.path}/add`, authMiddleware(), middleware(schemas.groupPostSchema, 'body'), this.createGroup);
        this.router.route(`${this.path}/:groupId`)
            .get(authMiddleware(), middleware(schemas.validateGroupIdSchema, 'params'), this.getGroupById)
            .delete(authMiddleware(), middleware(schemas.validateGroupIdSchema, 'params'), this.deleteGroupById)
            .put(authMiddleware(), middleware(schemas.validateGroupIdSchema, 'params'), middleware(schemas.groupUpdateSchema, 'body'), this.updateGroupById);
    }

    // -------------------------- GET All Groups ---------------------------------------------
    getAllGroups = async (request: Request, response: Response) => {
        const groups = await this.groupService.getGroups();
        response.send(groups);
    };

    // -------------------------- GET Group by Id --------------------------------------------
    getGroupById = async (request: Request, response: Response, next: NextFunction) => {
        await this.groupService.getGroupById(request.params.groupId)
            .then((requestedGroup: any) => {
                // eslint-disable-next-line no-unused-expressions
                requestedGroup ?
                    response.json(requestedGroup) :
                    response.status(404).send(constants.GET_GROUP_NOT_FOUND);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'getGroupById'));
            });
    };

    // -------------------------- CREATE Group -----------------------------------------------
    createGroup = async (request: Request, response: Response, next: NextFunction) => {
        const requestedGroup = request.body;
        await this.groupService.createGroup(requestedGroup)
            .then((newGroup: any) => {
                response.json(newGroup);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'createGroup'));
            });
    };

    // -------------------------- UPDATE Group -----------------------------------------------
    updateGroupById = async (request: Request, response: Response, next: NextFunction) => {
        this.getGroupById(request, response, next);

        const requestedUpdateGroup = request.body;
        const requestedUpdateGroupId = request.params.groupId;

        await this.groupService.updateGroupById(requestedUpdateGroupId, requestedUpdateGroup)
            .then(() => {
                response.json(requestedUpdateGroup);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'updateGroupById'));
            });
    };

    // -------------------------- DELETE Group -----------------------------------------------
    deleteGroupById = async (request: Request, response: Response, next: NextFunction) => {
        this.getGroupById(request, response, next);

        await this.groupService.deleteGroupById(request.params.groupId)
            .then((deletedGroup: any) => {
                response.json(deletedGroup);
            })
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'deleteGroupById'));
            });
    };

    // -------------------------- ADD Users to Group -----------------------------------------
    addUsersToGroup = async (request: Request, response: Response, next: NextFunction) => {
        const updatedGroups = await this.groupService.addUsersToGroup(request.params.groupId, request.body.userIds)
            .catch((error: Error) => {
                next(new HttpException(500, String(error), 'addUsersToGroup'));
            });

        response.json(updatedGroups);
    };
}

export default GroupController;
