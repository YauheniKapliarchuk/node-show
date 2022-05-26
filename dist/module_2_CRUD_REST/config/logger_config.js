"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var winston = _interopRequireWildcard(require("winston"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.simple()),
  defaultMeta: {
    service: "user-service"
  },
  transports: [new winston.transports.Console(), new winston.transports.File({
    filename: 'error.log',
    level: 'error'
  }), new winston.transports.File({
    filename: 'combined.log'
  })],
  exitOnError: false
});
var _default = logger;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvY29uZmlnL2xvZ2dlcl9jb25maWcudHMiXSwibmFtZXMiOlsibG9nZ2VyIiwid2luc3RvbiIsImNyZWF0ZUxvZ2dlciIsImxldmVsIiwiZm9ybWF0IiwiY29tYmluZSIsInRpbWVzdGFtcCIsImNvbG9yaXplIiwic2ltcGxlIiwiZGVmYXVsdE1ldGEiLCJzZXJ2aWNlIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJGaWxlIiwiZmlsZW5hbWUiLCJleGl0T25FcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxZQUFSLENBQXFCO0FBQ2hDQyxFQUFBQSxLQUFLLEVBQUUsTUFEeUI7QUFFaENDLEVBQUFBLE1BQU0sRUFBRUEsZUFBT0MsT0FBUCxDQUNKRCxlQUFPRSxTQUFQLEVBREksRUFFSkYsZUFBT0csUUFBUCxFQUZJLEVBR0pILGVBQU9JLE1BQVAsRUFISSxDQUZ3QjtBQU9oQ0MsRUFBQUEsV0FBVyxFQUFFO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBUG1CO0FBUWhDQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUixJQUFJVixPQUFPLENBQUNVLFVBQVIsQ0FBbUJDLE9BQXZCLEVBRFEsRUFFUixJQUFJRCxtQkFBV0UsSUFBZixDQUFvQjtBQUFFQyxJQUFBQSxRQUFRLEVBQUUsV0FBWjtBQUF5QlgsSUFBQUEsS0FBSyxFQUFFO0FBQWhDLEdBQXBCLENBRlEsRUFHUixJQUFJUSxtQkFBV0UsSUFBZixDQUFvQjtBQUFFQyxJQUFBQSxRQUFRLEVBQUU7QUFBWixHQUFwQixDQUhRLENBUm9CO0FBY2hDQyxFQUFBQSxXQUFXLEVBQUU7QUFkbUIsQ0FBckIsQ0FBZjtlQWlCZWYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSBcIndpbnN0b25cIjtcbmltcG9ydCB7Zm9ybWF0LCB0cmFuc3BvcnRzfSBmcm9tIFwid2luc3RvblwiO1xuXG5jb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gICAgbGV2ZWw6IFwiaW5mb1wiLFxuICAgIGZvcm1hdDogZm9ybWF0LmNvbWJpbmUoXG4gICAgICAgIGZvcm1hdC50aW1lc3RhbXAoKSxcbiAgICAgICAgZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgIGZvcm1hdC5zaW1wbGUoKVxuICAgICksXG4gICAgZGVmYXVsdE1ldGE6IHsgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIiB9LFxuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKCksXG4gICAgICAgIG5ldyB0cmFuc3BvcnRzLkZpbGUoeyBmaWxlbmFtZTogJ2Vycm9yLmxvZycsIGxldmVsOiAnZXJyb3InIH0pLFxuICAgICAgICBuZXcgdHJhbnNwb3J0cy5GaWxlKHsgZmlsZW5hbWU6ICdjb21iaW5lZC5sb2cnIH0pXG5cbiAgICBdLFxuICAgIGV4aXRPbkVycm9yOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7Il19