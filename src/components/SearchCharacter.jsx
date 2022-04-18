"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SearchCharacter = props => {
  const handleChange = e => {
    props.searchValue(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    method: "POST",
    onSubmit: e => {
      e.preventDefault();
    },
    name: "formName",
    className: "center"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("label", null, "Search ", props.callFrom, " :", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    autoComplete: "off",
    type: "text",
    name: "searchTerm",
    onChange: handleChange
  }))));
};

var _default = SearchCharacter;
exports.default = _default;