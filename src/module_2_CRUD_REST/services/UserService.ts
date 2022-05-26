// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { Group, User, UserInterface } from '../models';
import 'dotenv/config';
import { Op, UpdateOptions } from 'sequelize';
import logger from '../config/logger_config';

const groupOptions = {
    model: Group,
    as: 'groups',
    required: false,
    attributes: ['name', 'permissions']
};

export default class UserService {
    // -------------------------- GET All Users ----------------------------------------------
    getUsers = () => {
        logger.info('GET_USERS Method.');
        return User.findAll({
            include: [groupOptions]
        });
    };

    // -------------------------- GET UserIds ------------------------------------------------
    getUserIds = () => {
        return User.findAll({
            attributes: ['id']
        });
    };

    // -------------------------- GET User By ID ---------------------------------------------
    getUserById = (userId: string) => {
        return User.findByPk(userId, {
            include: [groupOptions]
        });
    };

    // -------------------------- GET User By Login and Password -----------------------------
    getUserByLoginAndPassword = (login: string, password: string) => {
        return User.findOne({
            where: {
                login,
                password,
                isDeleted: false
            },
            include: [groupOptions]
        });
    };

    // -------------------------- CREATE new User --------------------------------------------
    addNewUser = (user: UserInterface) => {
        user.id = uuidv4();
        user.isDeleted = false;

        return User.create(user);
    };

    // -------------------------- UPDATE User ------------------------------------------------
    updateUser = (user: any, userId: string) => {
        const params: UpdateOptions = {
            where: { id: userId },
            limit: 1
        };

        return User.update(user, params);
    };

    // -------------------------- DELETE User ------------------------------------------------
    deleteUser = (user: any, userId: string) => {
        user.isDeleted = true;

        const params: UpdateOptions = {
            where: { id: userId },
            limit: 1
        };

        return User.update(user, params);
    };

    // -------------------------- GET Auto Suggest Users -------------------------------------
    getAutoSuggestUsers = (loginSubstring: string, limitUsers: number) => {
        return User.findAll({
            order: [
                ['login', 'ASC']
            ],
            where: {
                'login': {
                    [Op.like]: `%${loginSubstring}%`
                }
            },

            limit: limitUsers
        }
        );
    };
}
