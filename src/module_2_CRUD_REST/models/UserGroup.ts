import { dbConfig } from '../config/db_config';
import { DataTypes } from 'sequelize';

const UserGroup = dbConfig.define('users_groups', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default UserGroup;
