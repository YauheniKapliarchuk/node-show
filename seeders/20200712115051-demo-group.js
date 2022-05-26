'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("groups", [
      {
        id: "123_123_123",
        name: "MODERATOR",
        permissions: ["DELETE", "SHARE", "READ", "UPLOAD_FILES", "WRITE"],
        createdAt: "2020-07-12T21:49:23.074Z",
        updatedAt: "2020-07-12T21:49:23.074Z"
      },
      {
        id: "47d0-a997-390f22811ba7",
        name: "USER",
        permissions: ["SHARE", "READ", "WRITE"],
        createdAt: "2020-07-12T21:49:23.074Z",
        updatedAt: "2020-07-12T21:49:23.074Z"
      },
      {
        id: "79963f18909-f324899a9df4",
        name: "GUEST",
        permissions: ["SHARE", "READ"],
        createdAt: "2020-07-12T21:49:23.074Z",
        updatedAt: "2020-07-12T21:49:23.074Z"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('groups', null, {});
  }
};
