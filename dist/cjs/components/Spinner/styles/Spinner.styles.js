"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpinner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@blueprintjs/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSpinner = (0, _styledComponents.default)(_core.Spinner)(_templateObject());
exports.StyledSpinner = StyledSpinner;