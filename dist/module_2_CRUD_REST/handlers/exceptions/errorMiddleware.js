"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = _interopRequireDefault(require("../../config/constants"));

var _logger_config = _interopRequireDefault(require("../../config/logger_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var errorMiddleware = function errorMiddleware(error, request, response, next) {
  var status = error.status || 500;
  var message = error.message || _constants["default"].SOMETHINF_WENT_WRONG;
  var errorMethod = error.method || "Is not method.";
  var defaultTab = "                                ";
  var defaultLoggerString = new Date().toDateString() + " ----------  ".concat(status, "  ").concat(errorMethod, " REQUEST: ").concat(request.method, "  ").concat(request.url, "\n ").concat(defaultTab, "  ").concat(message, "\n ").concat(defaultTab);

  _logger_config["default"].error(defaultLoggerString);

  response.status(status).send(message);
};

var _default = errorMiddleware;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvaGFuZGxlcnMvZXhjZXB0aW9ucy9lcnJvck1pZGRsZXdhcmUudHMiXSwibmFtZXMiOlsiZXJyb3JNaWRkbGV3YXJlIiwiZXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJuZXh0Iiwic3RhdHVzIiwibWVzc2FnZSIsImNvbnN0YW50cyIsIlNPTUVUSElORl9XRU5UX1dST05HIiwiZXJyb3JNZXRob2QiLCJtZXRob2QiLCJkZWZhdWx0VGFiIiwiZGVmYXVsdExvZ2dlclN0cmluZyIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJ1cmwiLCJsb2dnZXIiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBdUJDLE9BQXZCLEVBQXlDQyxRQUF6QyxFQUE2REMsSUFBN0QsRUFBb0Y7QUFDeEcsTUFBTUMsTUFBTSxHQUFHSixLQUFLLENBQUNJLE1BQU4sSUFBZ0IsR0FBL0I7QUFDQSxNQUFNQyxPQUFPLEdBQUdMLEtBQUssQ0FBQ0ssT0FBTixJQUFpQkMsc0JBQVVDLG9CQUEzQztBQUNBLE1BQU1DLFdBQVcsR0FBR1IsS0FBSyxDQUFDUyxNQUFOLElBQWdCLGdCQUFwQztBQUVBLE1BQU1DLFVBQVUsR0FBRyxrQ0FBbkI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBSSxJQUFJQyxJQUFKLEdBQVdDLFlBQVgsRUFBRCwwQkFBOENULE1BQTlDLGVBQXlESSxXQUF6RCx1QkFBaUZQLE9BQU8sQ0FBQ1EsTUFBekYsZUFBb0dSLE9BQU8sQ0FBQ2EsR0FBNUcsZ0JBQXFISixVQUFySCxlQUFvSUwsT0FBcEksZ0JBQWlKSyxVQUFqSixDQUE1Qjs7QUFFQUssNEJBQU9mLEtBQVAsQ0FBYVcsbUJBQWI7O0FBRUFULEVBQUFBLFFBQVEsQ0FDSEUsTUFETCxDQUNZQSxNQURaLEVBRUtZLElBRkwsQ0FFVVgsT0FGVjtBQUdILENBYkQ7O2VBZWVOLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHR0cEV4Y2VwdGlvbiBmcm9tIFwiLi9IdHRwRXhjZXB0aW9uXCI7XG5pbXBvcnQge05leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi8uLi9jb25maWcvY29uc3RhbnRzXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi8uLi9jb25maWcvbG9nZ2VyX2NvbmZpZ1wiO1xuXG5jb25zdCBlcnJvck1pZGRsZXdhcmUgPSAoZXJyb3I6IEh0dHBFeGNlcHRpb24sIHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gZXJyb3Iuc3RhdHVzIHx8IDUwMDtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCBjb25zdGFudHMuU09NRVRISU5GX1dFTlRfV1JPTkc7XG4gICAgY29uc3QgZXJyb3JNZXRob2QgPSBlcnJvci5tZXRob2QgfHwgXCJJcyBub3QgbWV0aG9kLlwiO1xuXG4gICAgY29uc3QgZGVmYXVsdFRhYiA9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjtcbiAgICBjb25zdCBkZWZhdWx0TG9nZ2VyU3RyaW5nID0gKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpICsgYCAtLS0tLS0tLS0tICAke3N0YXR1c30gICR7ZXJyb3JNZXRob2R9IFJFUVVFU1Q6ICR7cmVxdWVzdC5tZXRob2R9ICAke3JlcXVlc3QudXJsfVxcbiAke2RlZmF1bHRUYWJ9ICAke21lc3NhZ2V9XFxuICR7ZGVmYXVsdFRhYn1gO1xuXG4gICAgbG9nZ2VyLmVycm9yKGRlZmF1bHRMb2dnZXJTdHJpbmcpO1xuXG4gICAgcmVzcG9uc2VcbiAgICAgICAgLnN0YXR1cyhzdGF0dXMpXG4gICAgICAgIC5zZW5kKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JNaWRkbGV3YXJlOyJdfQ==