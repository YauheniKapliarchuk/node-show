"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var errorResponse = function errorResponse(schemaErrors) {
  var errors = schemaErrors.map(function (error) {
    var path = error.path,
        message = error.message;
    return {
      path: path,
      message: message
    };
  });
  return {
    status: "failed",
    errors: errors
  };
};

var middleware = function middleware(schema, property) {
  return function (request, response, next) {
    // @ts-ignore
    var _schema$validate = schema.validate(request[property], {
      abortEarly: false,
      allowUnknown: false
    }),
        error = _schema$validate.error;

    if (error) {
      response.status(400).json(errorResponse(error.details));
    } else {
      next();
    }
  };
};

var _default = middleware;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvaGFuZGxlcnMvdmFsaWRhdGlvbnMvbWlkZGxld2FyZS50cyJdLCJuYW1lcyI6WyJlcnJvclJlc3BvbnNlIiwic2NoZW1hRXJyb3JzIiwiZXJyb3JzIiwibWFwIiwiZXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsInN0YXR1cyIsIm1pZGRsZXdhcmUiLCJzY2hlbWEiLCJwcm9wZXJ0eSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm5leHQiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJhbGxvd1Vua25vd24iLCJqc29uIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsWUFBRCxFQUF1QjtBQUN6QyxNQUFNQyxNQUFNLEdBQUdELFlBQVksQ0FBQ0UsR0FBYixDQUFrQixVQUFDQyxLQUFELEVBQWdCO0FBQUEsUUFDckNDLElBRHFDLEdBQ25CRCxLQURtQixDQUNyQ0MsSUFEcUM7QUFBQSxRQUMvQkMsT0FEK0IsR0FDbkJGLEtBRG1CLENBQy9CRSxPQUQrQjtBQUU3QyxXQUFPO0FBQUVELE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxNQUFBQSxPQUFPLEVBQVBBO0FBQVIsS0FBUDtBQUNILEdBSGMsQ0FBZjtBQUtBLFNBQU87QUFDSEMsSUFBQUEsTUFBTSxFQUFFLFFBREw7QUFFSEwsSUFBQUEsTUFBTSxFQUFOQTtBQUZHLEdBQVA7QUFJSCxDQVZEOztBQVlBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE1BQUQsRUFBY0MsUUFBZCxFQUFnQztBQUMvQyxTQUFPLFVBQUNDLE9BQUQsRUFBbUJDLFFBQW5CLEVBQXVDQyxJQUF2QyxFQUE4RDtBQUVqRTtBQUZpRSwyQkFHL0NKLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkgsT0FBTyxDQUFDRCxRQUFELENBQXZCLEVBQW1DO0FBQ2xESyxNQUFBQSxVQUFVLEVBQUUsS0FEc0M7QUFFbERDLE1BQUFBLFlBQVksRUFBRTtBQUZvQyxLQUFuQyxDQUgrQztBQUFBLFFBR3pEWixLQUh5RCxvQkFHekRBLEtBSHlEOztBQVFqRSxRQUFJQSxLQUFKLEVBQVc7QUFDUFEsTUFBQUEsUUFBUSxDQUFDTCxNQUFULENBQWdCLEdBQWhCLEVBQXFCVSxJQUFyQixDQUEwQmpCLGFBQWEsQ0FBQ0ksS0FBSyxDQUFDYyxPQUFQLENBQXZDO0FBQ0gsS0FGRCxNQUVPO0FBQ0hMLE1BQUFBLElBQUk7QUFDUDtBQUNKLEdBYkQ7QUFjSCxDQWZEOztlQWlCZUwsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcblxuY29uc3QgZXJyb3JSZXNwb25zZSA9IChzY2hlbWFFcnJvcnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHNjaGVtYUVycm9ycy5tYXAoIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGF0aCwgbWVzc2FnZSB9ID0gZXJyb3I7XG4gICAgICAgIHJldHVybiB7IHBhdGgsIG1lc3NhZ2UgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogXCJmYWlsZWRcIixcbiAgICAgICAgZXJyb3JzLFxuICAgIH07XG59O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gKHNjaGVtYTogYW55LCBwcm9wZXJ0eTogYW55KSA9PiB7XG4gICAgcmV0dXJuIChyZXF1ZXN0OiBSZXF1ZXN0LCByZXNwb25zZTogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gc2NoZW1hLnZhbGlkYXRlKHJlcXVlc3RbcHJvcGVydHldLCB7XG4gICAgICAgICAgIGFib3J0RWFybHk6IGZhbHNlLFxuICAgICAgICAgICBhbGxvd1Vua25vd246IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwMCkuanNvbihlcnJvclJlc3BvbnNlKGVycm9yLmRldGFpbHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlOyJdfQ==