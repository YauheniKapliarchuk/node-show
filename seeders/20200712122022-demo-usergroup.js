'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users_groups", [
      {
        id: "123_123_123_111111111sawdw",
        user_id: "bfe67727-52a4-4f20-b737-b661b6b7e453",
        group_id: "123_123_123",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345",
        user_id: "139d9393-e876-47d0-a997-390f22811ba7",
        group_id: "123_123_123",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345_6789",
        user_id: "79963f18-cc03-4c32-9909-f324899a9df4",
        group_id: "47d0-a997-390f22811ba7",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345_67890",
        user_id: "a42570de-287d-47f9-935f-88431d571fa2",
        group_id: "47d0-a997-390f22811ba7",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345_67891",
        user_id: "139d9393-e876-47d0-a997-390f22811ba7",
        group_id: "79963f18909-f324899a9df4",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345_67892",
        user_id: "f428998b-3e76-4911-a64e-2a6b3becda74",
        group_id: "79963f18909-f324899a9df4",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
      {
        id: "123_123_123_345_67893",
        user_id: "54e82c2b-3284-4c1d-8a27-03d3a511d81e",
        group_id: "79963f18909-f324899a9df4",
        createdAt: "2020-07-12T22:49:23.074Z",
        updatedAt: "2020-07-12T22:49:23.074Z"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users_groups', null, {});
  }
};
