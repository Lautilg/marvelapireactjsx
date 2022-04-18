


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./App.css");

var _Characters = _interopRequireDefault(require("./components/Characters"));

var _Comics = _interopRequireDefault(require("./components/Comics"));

var _Series = _interopRequireDefault(require("./components/Series"));

var _Home = _interopRequireDefault(require("./components/Home.tsx"));

var _Navbar = _interopRequireDefault(require("./components/Navbar"));

var _Footer = _interopRequireDefault(require("./components/Footer.tsx"));

var _SingleCharacter = _interopRequireDefault(require("./components/SingleCharacter"));

var _SingleComic = _interopRequireDefault(require("./components/SingleComic"));

var _SingleSeries = _interopRequireDefault(require("./components/SingleSeries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "App-title"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "showlink",
    to: "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "showlink",
    to: "/characters/page/0"
  }, "Characters"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "showlink",
    to: "/comics/page/0"
  }, "Comics"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "showlink",
    to: "/series/page/0"
  }, "Series")), /*#__PURE__*/_react.default.createElement("div", {
    className: "App-body"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/characters/page/0",
    element: /*#__PURE__*/_react.default.createElement(_Characters.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/characters/page/:page",
    element: /*#__PURE__*/_react.default.createElement(_Characters.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/characters/:id",
    element: /*#__PURE__*/_react.default.createElement(_SingleCharacter.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/comics/page/0",
    element: /*#__PURE__*/_react.default.createElement(_Comics.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/comics/page/:page",
    element: /*#__PURE__*/_react.default.createElement(_Comics.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/comics/:id",
    element: /*#__PURE__*/_react.default.createElement(_SingleComic.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/series/page/0",
    element: /*#__PURE__*/_react.default.createElement(_Series.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/series/page/:page",
    element: /*#__PURE__*/_react.default.createElement(_Series.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/series/:id",
    element: /*#__PURE__*/_react.default.createElement(_SingleSeries.default, null)
  }))), /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
}

var _default = App;
exports.default = _default;