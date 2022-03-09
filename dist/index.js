"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["images", "onDrawEnd"],
    _excluded2 = ["src"],
    _excluded3 = ["key", "image", "error"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function calcActualValue(n, m) {
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (typeof n === 'string') {
    if (n.endsWith('%')) {
      var _val = Number(n.substring(0, n.length - 1));

      if (isNaN(_val)) {
        throw new Error("".concat(n, " is invalid."));
      }

      return m / 100 * _val;
    }

    var val = Number(n);

    if (isNaN(val)) {
      throw new Error("".concat(n, " is invalid."));
    }

    return val;
  }

  return n * scale;
}

function CombineImage(_ref, ref) {
  var images = _ref.images,
      _ref$onDrawEnd = _ref.onDrawEnd,
      onDrawEnd = _ref$onDrawEnd === void 0 ? function (ctx) {} : _ref$onDrawEnd,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!ref) {
    ref = (0, _react.useRef)();
  }

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0, _react.useState)({
    images: {},
    layers: [],
    count: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      memoriedImages = _useState4[0],
      setMemoriedImages = _useState4[1];

  (0, _react.useEffect)(function () {
    if (ref.current && count === memoriedImages.count) {
      var ctx = ref.current.getContext('2d');
      memoriedImages.layers.forEach(function (layer, i) {
        var image = memoriedImages.images[layer.key];
        var _layer$props = layer.props,
            _layer$props$scale = _layer$props.scale,
            scale = _layer$props$scale === void 0 ? [1, 1] : _layer$props$scale,
            _layer$props$x = _layer$props.x,
            x = _layer$props$x === void 0 ? 0 : _layer$props$x,
            _layer$props$y = _layer$props.y,
            y = _layer$props$y === void 0 ? 0 : _layer$props$y,
            _layer$props$tx = _layer$props.tx,
            tx = _layer$props$tx === void 0 ? 0 : _layer$props$tx,
            _layer$props$ty = _layer$props.ty,
            ty = _layer$props$ty === void 0 ? 0 : _layer$props$ty,
            width = _layer$props.width,
            height = _layer$props.height,
            _layer$props$rotate = _layer$props.rotate,
            rotate = _layer$props$rotate === void 0 ? 0 : _layer$props$rotate;

        if (i === 0) {
          ctx.canvas.width = image.naturalWidth;
          ctx.canvas.height = image.naturalHeight;
        }

        var scaleX = ctx.canvas.width / image.naturalWidth;
        var scaleY = ctx.canvas.height / image.naturalHeight;
        var actualImageWidth = (calcActualValue(width, ctx.canvas.width, scaleX) || ctx.canvas.width) * scale[0];
        var actualImageHeight = (calcActualValue(height, ctx.canvas.height, scaleY) || ctx.canvas.height) * scale[1];
        ctx.save();
        ctx.translate(calcActualValue(x, ctx.canvas.width, scaleX) - calcActualValue('50%', actualImageWidth), calcActualValue(y, ctx.canvas.height, scaleY) - calcActualValue('50%', actualImageHeight));
        ctx.rotate(Math.PI / 180 * rotate);
        ctx.translate(-(calcActualValue(x, ctx.canvas.width, scaleX) - calcActualValue('50%', actualImageWidth)), -(calcActualValue(y, ctx.canvas.height, scaleY) - calcActualValue('50%', actualImageHeight)));
        ctx.translate(calcActualValue(x, ctx.canvas.width, scaleX) + calcActualValue(tx, actualImageWidth), calcActualValue(y, ctx.canvas.height, scaleY) + calcActualValue(ty, actualImageHeight));
        ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, actualImageWidth, actualImageHeight);
        ctx.restore();
        onDrawEnd(ctx);
      });
    }
  }, [ref, memoriedImages, count]);
  (0, _react.useEffect)(function () {
    setCount(count + 1);
  }, [images]);
  (0, _react.useEffect)(function () {
    Promise.all(images.map(function (_ref2) {
      var src = _ref2.src,
          rest = _objectWithoutProperties(_ref2, _excluded2);

      return new Promise(function (resolve) {
        if (src in memoriedImages.images) {
          return resolve(_objectSpread(_objectSpread({}, rest), {}, {
            key: src,
            image: memoriedImages.images[src]
          }));
        }

        var image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = src;

        image.onload = function () {
          resolve(_objectSpread(_objectSpread({}, rest), {}, {
            key: src,
            image: image
          }));
        };

        image.onerror = function () {
          resolve({
            key: src,
            image: image,
            error: true
          });
        };
      });
    })).then(function (result) {
      var images = memoriedImages.images;
      var layers = [];
      result.forEach(function (row) {
        var key = row.key,
            image = row.image,
            error = row.error,
            rest = _objectWithoutProperties(row, _excluded3);

        if (error) {
          return;
        }

        images[key] = image;
        layers.push({
          key: key,
          props: rest
        });
      });
      setMemoriedImages({
        images: images,
        layers: layers,
        count: count
      });
    });
  }, [count]);
  return /*#__PURE__*/_react["default"].createElement("canvas", _extends({
    ref: ref
  }, rest));
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(CombineImage);

exports["default"] = _default;