"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ClassifyGroceryProduct200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response
 * @version 1.1
 */
var ClassifyGroceryProduct200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClassifyGroceryProduct200Response</code>.
   * 
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response
   * @param cleanTitle {String} 
   * @param image {String} 
   * @param category {String} 
   * @param breadcrumbs {Array.<String>} 
   * @param usdaCode {Number} 
   */
  function ClassifyGroceryProduct200Response(cleanTitle, image, category, breadcrumbs, usdaCode) {
    _classCallCheck(this, ClassifyGroceryProduct200Response);
    ClassifyGroceryProduct200Response.initialize(this, cleanTitle, image, category, breadcrumbs, usdaCode);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ClassifyGroceryProduct200Response, null, [{
    key: "initialize",
    value: function initialize(obj, cleanTitle, image, category, breadcrumbs, usdaCode) {
      obj['cleanTitle'] = cleanTitle;
      obj['image'] = image;
      obj['category'] = category;
      obj['breadcrumbs'] = breadcrumbs;
      obj['usdaCode'] = usdaCode;
    }

    /**
     * Constructs a <code>ClassifyGroceryProduct200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/ClassifyGroceryProduct200Response} The populated <code>ClassifyGroceryProduct200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClassifyGroceryProduct200Response();
        if (data.hasOwnProperty('cleanTitle')) {
          obj['cleanTitle'] = _ApiClient["default"].convertToType(data['cleanTitle'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }
        if (data.hasOwnProperty('breadcrumbs')) {
          obj['breadcrumbs'] = _ApiClient["default"].convertToType(data['breadcrumbs'], ['String']);
        }
        if (data.hasOwnProperty('usdaCode')) {
          obj['usdaCode'] = _ApiClient["default"].convertToType(data['usdaCode'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ClassifyGroceryProduct200Response;
}();
/**
 * @member {String} cleanTitle
 */
ClassifyGroceryProduct200Response.prototype['cleanTitle'] = undefined;

/**
 * @member {String} image
 */
ClassifyGroceryProduct200Response.prototype['image'] = undefined;

/**
 * @member {String} category
 */
ClassifyGroceryProduct200Response.prototype['category'] = undefined;

/**
 * @member {Array.<String>} breadcrumbs
 */
ClassifyGroceryProduct200Response.prototype['breadcrumbs'] = undefined;

/**
 * @member {Number} usdaCode
 */
ClassifyGroceryProduct200Response.prototype['usdaCode'] = undefined;
var _default = ClassifyGroceryProduct200Response;
exports["default"] = _default;