"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _reactRouterDom = require("react-router-dom");
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _ErrorPage = _interopRequireDefault(require("./ErrorPage"));
var _SearchCharacter = _interopRequireDefault(require("./SearchCharacter"));
require("../App.css");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const md5 = require("blueimp-md5");
const publickey = "823f95248f5219478645077541bda18f";
const privatekey = "878100d253b4d09f7df66348df00db2996a33bee";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
const LIMIT = 20;
const Characters = () => {
  const [loading, setLoading] = (0, _react.useState)(true);
  const [showsData, setShowsData] = (0, _react.useState)({});
  const [nextPage, setNextPage] = (0, _react.useState)(true);
  const [previousPage, setPreviousPage] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(false);
  const [searchData, setSearchData] = (0, _react.useState)(undefined);
  const [searchTerm, setSearchTerm] = (0, _react.useState)("");
  let { page } = (0, _reactRouterDom.useParams)();
  page = parseInt(typeof page === "undefined" ? 0 : page);
  (0, _react.useEffect)(
    () => {
      async function fetchData() {
        try {
          const { data } = await _axios.default.get(url + "&offset=" + page * LIMIT);
          setShowsData(data.data.results);
          setLoading(false);
          data.data.results.length === 0 ? setError(true) : setError(false);
          page > 0 ? setPreviousPage(true) : setPreviousPage(false);
          page + 1 >= Math.ceil(data.data.total / LIMIT) ? setNextPage(false) : setNextPage(true);
        } catch (e) {
          setLoading(false);
          setNextPage(false);
          setError(true);
          console.log(e);
        }
      }
      fetchData();
    },
    [page]
  );
  (0, _react.useEffect)(
    () => {
      async function fetchData() {
        try {
          const { data } = await _axios.default.get(url + "&nameStartsWith=" + searchTerm);
          setSearchData(data.data.results);
          setLoading(false);
          setPreviousPage(false);
          setNextPage(false);
        } catch (e) {
          setLoading(true);
          setNextPage(false);
          setError(true);
          console.log(e);
        }
      }
      if (searchTerm) {
        fetchData();
      } else {
        page > 0 ? setPreviousPage(true) : setPreviousPage(false);
        setNextPage(true);
      }
    },
    [searchTerm]
  );
  const searchValue = async value => {
    setSearchTerm(value);
  };
  if (page >= 0) {
    if (loading) {
      return /*#__PURE__*/ _react.default.createElement(
        "div",
        null,
        error
          ? /*#__PURE__*/ _react.default.createElement(_ErrorPage.default, {
              name: "Page"
            })
          : /*#__PURE__*/ _react.default.createElement("h2", null, "Loading....", /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement("br", null), "Wait please")
      );
    } else {
      return /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        error
          ? /*#__PURE__*/ _react.default.createElement(_ErrorPage.default, {
              name: "Page"
            })
          : /*#__PURE__*/ _react.default.createElement(
              "div",
              {
                className: "p-3 mb-2 bg-dark text-white"
              },
              /*#__PURE__*/ _react.default.createElement("h2", null, "Characters"),
              /*#__PURE__*/ _react.default.createElement(_SearchCharacter.default, {
                searchValue: searchValue,
                callFrom: "Character"
              }),
              /*#__PURE__*/ _react.default.createElement("br", null),
              /*#__PURE__*/ _react.default.createElement(_Pagination.default, {
                page: page,
                nextPage: nextPage,
                previousPage: previousPage,
                callFrom: "Characters"
              }),
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  className: "row row-col-sm-2  row-cols-md-3  row-cols-lg-4 g-5 my-3 mx-4"
                },
                searchTerm
                  ? searchData &&
                    searchData.map(chars => {
                      const { id, name } = chars;
                      return /*#__PURE__*/ _react.default.createElement(
                        "div",
                        {
                          className: "col",
                          key: id
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          "div",
                          {
                            className: "card text-white bg-dark mb-3 border-light h-100"
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _reactRouterDom.Link,
                            {
                              to: `/characters/${id}`
                            },
                            /*#__PURE__*/ _react.default.createElement("img", {
                              src: `${chars.thumbnail.path}.${chars.thumbnail.extension}`,
                              className: "card-img-top img-thumbnail",
                              alt: name,
                              "aria-label": "Character Logo"
                            }),
                            /*#__PURE__*/ _react.default.createElement(
                              "div",
                              {
                                className: "card-body"
                              },
                              /*#__PURE__*/ _react.default.createElement(
                                "h3",
                                {
                                  className: "card-title"
                                },
                                name
                              )
                            )
                          )
                        )
                      );
                    })
                  : showsData.map(chars => {
                      const { id, name } = chars;
                      return /*#__PURE__*/ _react.default.createElement(
                        "div",
                        {
                          className: "col",
                          key: id
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          "div",
                          {
                            className: "card text-white bg-dark mb-3 border-light h-100"
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _reactRouterDom.Link,
                            {
                              to: `/characters/${id}`
                            },
                            /*#__PURE__*/ _react.default.createElement("img", {
                              src: `${chars.thumbnail.path}.${chars.thumbnail.extension}`,
                              className: "card-img-top img-thumbnail",
                              alt: name,
                              "aria-label": "Character Logo"
                            }),
                            /*#__PURE__*/ _react.default.createElement(
                              "div",
                              {
                                className: "card-body"
                              },
                              /*#__PURE__*/ _react.default.createElement(
                                "h3",
                                {
                                  className: "card-title"
                                },
                                name
                              )
                            )
                          )
                        )
                      );
                    })
              ),
              /*#__PURE__*/ _react.default.createElement(_Pagination.default, {
                page: page,
                nextPage: nextPage,
                previousPage: previousPage,
                callFrom: "Characters"
              })
            )
      );
    }
  } else {
    return /*#__PURE__*/ _react.default.createElement(
      "div",
      null,
      /*#__PURE__*/ _react.default.createElement(_ErrorPage.default, {
        name: "Page"
      }),
      " "
    );
  }
};
var _default = Characters;
exports.default = _default;
