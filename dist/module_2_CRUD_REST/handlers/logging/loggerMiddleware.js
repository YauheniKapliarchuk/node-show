"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger_config = _interopRequireDefault(require("../../config/logger_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loggerMiddleware = function loggerMiddleware() {
  return function (request, response, next) {
    var method = request.method;
    var url = request.url;
    var userId = String(request.params.userId);
    var defaultLoggerString = new Date().toDateString() + " ---------- " + "REQUEST: " + method + " " + url + "\n";
    var defaultTab = "                                ";

    switch (method) {
      case "GET":
        _logger_config["default"].info(defaultLoggerString + defaultTab);

        break;

      case "PUT":
        _logger_config["default"].info(defaultLoggerString + defaultTab + " body: " + JSON.stringify(request.body) + "\n" + defaultTab);

        break;

      case "POST":
        _logger_config["default"].info(defaultLoggerString + defaultTab + " body: " + JSON.stringify(request.body) + "\n" + defaultTab);

        break;

      case "DELETE":
        _logger_config["default"].info(defaultLoggerString + defaultTab);

        break;
    }

    next();
  };
};

var _default = loggerMiddleware;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvaGFuZGxlcnMvbG9nZ2luZy9sb2dnZXJNaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJuZXh0IiwibWV0aG9kIiwidXJsIiwidXNlcklkIiwiU3RyaW5nIiwicGFyYW1zIiwiZGVmYXVsdExvZ2dlclN0cmluZyIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJkZWZhdWx0VGFiIiwibG9nZ2VyIiwiaW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsU0FBTyxVQUFDQyxPQUFELEVBQW1CQyxRQUFuQixFQUF1Q0MsSUFBdkMsRUFBOEQ7QUFFakUsUUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNHLE1BQXZCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHSixPQUFPLENBQUNJLEdBQXBCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNOLE9BQU8sQ0FBQ08sTUFBUixDQUFlRixNQUFoQixDQUFyQjtBQUVBLFFBQU1HLG1CQUFtQixHQUFJLElBQUlDLElBQUosR0FBV0MsWUFBWCxFQUFELEdBQThCLGNBQTlCLEdBQStDLFdBQS9DLEdBQTZEUCxNQUE3RCxHQUFzRSxHQUF0RSxHQUE0RUMsR0FBNUUsR0FBa0YsSUFBOUc7QUFDQSxRQUFNTyxVQUFVLEdBQUcsa0NBQW5COztBQUVBLFlBQVFSLE1BQVI7QUFDSSxXQUFLLEtBQUw7QUFDSVMsa0NBQU9DLElBQVAsQ0FBWUwsbUJBQW1CLEdBQUdHLFVBQWxDOztBQUNBOztBQUNKLFdBQUssS0FBTDtBQUNJQyxrQ0FBT0MsSUFBUCxDQUFZTCxtQkFBbUIsR0FDMUJHLFVBRE8sR0FDTSxTQUROLEdBQ2tCRyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsT0FBTyxDQUFDZ0IsSUFBdkIsQ0FEbEIsR0FDaUQsSUFEakQsR0FDdURMLFVBRG5FOztBQUVBOztBQUNKLFdBQUssTUFBTDtBQUNJQyxrQ0FBT0MsSUFBUCxDQUFZTCxtQkFBbUIsR0FDM0JHLFVBRFEsR0FDSyxTQURMLEdBQ2lCRyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsT0FBTyxDQUFDZ0IsSUFBdkIsQ0FEakIsR0FDZ0QsSUFEaEQsR0FDdURMLFVBRG5FOztBQUVBOztBQUNKLFdBQUssUUFBTDtBQUNJQyxrQ0FBT0MsSUFBUCxDQUFZTCxtQkFBbUIsR0FBR0csVUFBbEM7O0FBQ0E7QUFkUjs7QUFpQkFULElBQUFBLElBQUk7QUFDUCxHQTNCRDtBQTRCSCxDQTdCRDs7ZUErQmVILGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vY29uZmlnL2xvZ2dlcl9jb25maWdcIjtcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKHJlcXVlc3Q6IFJlcXVlc3QsIHJlc3BvbnNlOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgIGNvbnN0IHVybCA9IHJlcXVlc3QudXJsO1xuICAgICAgICBjb25zdCB1c2VySWQgPSBTdHJpbmcocmVxdWVzdC5wYXJhbXMudXNlcklkKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0TG9nZ2VyU3RyaW5nID0gKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpICsgXCIgLS0tLS0tLS0tLSBcIiArIFwiUkVRVUVTVDogXCIgKyBtZXRob2QgKyBcIiBcIiArIHVybCArIFwiXFxuXCI7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUYWIgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI7XG5cbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhkZWZhdWx0TG9nZ2VyU3RyaW5nICsgZGVmYXVsdFRhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUFVUXCI6XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oZGVmYXVsdExvZ2dlclN0cmluZyArXG4gICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGFiICsgXCIgYm9keTogXCIgKyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpICsgXCJcXG5cIiArZGVmYXVsdFRhYik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGRlZmF1bHRMb2dnZXJTdHJpbmcgK1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VGFiICsgXCIgYm9keTogXCIgKyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvZHkpICsgXCJcXG5cIiArIGRlZmF1bHRUYWIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGRlZmF1bHRMb2dnZXJTdHJpbmcgKyBkZWZhdWx0VGFiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHQoKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyTWlkZGxld2FyZTsiXX0=