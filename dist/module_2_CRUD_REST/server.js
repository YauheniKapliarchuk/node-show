"use strict";

var _app = _interopRequireDefault(require("./app"));

var _UserController = _interopRequireDefault(require("./controllers/UserController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _app["default"]([new _UserController["default"]()]);
app.listen();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVfMl9DUlVEX1JFU1Qvc2VydmVyLnRzIl0sIm5hbWVzIjpbImFwcCIsIkFwcCIsIlVzZXJDb250cm9sbGVyIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLElBQUlDLGVBQUosQ0FDUixDQUFDLElBQUlDLDBCQUFKLEVBQUQsQ0FEUSxDQUFaO0FBSUFGLEdBQUcsQ0FBQ0csTUFBSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvVXNlckNvbnRyb2xsZXJcIjtcblxuY29uc3QgYXBwID0gbmV3IEFwcChcbiAgICBbbmV3IFVzZXJDb250cm9sbGVyKCldXG4pO1xuXG5hcHAubGlzdGVuKCk7Il19