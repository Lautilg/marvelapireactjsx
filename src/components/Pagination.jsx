"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Pagination.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, props.previousPage ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: props.callFrom === "Characters" ? `/characters/page/${props.page - 1}` : props.callFrom === "Comics" ? `/comics/page/${props.page - 1}` : `/series/page/${props.page - 1}`,
    className: "mx-3"
  }, "Previous") : null, props.nextPage ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: props.callFrom === "Characters" ? `/characters/page/${props.page + 1}` : props.callFrom === "Comics" ? `/comics/page/${props.page + 1}` : `/series/page/${props.page + 1}`,
    className: "mx-2"
  }, "Next") : null));
}

var _default = Pagination;
exports.default = _default;