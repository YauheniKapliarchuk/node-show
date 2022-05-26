"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _models = require("../models");

require("dotenv/config");

var _sequelize = require("sequelize");

var _logger_config = _interopRequireDefault(require("../config/logger_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// -------------------------- GET All Users ----------------------------------------------
var getUsers = function getUsers() {
  _logger_config["default"].info("GET_USERS Method.");

  return _models.User.findAll();
}; // -------------------------- GET User By ID ---------------------------------------------


var getUserById = function getUserById(userId) {
  return _models.User.findByPk(userId);
}; // -------------------------- CREATE new User --------------------------------------------


var addNewUser = function addNewUser(user) {
  user.id = (0, _uuid.v4)();
  user.isDeleted = false;
  return _models.User.create(user);
}; // -------------------------- UPDATE User ------------------------------------------------


var updateUser = function updateUser(user, userId) {
  var params = {
    where: {
      id: userId
    },
    limit: 1
  };
  return _models.User.update(user, params);
}; // -------------------------- DELETE User ------------------------------------------------


var deleteUser = function deleteUser(user, userId) {
  user.isDeleted = true;
  var params = {
    where: {
      id: userId
    },
    limit: 1
  };
  return _models.User.update(user, params);
}; // -------------------------- GET Auto Suggest Users -------------------------------------


var getAutoSuggestUsers = function getAutoSuggestUsers(loginSubstring, limitUsers) {
  return _models.User.findAll({
    order: [["login", "ASC"]],
    where: {
      "login": _defineProperty({}, _sequelize.Op.like, "%".concat(loginSubstring, "%"))
    },
    limit: limitUsers
  });
};

var _default = {
  getUsers: getUsers,
  getUserById: getUserById,
  addNewUser: addNewUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getAutoSuggestUsers: getAutoSuggestUsers
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1Qvc2VydmljZXMvVXNlclNlcnZpY2UudHMiXSwibmFtZXMiOlsiZ2V0VXNlcnMiLCJsb2dnZXIiLCJpbmZvIiwiVXNlciIsImZpbmRBbGwiLCJnZXRVc2VyQnlJZCIsInVzZXJJZCIsImZpbmRCeVBrIiwiYWRkTmV3VXNlciIsInVzZXIiLCJpZCIsImlzRGVsZXRlZCIsImNyZWF0ZSIsInVwZGF0ZVVzZXIiLCJwYXJhbXMiLCJ3aGVyZSIsImxpbWl0IiwidXBkYXRlIiwiZGVsZXRlVXNlciIsImdldEF1dG9TdWdnZXN0VXNlcnMiLCJsb2dpblN1YnN0cmluZyIsImxpbWl0VXNlcnMiLCJvcmRlciIsIk9wIiwibGlrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJDLDRCQUFPQyxJQUFQLENBQVksbUJBQVo7O0FBQ0EsU0FBT0MsYUFBS0MsT0FBTCxFQUFQO0FBQ0gsQ0FIRCxDLENBS0E7OztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBb0I7QUFFdEMsU0FBT0gsYUFBS0ksUUFBTCxDQUFjRCxNQUFkLENBQVA7QUFDRCxDQUhELEMsQ0FLQTs7O0FBQ0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUF5QjtBQUV4Q0EsRUFBQUEsSUFBSSxDQUFDQyxFQUFMLEdBQVUsZUFBVjtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLFNBQUwsR0FBaUIsS0FBakI7QUFFQSxTQUFPUixhQUFLUyxNQUFMLENBQVlILElBQVosQ0FBUDtBQUNILENBTkQsQyxDQVFBOzs7QUFDQSxJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSixJQUFELEVBQVlILE1BQVosRUFBK0I7QUFFOUMsTUFBTVEsTUFBcUIsR0FBRztBQUMxQkMsSUFBQUEsS0FBSyxFQUFFO0FBQUNMLE1BQUFBLEVBQUUsRUFBRUo7QUFBTCxLQURtQjtBQUUxQlUsSUFBQUEsS0FBSyxFQUFFO0FBRm1CLEdBQTlCO0FBS0EsU0FBT2IsYUFBS2MsTUFBTCxDQUFZUixJQUFaLEVBQWtCSyxNQUFsQixDQUFQO0FBQ0gsQ0FSRCxDLENBVUE7OztBQUNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNULElBQUQsRUFBWUgsTUFBWixFQUErQjtBQUU5Q0csRUFBQUEsSUFBSSxDQUFDRSxTQUFMLEdBQWlCLElBQWpCO0FBRUEsTUFBTUcsTUFBcUIsR0FBRztBQUMxQkMsSUFBQUEsS0FBSyxFQUFFO0FBQUNMLE1BQUFBLEVBQUUsRUFBRUo7QUFBTCxLQURtQjtBQUUxQlUsSUFBQUEsS0FBSyxFQUFFO0FBRm1CLEdBQTlCO0FBS0EsU0FBT2IsYUFBS2MsTUFBTCxDQUFZUixJQUFaLEVBQWtCSyxNQUFsQixDQUFQO0FBQ0gsQ0FWRCxDLENBWUE7OztBQUNBLElBQU1LLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsY0FBRCxFQUF5QkMsVUFBekIsRUFBZ0Q7QUFFeEUsU0FBT2xCLGFBQUtDLE9BQUwsQ0FBYTtBQUNaa0IsSUFBQUEsS0FBSyxFQUFDLENBQ0YsQ0FBQyxPQUFELEVBQVUsS0FBVixDQURFLENBRE07QUFJWlAsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsbUNBQ0tRLGNBQUdDLElBRFIsYUFDbUJKLGNBRG5CO0FBREcsS0FKSztBQVVaSixJQUFBQSxLQUFLLEVBQUVLO0FBVkssR0FBYixDQUFQO0FBYUgsQ0FmRDs7ZUFpQmU7QUFDWHJCLEVBQUFBLFFBQVEsRUFBUkEsUUFEVztBQUVYSyxFQUFBQSxXQUFXLEVBQVhBLFdBRlc7QUFHWEcsRUFBQUEsVUFBVSxFQUFWQSxVQUhXO0FBSVhLLEVBQUFBLFVBQVUsRUFBVkEsVUFKVztBQUtYSyxFQUFBQSxVQUFVLEVBQVZBLFVBTFc7QUFNWEMsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQU5XLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtVc2VyLCBVc2VySW50ZXJmYWNlfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQge1VwZGF0ZU9wdGlvbnMsIE9wfSBmcm9tIFwic2VxdWVsaXplXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi9jb25maWcvbG9nZ2VyX2NvbmZpZ1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRVQgQWxsIFVzZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKFwiR0VUX1VTRVJTIE1ldGhvZC5cIik7XG4gICAgcmV0dXJuIFVzZXIuZmluZEFsbCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VUIFVzZXIgQnkgSUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBnZXRVc2VyQnlJZCA9ICh1c2VySWQ6IHN0cmluZykgPT4ge1xuXG4gIHJldHVybiBVc2VyLmZpbmRCeVBrKHVzZXJJZCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDUkVBVEUgbmV3IFVzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGFkZE5ld1VzZXIgPSAodXNlcjogVXNlckludGVyZmFjZSkgPT4ge1xuXG4gICAgdXNlci5pZCA9IHV1aWR2NCgpO1xuICAgIHVzZXIuaXNEZWxldGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gVXNlci5jcmVhdGUodXNlcik7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgVXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHVwZGF0ZVVzZXIgPSAodXNlcjogYW55LCB1c2VySWQ6IHN0cmluZykgPT4ge1xuXG4gICAgY29uc3QgcGFyYW1zOiBVcGRhdGVPcHRpb25zID0ge1xuICAgICAgICB3aGVyZToge2lkOiB1c2VySWR9LFxuICAgICAgICBsaW1pdDogMVxuICAgIH07XG5cbiAgICByZXR1cm4gVXNlci51cGRhdGUodXNlciwgcGFyYW1zKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIERFTEVURSBVc2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgZGVsZXRlVXNlciA9ICh1c2VyOiBhbnksIHVzZXJJZDogc3RyaW5nKSA9PiB7XG5cbiAgICB1c2VyLmlzRGVsZXRlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwYXJhbXM6IFVwZGF0ZU9wdGlvbnMgPSB7XG4gICAgICAgIHdoZXJlOiB7aWQ6IHVzZXJJZH0sXG4gICAgICAgIGxpbWl0OiAxXG4gICAgfTtcblxuICAgIHJldHVybiBVc2VyLnVwZGF0ZSh1c2VyLCBwYXJhbXMpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VUIEF1dG8gU3VnZ2VzdCBVc2VycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBnZXRBdXRvU3VnZ2VzdFVzZXJzID0gKGxvZ2luU3Vic3RyaW5nOiBzdHJpbmcsIGxpbWl0VXNlcnM6IG51bWJlcikgPT4ge1xuXG4gICAgcmV0dXJuIFVzZXIuZmluZEFsbCh7XG4gICAgICAgICAgICBvcmRlcjpbXG4gICAgICAgICAgICAgICAgW1wibG9naW5cIiwgXCJBU0NcIl1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIFwibG9naW5cIjoge1xuICAgICAgICAgICAgICAgICAgICBbT3AubGlrZV06IGAlJHtsb2dpblN1YnN0cmluZ30lYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsaW1pdDogbGltaXRVc2Vyc1xuICAgICAgICB9XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRVc2VycyxcbiAgICBnZXRVc2VyQnlJZCxcbiAgICBhZGROZXdVc2VyLFxuICAgIHVwZGF0ZVVzZXIsXG4gICAgZGVsZXRlVXNlcixcbiAgICBnZXRBdXRvU3VnZ2VzdFVzZXJzLFxufTsiXX0=