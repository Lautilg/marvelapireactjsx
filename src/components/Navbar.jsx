"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Marvel_Logo = _interopRequireDefault(require("../img/Marvel_Logo.png"));

var _reactRouterDom = require("react-router-dom");

require("./Navbar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "navbar-brand",
    to: "/"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "navbar-brand",
    to: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "logo",
    src: _Marvel_Logo.default,
    alt: "Marvel"
  }))));
}

var _default = Navbar;
exports.default = _default;