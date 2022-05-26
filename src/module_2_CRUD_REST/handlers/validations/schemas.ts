import Joi from '@hapi/joi';

const INVALID_PASSWORD = 'Password must contain letters and numbers';

const PASSWORD_REGEXP = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';

const schemas = {

    // USER
    userPostSchema: Joi.object().keys({
        login: Joi.string().required(),
        password: Joi.string().min(8).pattern(new RegExp(PASSWORD_REGEXP)).message(INVALID_PASSWORD).required(),
        age: Joi.number().integer().min(4).max(130).required()
    }),
    userUpdateSchema: Joi.object().keys({
        login: Joi.string().required(),
        password: Joi.string().min(8).pattern(new RegExp(PASSWORD_REGEXP)).message(INVALID_PASSWORD).required(),
        age: Joi.number().integer().min(4).max(130).required()
    }),
    validateUserIdSchema: Joi.object().keys({
        userId: Joi.string().min(15).max(200).required()
    }),
    validateSortSchema: Joi.object().keys({
        loginSubstring: Joi.string().required(),
        limit: Joi.number().required()
    }),
    validateLogInData: Joi.object().keys({
        login: Joi.string().required(),
        password: Joi.string().required()
    }),

    // GROUP
    validateGroupIdSchema: Joi.object().keys({
        groupId: Joi.string().min(10).max(200).required()
    }),
    groupPostSchema: Joi.object().keys({
        name: Joi.string().min(5).required(),
        permissions: Joi.array().required()
    }),
    groupUpdateSchema: Joi.object().keys({
        name: Joi.string().min(5).required(),
        permissions: Joi.array().required()
    }),
    groupAddUserSchems: Joi.object().keys({
        userIds: Joi.array().required()
    })
};

export default schemas;
