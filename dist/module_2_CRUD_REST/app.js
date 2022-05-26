"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _db_config = require("./config/db_config");

var _loggerMiddleware = _interopRequireDefault(require("./handlers/logging/loggerMiddleware"));

var _errorMiddleware = _interopRequireDefault(require("./handlers/exceptions/errorMiddleware"));

var _logger_config = _interopRequireDefault(require("./config/logger_config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function () {
  function App(controllers) {
    _classCallCheck(this, App);

    _defineProperty(this, "app", void 0);

    this.app = (0, _express["default"])();
    this.connectionToDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  _createClass(App, [{
    key: "listen",
    value: function listen() {
      this.app.listen(process.env.APP_PORT, function () {
        _logger_config["default"].info("App listening on the port ".concat(process.env.APP_PORT));
      });
    }
  }, {
    key: "initializeMiddlewares",
    value: function initializeMiddlewares() {
      this.app.use(_express["default"].json());
      this.app.use((0, _loggerMiddleware["default"])()).on('error', function (error) {
        _logger_config["default"].error(error);
      });
    }
  }, {
    key: "initializeControllers",
    value: function initializeControllers(controllers) {
      var _this = this;

      controllers.forEach(function (controller) {
        _this.app.use("/", controller.router).on('error', function (error) {
          _logger_config["default"].error(error);
        });
      });
    }
  }, {
    key: "initializeErrorHandling",
    value: function initializeErrorHandling() {
      this.app.use(_errorMiddleware["default"]).on('error', function (error) {
        _logger_config["default"].error(error);
      });
    }
  }, {
    key: "connectionToDatabase",
    value: function connectionToDatabase() {
      _db_config.dbConfig.authenticate().then(function () {
        _logger_config["default"].info("Connection has been established successfully.");
      })["catch"](function (error) {
        _logger_config["default"].error("Unable to connect to the database: ", error);
      });
    }
  }]);

  return App;
}();

process.on('uncaughtException', function (err) {
  _logger_config["default"].error('There was an uncaught error', err);

  process.exit(1);
});
var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1QvYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsImNvbnRyb2xsZXJzIiwiYXBwIiwiY29ubmVjdGlvblRvRGF0YWJhc2UiLCJpbml0aWFsaXplTWlkZGxld2FyZXMiLCJpbml0aWFsaXplQ29udHJvbGxlcnMiLCJpbml0aWFsaXplRXJyb3JIYW5kbGluZyIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJBUFBfUE9SVCIsImxvZ2dlciIsImluZm8iLCJ1c2UiLCJleHByZXNzIiwianNvbiIsIm9uIiwiZXJyb3IiLCJmb3JFYWNoIiwiY29udHJvbGxlciIsInJvdXRlciIsImVycm9yTWlkZGxld2FyZSIsImRiQ29uZmlnIiwiYXV0aGVudGljYXRlIiwidGhlbiIsImVyciIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7QUFHRixlQUFZQyxXQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtDLEdBQUwsR0FBVywwQkFBWDtBQUVBLFNBQUtDLG9CQUFMO0FBQ0EsU0FBS0MscUJBQUw7QUFDQSxTQUFLQyxxQkFBTCxDQUEyQkosV0FBM0I7QUFDQSxTQUFLSyx1QkFBTDtBQUNIOzs7OzZCQUVlO0FBQ1osV0FBS0osR0FBTCxDQUFTSyxNQUFULENBQWdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBNUIsRUFBc0MsWUFBTTtBQUN4Q0Msa0NBQU9DLElBQVAscUNBQXlDSixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBckQ7QUFDSCxPQUZEO0FBR0g7Ozs0Q0FFK0I7QUFDNUIsV0FBS1IsR0FBTCxDQUFTVyxHQUFULENBQWFDLG9CQUFRQyxJQUFSLEVBQWI7QUFDQSxXQUFLYixHQUFMLENBQVNXLEdBQVQsQ0FBYSxtQ0FBYixFQUNLRyxFQURMLENBQ1EsT0FEUixFQUNpQixVQUFDQyxLQUFELEVBQXdCO0FBQ2pDTixrQ0FBT00sS0FBUCxDQUFhQSxLQUFiO0FBQ0gsT0FITDtBQUlIOzs7MENBRTZCaEIsVyxFQUEyQjtBQUFBOztBQUNyREEsTUFBQUEsV0FBVyxDQUFDaUIsT0FBWixDQUFxQixVQUFDQyxVQUFELEVBQWdCO0FBQ2pDLFFBQUEsS0FBSSxDQUFDakIsR0FBTCxDQUFTVyxHQUFULENBQWEsR0FBYixFQUFpQk0sVUFBVSxDQUFDQyxNQUE1QixFQUNLSixFQURMLENBQ1EsT0FEUixFQUNpQixVQUFDQyxLQUFELEVBQXdCO0FBQ2pDTixvQ0FBT00sS0FBUCxDQUFhQSxLQUFiO0FBQ0gsU0FITDtBQUlILE9BTEQ7QUFNSDs7OzhDQUVpQztBQUM5QixXQUFLZixHQUFMLENBQVNXLEdBQVQsQ0FBYVEsMkJBQWIsRUFDS0wsRUFETCxDQUNRLE9BRFIsRUFDaUIsVUFBQ0MsS0FBRCxFQUF3QjtBQUNqQ04sa0NBQU9NLEtBQVAsQ0FBYUEsS0FBYjtBQUNILE9BSEw7QUFJSDs7OzJDQUU4QjtBQUUzQkssMEJBQ0tDLFlBREwsR0FFS0MsSUFGTCxDQUVXLFlBQU07QUFDVGIsa0NBQU9DLElBQVAsQ0FBWSwrQ0FBWjtBQUNILE9BSkwsV0FLWSxVQUFDSyxLQUFELEVBQWlCO0FBQ3JCTixrQ0FBT00sS0FBUCxDQUFhLHFDQUFiLEVBQW9EQSxLQUFwRDtBQUNILE9BUEw7QUFRSDs7Ozs7O0FBR0xULE9BQU8sQ0FBQ1EsRUFBUixDQUFXLG1CQUFYLEVBQWdDLFVBQUNTLEdBQUQsRUFBUztBQUNyQ2QsNEJBQU9NLEtBQVAsQ0FBYSw2QkFBYixFQUE0Q1EsR0FBNUM7O0FBQ0FqQixFQUFBQSxPQUFPLENBQUNrQixJQUFSLENBQWEsQ0FBYjtBQUNILENBSEQ7ZUFLZTFCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywge0FwcGxpY2F0aW9ufSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvQ29udHJvbGxlclwiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuaW1wb3J0IHtkYkNvbmZpZ30gZnJvbSBcIi4vY29uZmlnL2RiX2NvbmZpZ1wiO1xuaW1wb3J0IGxvZ2dlck1pZGRsZXdhcmUgZnJvbSBcIi4vaGFuZGxlcnMvbG9nZ2luZy9sb2dnZXJNaWRkbGV3YXJlXCI7XG5pbXBvcnQgZXJyb3JNaWRkbGV3YXJlIGZyb20gXCIuL2hhbmRsZXJzL2V4Y2VwdGlvbnMvZXJyb3JNaWRkbGV3YXJlXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuL2NvbmZpZy9sb2dnZXJfY29uZmlnXCI7XG5cbmNsYXNzIEFwcCB7XG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJzOiBDb250cm9sbGVyW10pIHtcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG5cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVG9EYXRhYmFzZSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVNaWRkbGV3YXJlcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb250cm9sbGVycyhjb250cm9sbGVycyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUVycm9ySGFuZGxpbmcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuQVBQX1BPUlQsICgpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBBcHAgbGlzdGVuaW5nIG9uIHRoZSBwb3J0ICR7cHJvY2Vzcy5lbnYuQVBQX1BPUlR9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU1pZGRsZXdhcmVzKCkge1xuICAgICAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuICAgICAgICB0aGlzLmFwcC51c2UobG9nZ2VyTWlkZGxld2FyZSgpKVxuICAgICAgICAgICAgLm9uKCdlcnJvcicsIChlcnJvcjogQXBwbGljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ29udHJvbGxlcnMoY29udHJvbGxlcnM6IENvbnRyb2xsZXJbXSkge1xuICAgICAgICBjb250cm9sbGVycy5mb3JFYWNoKCAoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHAudXNlKFwiL1wiLGNvbnRyb2xsZXIucm91dGVyKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCAoZXJyb3I6IEFwcGxpY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUVycm9ySGFuZGxpbmcoKSB7XG4gICAgICAgIHRoaXMuYXBwLnVzZShlcnJvck1pZGRsZXdhcmUpXG4gICAgICAgICAgICAub24oJ2Vycm9yJywgKGVycm9yOiBBcHBsaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbm5lY3Rpb25Ub0RhdGFiYXNlKCkge1xuXG4gICAgICAgIGRiQ29uZmlnXG4gICAgICAgICAgICAuYXV0aGVudGljYXRlKClcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oXCJDb25uZWN0aW9uIGhhcyBiZWVuIGVzdGFibGlzaGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCAoZXJyb3I6IHZvaWQpID0+IHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2U6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbnByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgKGVycikgPT4ge1xuICAgIGxvZ2dlci5lcnJvcignVGhlcmUgd2FzIGFuIHVuY2F1Z2h0IGVycm9yJywgZXJyKTtcbiAgICBwcm9jZXNzLmV4aXQoMSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19