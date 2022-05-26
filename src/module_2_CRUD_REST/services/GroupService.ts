// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { Group, User } from '../models';
import 'dotenv/config';
import logger from '../config/logger_config';
import { dbConfig } from '../config/db_config';
import HttpException from '../handlers/exceptions/HttpException';
import constants from '../config/constants';
import UserGroup from '../models/UserGroup';

const userOptions = {
    model: User,
    as: 'users',
    required: false,
    attributes: ['id', 'login', 'password', 'age']
};

export default class GroupService {
    // -------------------------- GET All Groups ----------------------------------------------
    getGroups = () => {
        logger.info('GET_GROUPS Method.');
        return Group.findAll({
            include: [userOptions]
        });
    };

    // -------------------------- GET Group by ID ---------------------------------------------
    getGroupById = (groupId: string) => {
        return Group.findByPk(groupId, {
            include: [userOptions]
        });
    };

    // -------------------------- CREATE Group ------------------------------------------------
    createGroup = (group: any) => {
        group.id = uuidv4();

        return Group.create(group);
    };

    // -------------------------- UPDATE Group ------------------------------------------------
    updateGroupById = (groupId: string, group: any) => {
        return Group.update(group, {
            where: {
                'id': groupId
            }
        });
    };

    // -------------------------- DELETE Group ------------------------------------------------
    deleteGroupById = (groupId: string) => {
        return dbConfig.transaction(transactoion => {
            return Group.destroy({
                where: {
                    'id': groupId
                }
            }).then(() => {
                return UserGroup.destroy({
                    where: {
                        'group_id': groupId
                    },
                    transaction: transactoion
                });
            });
        });
    };

    // -------------------------- ADD Users to Group ------------------------------------------
    addUsersToGroup = (groupId: string, userIds: []) => {
        return dbConfig.transaction(transactoion => {
            return Group.findOne({
                where: {
                    'id': groupId
                },
                transaction: transactoion
            }).then((group: any) => {
                if (!group) {
                    throw new HttpException(400, constants.GET_GROUP_NOT_FOUND, 'GroupService: addUsersToGroup: group section.');
                }

                const userGroupRecords = userIds.map((userId: string) => {
                    return {
                        'id': uuidv4(),
                        'user_id': userId,
                        'group_id': groupId
                    };
                });

                console.log(userGroupRecords);

                return UserGroup.bulkCreate(userGroupRecords, {
                    transaction: transactoion
                });
            });
        });
    };
}
