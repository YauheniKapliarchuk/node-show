import User from './User';
import Group from './Group';
import UserGroup from './UserGroup';
import { UserInterface } from './UserInterface';
import { Permission } from './Permission';
import { dbConfig } from '../config/db_config';

User.belongsToMany(Group, {
    through: {
        model: UserGroup,
        unique: false
    },
    as: 'groups',
    foreignKey: 'user_id',
    constraints: false
});

Group.belongsToMany(User, {
    through: {
        model: UserGroup,
        unique: false
    },
    as: 'users',
    foreignKey: 'group_id',
    constraints: false,
    onDelete: 'cascade'
});

dbConfig.sync()
    .then(() => {
        console.log('Relations was synchronized.');
    });

export {
    User,
    UserInterface,
    Group,
    Permission,
    UserGroup
};
