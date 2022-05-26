import { UserInterface } from '../models';
import TokenData from '../models/auth/TokenData';
import DataStoredInToken from '../models/auth/DataStoredInToken';
// @ts-ignore
import * as jwt from 'jsonwebtoken';

const createToken = (user: UserInterface): TokenData => {
    const expiresIn = 60 * 2;
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
        _id: user.id
    };
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn })
    };
};

export default {
    createToken
};
