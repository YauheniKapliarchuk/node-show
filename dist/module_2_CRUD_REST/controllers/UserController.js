"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var express = _interopRequireWildcard(require("express"));

var _UserService = _interopRequireDefault(require("../services/UserService"));

var _middleware = _interopRequireDefault(require("../handlers/validations/middleware"));

var _schemas = _interopRequireDefault(require("../handlers/validations/schemas"));

var _constants = _interopRequireDefault(require("../config/constants"));

var _HttpException = _interopRequireDefault(require("../handlers/exceptions/HttpException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    var _this = this;

    _classCallCheck(this, UserController);

    _defineProperty(this, "path", "/user");

    _defineProperty(this, "router", express.Router());

    _defineProperty(this, "getAllUsers", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
        var users;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _UserService["default"].getUsers();

              case 2:
                users = _context.sent;
                response.send(users);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(this, "createNewUser", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response, next) {
        var requestedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestedUser = request.body;
                _context2.next = 3;
                return _UserService["default"].addNewUser(requestedUser).then(function (newUser) {
                  response.json(newUser);
                })["catch"](function (error) {
                  next(new _HttpException["default"](500, String(error), "createNewUser"));
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getUserById", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response, next) {
        var user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _UserService["default"].getUserById(String(request.params.userId))["catch"](function (error) {
                  next(new _HttpException["default"](500, String(error), "getUserById"));
                });

              case 2:
                user = _context3.sent;

                _this.validateUserId(user, response);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "updateUserById", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response, next) {
        var requestedUser, userId;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                requestedUser = request.body;
                userId = request.params.userId;
                _context4.next = 4;
                return _UserService["default"].updateUser(requestedUser, userId).then(function (updatedUser) {
                  response.json(requestedUser);
                })["catch"](function (error) {
                  next(new _HttpException["default"](500, String(error), "updateUserById"));
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(this, "deleteUser", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response, next) {
        var deleteUser;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                deleteUser = _this.getUserById(request, response, next);
                _context5.next = 3;
                return _UserService["default"].deleteUser(deleteUser, request.params.userId).then(function (deletedUser) {
                  response.json(deletedUser);
                })["catch"](function (error) {
                  next(new _HttpException["default"](500, String(error), "deleteUser"));
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x12, _x13, _x14) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(this, "getAutoSuggest", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(request, response) {
        var users;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _UserService["default"].getAutoSuggestUsers(String(request.query.loginSubstring), Number(request.query.limit));

              case 2:
                users = _context6.sent;
                return _context6.abrupt("return", response.send(users));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x15, _x16) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(this, "validateUserId", function (user, response) {
      if (user && !user.isDeleted) {
        response.json(user);
      } else {
        response.status(404).send(_constants["default"].GET_USER_NOT_FOUND);
      }
    });

    this.initializeRoutes();
  }

  _createClass(UserController, [{
    key: "initializeRoutes",
    value: function initializeRoutes() {
      this.router.get("".concat(this.path, "/list"), this.getAllUsers);
      this.router.get("".concat(this.path, "/auto"), (0, _middleware["default"])(_schemas["default"].validateSortSchema, "query"), this.getAutoSuggest);
      this.router.post(this.path, (0, _middleware["default"])(_schemas["default"].userPostSchema, "body"), this.createNewUser);
      this.router.route("".concat(this.path, "/:userId")).get((0, _middleware["default"])(_schemas["default"].validateUserIdSchema, "params"), this.getUserById)["delete"]((0, _middleware["default"])(_schemas["default"].validateUserIdSchema, "params"), this.deleteUser).put((0, _middleware["default"])(_schemas["default"].validateUserIdSchema, "params"), (0, _middleware["default"])(_schemas["default"].userUpdateSchema, "body"), this.updateUserById);
    } // -------------------------- GET All Users ----------------------------------------------

  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiVXNlckNvbnRyb2xsZXIiLCJleHByZXNzIiwiUm91dGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiVXNlclNlcnZpY2UiLCJnZXRVc2VycyIsInVzZXJzIiwic2VuZCIsIm5leHQiLCJyZXF1ZXN0ZWRVc2VyIiwiYm9keSIsImFkZE5ld1VzZXIiLCJ0aGVuIiwibmV3VXNlciIsImpzb24iLCJlcnJvciIsIkh0dHBFeGNlcHRpb24iLCJTdHJpbmciLCJnZXRVc2VyQnlJZCIsInBhcmFtcyIsInVzZXJJZCIsInVzZXIiLCJ2YWxpZGF0ZVVzZXJJZCIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVkVXNlciIsImRlbGV0ZVVzZXIiLCJkZWxldGVkVXNlciIsImdldEF1dG9TdWdnZXN0VXNlcnMiLCJxdWVyeSIsImxvZ2luU3Vic3RyaW5nIiwiTnVtYmVyIiwibGltaXQiLCJpc0RlbGV0ZWQiLCJzdGF0dXMiLCJjb25zdGFudHMiLCJHRVRfVVNFUl9OT1RfRk9VTkQiLCJpbml0aWFsaXplUm91dGVzIiwicm91dGVyIiwiZ2V0IiwicGF0aCIsImdldEFsbFVzZXJzIiwic2NoZW1hcyIsInZhbGlkYXRlU29ydFNjaGVtYSIsImdldEF1dG9TdWdnZXN0IiwicG9zdCIsInVzZXJQb3N0U2NoZW1hIiwiY3JlYXRlTmV3VXNlciIsInJvdXRlIiwidmFsaWRhdGVVc2VySWRTY2hlbWEiLCJwdXQiLCJ1c2VyVXBkYXRlU2NoZW1hIiwidXBkYXRlVXNlckJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxjO0FBSUYsNEJBQWM7QUFBQTs7QUFBQTs7QUFBQSxrQ0FIQSxPQUdBOztBQUFBLG9DQUZFQyxPQUFPLENBQUNDLE1BQVIsRUFFRjs7QUFB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aEIsRUFBcUIxQixJQUFyQixDQUEwQjJCLHNCQUFVQyxrQkFBcEM7QUFDSDtBQUNKLEtBakZhOztBQUNWLFNBQUtDLGdCQUFMO0FBQ0g7Ozs7dUNBRTBCO0FBQ3ZCLFdBQUtDLE1BQUwsQ0FBWUMsR0FBWixXQUFtQixLQUFLQyxJQUF4QixZQUFxQyxLQUFLQyxXQUExQztBQUNBLFdBQUtILE1BQUwsQ0FBWUMsR0FBWixXQUFtQixLQUFLQyxJQUF4QixZQUFxQyw0QkFBV0Usb0JBQVFDLGtCQUFuQixFQUF1QyxPQUF2QyxDQUFyQyxFQUFzRixLQUFLQyxjQUEzRjtBQUNBLFdBQUtOLE1BQUwsQ0FBWU8sSUFBWixDQUFpQixLQUFLTCxJQUF0QixFQUE0Qiw0QkFBV0Usb0JBQVFJLGNBQW5CLEVBQW1DLE1BQW5DLENBQTVCLEVBQXdFLEtBQUtDLGFBQTdFO0FBQ0EsV0FBS1QsTUFBTCxDQUFZVSxLQUFaLFdBQXFCLEtBQUtSLElBQTFCLGVBQ0tELEdBREwsQ0FDUyw0QkFBV0csb0JBQVFPLG9CQUFuQixFQUF5QyxRQUF6QyxDQURULEVBQzZELEtBQUs5QixXQURsRSxZQUVZLDRCQUFXdUIsb0JBQVFPLG9CQUFuQixFQUF5QyxRQUF6QyxDQUZaLEVBRWdFLEtBQUt2QixVQUZyRSxFQUdLd0IsR0FITCxDQUdTLDRCQUFXUixvQkFBUU8sb0JBQW5CLEVBQXlDLFFBQXpDLENBSFQsRUFHNkQsNEJBQVdQLG9CQUFRUyxnQkFBbkIsRUFBcUMsTUFBckMsQ0FIN0QsRUFHMkcsS0FBS0MsY0FIaEg7QUFJSCxLLENBRUQ7Ozs7Ozs7ZUFzRVdwRCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZVwiO1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSBcIi4uL2hhbmRsZXJzL3ZhbGlkYXRpb25zL21pZGRsZXdhcmVcIjtcbmltcG9ydCBzY2hlbWFzIGZyb20gXCIuLi9oYW5kbGVycy92YWxpZGF0aW9ucy9zY2hlbWFzXCI7XG5pbXBvcnQge1VzZXJJbnRlcmZhY2V9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbmZpZy9jb25zdGFudHNcIjtcbmltcG9ydCBIdHRwRXhjZXB0aW9uIGZyb20gXCIuLi9oYW5kbGVycy9leGNlcHRpb25zL0h0dHBFeGNlcHRpb25cIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL2NvbmZpZy9sb2dnZXJfY29uZmlnXCI7XG5cbmNsYXNzIFVzZXJDb250cm9sbGVyIGltcGxlbWVudHMgQ29udHJvbGxlciB7XG4gICAgcHVibGljIHBhdGggPSBcIi91c2VyXCI7XG4gICAgcHVibGljIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUm91dGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUm91dGVzKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5nZXQoYCR7dGhpcy5wYXRofS9saXN0YCwgdGhpcy5nZXRBbGxVc2Vycyk7XG4gICAgICAgIHRoaXMucm91dGVyLmdldChgJHt0aGlzLnBhdGh9L2F1dG9gLCBtaWRkbGV3YXJlKHNjaGVtYXMudmFsaWRhdGVTb3J0U2NoZW1hLCBcInF1ZXJ5XCIpLCB0aGlzLmdldEF1dG9TdWdnZXN0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIucG9zdCh0aGlzLnBhdGgsIG1pZGRsZXdhcmUoc2NoZW1hcy51c2VyUG9zdFNjaGVtYSwgXCJib2R5XCIpLCB0aGlzLmNyZWF0ZU5ld1VzZXIpO1xuICAgICAgICB0aGlzLnJvdXRlci5yb3V0ZShgJHt0aGlzLnBhdGh9Lzp1c2VySWRgKVxuICAgICAgICAgICAgLmdldChtaWRkbGV3YXJlKHNjaGVtYXMudmFsaWRhdGVVc2VySWRTY2hlbWEsIFwicGFyYW1zXCIpLCB0aGlzLmdldFVzZXJCeUlkKVxuICAgICAgICAgICAgLmRlbGV0ZShtaWRkbGV3YXJlKHNjaGVtYXMudmFsaWRhdGVVc2VySWRTY2hlbWEsIFwicGFyYW1zXCIpLCB0aGlzLmRlbGV0ZVVzZXIpXG4gICAgICAgICAgICAucHV0KG1pZGRsZXdhcmUoc2NoZW1hcy52YWxpZGF0ZVVzZXJJZFNjaGVtYSwgXCJwYXJhbXNcIiksIG1pZGRsZXdhcmUoc2NoZW1hcy51c2VyVXBkYXRlU2NoZW1hLCBcImJvZHlcIiksIHRoaXMudXBkYXRlVXNlckJ5SWQpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdFVCBBbGwgVXNlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgZ2V0QWxsVXNlcnMgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlclNlcnZpY2UuZ2V0VXNlcnMoKTtcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCh1c2Vycyk7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIENSRUFURSBuZXcgVXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaXZhdGUgY3JlYXRlTmV3VXNlciA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRVc2VyOiBVc2VySW50ZXJmYWNlID0gcmVxdWVzdC5ib2R5O1xuICAgICAgICBhd2FpdCBVc2VyU2VydmljZS5hZGROZXdVc2VyKHJlcXVlc3RlZFVzZXIpXG4gICAgICAgICAgICAudGhlbiggKG5ld1VzZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24obmV3VXNlcik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV4dChuZXcgSHR0cEV4Y2VwdGlvbig1MDAsIFN0cmluZyhlcnJvciksIFwiY3JlYXRlTmV3VXNlclwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VUIFVzZXIgQnkgSUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBnZXRVc2VyQnlJZCA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlclNlcnZpY2UuZ2V0VXNlckJ5SWQoU3RyaW5nKHJlcXVlc3QucGFyYW1zLnVzZXJJZCkpXG4gICAgICAgICAgICAuY2F0Y2goIChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0KG5ldyBIdHRwRXhjZXB0aW9uKDUwMCwgU3RyaW5nKGVycm9yKSwgXCJnZXRVc2VyQnlJZFwiKSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVVc2VySWQodXNlciwgcmVzcG9uc2UpO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVUERBVEUgVXNlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJCeUlkID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZFVzZXIgPSByZXF1ZXN0LmJvZHk7XG4gICAgICAgIGNvbnN0IHVzZXJJZDogc3RyaW5nID0gcmVxdWVzdC5wYXJhbXMudXNlcklkO1xuXG4gICAgICAgIGF3YWl0IFVzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIocmVxdWVzdGVkVXNlciwgdXNlcklkKVxuICAgICAgICAgICAgLnRoZW4oICh1cGRhdGVkVXNlcjogb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbihyZXF1ZXN0ZWRVc2VyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0KG5ldyBIdHRwRXhjZXB0aW9uKDUwMCwgU3RyaW5nKGVycm9yKSwgXCJ1cGRhdGVVc2VyQnlJZFwiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gREVMRVRFIFVzZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpdmF0ZSBkZWxldGVVc2VyID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSB0aGlzLmdldFVzZXJCeUlkKHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KTtcblxuICAgICAgICBhd2FpdCBVc2VyU2VydmljZS5kZWxldGVVc2VyKGRlbGV0ZVVzZXIsIHJlcXVlc3QucGFyYW1zLnVzZXJJZClcbiAgICAgICAgICAgIC50aGVuKCAoZGVsZXRlZFVzZXI6IG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKGRlbGV0ZWRVc2VyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0KG5ldyBIdHRwRXhjZXB0aW9uKDUwMCwgU3RyaW5nKGVycm9yKSwgXCJkZWxldGVVc2VyXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRVQgQXV0byBTdWdnZXN0IFVzZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIGdldEF1dG9TdWdnZXN0ID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFVzZXJTZXJ2aWNlLmdldEF1dG9TdWdnZXN0VXNlcnMoU3RyaW5nKHJlcXVlc3QucXVlcnkubG9naW5TdWJzdHJpbmcpLCBOdW1iZXIocmVxdWVzdC5xdWVyeS5saW1pdCkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc2VuZCh1c2Vycyk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgdmFsaWRhdGVVc2VySWQgPSAodXNlcjogYW55LCByZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHVzZXIgJiYgIXVzZXIuaXNEZWxldGVkKSB7XG4gICAgICAgICAgICByZXNwb25zZS5qc29uKHVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwNCkuc2VuZChjb25zdGFudHMuR0VUX1VTRVJfTk9UX0ZPVU5EKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRyb2xsZXI7Il19