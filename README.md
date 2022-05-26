Mentoring NodeJs program 


**_Module 2 CRUD - REST_**

For start application:
`npm run app`

Main file -  `app.ts`
Eslint start `eslint src`


**_Module 3 Architecture and DataBase_**
For start application:

`npm run data-db` - run for creating default users

`npm run app` - start application

Examples of reqests for testing this module:

`localhost:3000/user/` - get All Users - `GET`

`localhost:3000/user/:userId` - get User by ID - `GET`

`localhost:3000/user/:userId` - delete User by ID  - `DELETE`

`localhost:3000/user/:userId` - update User - `PUT`, also body: 

{

     "login": "NewLOgin_TEST___13",
     "password": "NewUser_12",
     "age": "55"
     
 }

`localhost:3000/user/` - Create new User - `POST` - body: 

{

     "login": "Create new User 13",
     "password": "NewUser_13",
     "age": "17"
     
 }

`localhost:3000/user/auto?loginSubstring=abc&limit=7` - custom task - `GET`