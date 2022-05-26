import App from './app';
import UserController from './controllers/UserController';
import AuthenticationController from './controllers/AuthenticationController';
import GroupController from './controllers/GroupController';
import UserService from './services/UserService';
import GroupService from './services/GroupService';

const app = new App(
    [new AuthenticationController(),
        new UserController(new UserService()),
        new GroupController(new GroupService())
    ]
);

app.listen();
