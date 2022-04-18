"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _reactRouterDom = require("react-router-dom");

var _ErrorPage = _interopRequireDefault(require("./ErrorPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const md5 = require("blueimp-md5");

const publickey = "94dce821bcc69c8477eae0f5f7e93282";
const privatekey = "c7b613766b1bd35402222ad08ff78df0e8739617";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;

const SingleCharacter = () => {
  const [singleCharacter, setSingleCharacter] = (0, _react.useState)([]);
  const [loading, setLoading] = (0, _react.useState)(true);
  const [error, setError] = (0, _react.useState)(false);
  const {
    id
  } = (0, _reactRouterDom.useParams)();
  (0, _react.useEffect)(() => {
    async function fetchData() {
      try {
        const {
          data
        } = await _axios.default.get(url + "&id=" + id);
        setSingleCharacter(data.data.results);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(e);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Loading...."));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, error ? /*#__PURE__*/_react.default.createElement(_ErrorPage.default, {
      name: "Character"
    }) : /*#__PURE__*/_react.default.createElement("div", {
      className: "p-3 mb-2 bg-dark text-white"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Single Character"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), singleCharacter.map(chars => {
      const {
        id,
        name,
        description
      } = chars;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: id,
        className: "container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm"
      }, /*#__PURE__*/_react.default.createElement("h3", null, name), /*#__PURE__*/_react.default.createElement("img", {
        className: "img-thumbnail",
        src: `${chars.thumbnail.path}.${chars.thumbnail.extension}`,
        alt: name,
        "aria-label": "Character Logo"
      }), /*#__PURE__*/_react.default.createElement("p", null, description)), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Featured Comics"), chars.comics.items.map(items => {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: items.resourceURI
        }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
          to: `/comics/${items.resourceURI.substring(items.resourceURI.lastIndexOf("/")).substring(1)}`
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "text-white"
        }, items.name)));
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Featured Series"), chars.series.items.map(items => {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: items.resourceURI
        }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
          to: `/series/${items.resourceURI.substring(items.resourceURI.lastIndexOf("/")).substring(1)}`
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "text-white"
        }, items.name)));
      }))));
    })));
  }
};

var _default = SingleCharacter;
exports.default = _default;