"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGlobalContext = exports.AppProvider = exports.AppContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _apiConnectionParams = _interopRequireDefault(require("./utils/apiConnectionParams"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const url = 'https://gateway.marvel.com/v1/public/characters';

const AppContext = /*#__PURE__*/_react.default.createContext();

exports.AppContext = AppContext;

const AppProvider = ({
  children
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [searchTerm, setSearchTerm] = (0, _react.useState)('');
  const [heroes, setHeroes] = (0, _react.useState)([]);
  const [alphabeticOrder, setAlphabeticOrder] = (0, _react.useState)(true);
  const [onlyFavorites, setOnlyFavorites] = (0, _react.useState)(false);
  const initialState = {
    loading: false,
    favorites: [],
    amount: 0
  };
  const [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState);

  const removeFavorite = e => {
    e.stopPropagation();
    e.preventDefault();
    const id = Number(e.target.id);
    dispatch({
      type: 'REMOVE_FAVORITE',
      payload: id
    });
  };

  const addFavorite = e => {
    e.stopPropagation();
    e.preventDefault();
    const name = e.target.name;
    const id = Number(e.target.id);
    const image = document.getElementById(`${id}portrait`).src;
    const hero = {
      name,
      id,
      image
    };
    dispatch({
      type: 'ADD_FAVORITE',
      payload: hero
    });
  };

  const fetchHeroes = (0, _react.useCallback)(async () => {
    let params = { ...(searchTerm ? {
        nameStartsWith: searchTerm,
        ..._apiConnectionParams.default
      } : { ..._apiConnectionParams.default
      })
    };
    params = { ...(alphabeticOrder ? { ...params
      } : {
        orderBy: '-name',
        ...params
      })
    };
    setLoading(true);

    try {
      const response = await _axios.default.get(url, {
        params: params
      });
      const data = response.data.data.results;

      if (data) {
        const newHero = data.map(item => {
          const {
            name,
            thumbnail,
            id,
            resourceURI
          } = item;
          return {
            id,
            name,
            image: `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`,
            resourceURI
          };
        });
        setHeroes(newHero);
      } else {
        setHeroes([]);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [searchTerm, alphabeticOrder]);
  (0, _react.useEffect)(() => {
    fetchHeroes();
  }, [searchTerm, fetchHeroes]);
  return /*#__PURE__*/_react.default.createElement(AppContext.Provider, {
    value: {
      loading,
      heroes,
      setSearchTerm,
      searchTerm,
      setAlphabeticOrder,
      alphabeticOrder,
      ...state,
      removeFavorite,
      addFavorite,
      setOnlyFavorites,
      onlyFavorites
    }
  }, children);
};

exports.AppProvider = AppProvider;

const useGlobalContext = () => {
  return (0, _react.useContext)(AppContext);
};

exports.useGlobalContext = useGlobalContext;