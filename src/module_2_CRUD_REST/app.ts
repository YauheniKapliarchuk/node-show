import express, { Application } from 'express';
import Controller from './controllers/Controller';
import 'dotenv/config';
import { dbConfig } from './config/db_config';
import loggerMiddleware from './handlers/logging/loggerMiddleware';
import errorMiddleware from './handlers/exceptions/errorMiddleware';
import logger from './config/logger_config';
// @ts-ignore
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as process from 'process';
import { passportConfig } from './config/passport_config';

class App {
    app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.connectionToDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    listen() {
        this.app.listen(process.env.APP_PORT, () => {
            logger.info(`App listening on the port ${process.env.APP_PORT}`);
        });
    }

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(loggerMiddleware())
            .on('error', (error: Application) => {
                logger.error(error);
            });
        this.app.use(cookieParser());
        this.app.use(passportConfig.initialize());
        this.app.use(cors());
    }

    initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router)
                .on('error', (error: Application) => {
                    logger.error(error);
                });
        });
    }

    initializeErrorHandling() {
        this.app.use(errorMiddleware)
            .on('error', (error: Application) => {
                logger.error(error);
            });
    }

    connectionToDatabase() {
        dbConfig
            .authenticate()
            .then(() => {
                logger.info('Connection has been established successfully.');
            })
            .catch((error: void) => {
                logger.error('Unable to connect to the database: ', error);
            });
    }
}
//
// process.on('uncaughtException', (err) => {
//     logger.error('There was an uncaught error', err);
//     process.exit(1);
// });
//
// process.on('unhandledRejection', (reason, promise) => {
//     logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
//     process.exit(1);
// });

export default App;
