import { DataTypes } from 'sequelize';
import { dbConfig } from '../config/db_config';

const Group = dbConfig.define('group', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
});

export default Group;
