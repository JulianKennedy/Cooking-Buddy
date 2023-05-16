"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures = _interopRequireDefault(require("./GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipeInformation200ResponseExtendedIngredientsInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner
 * @version 1.1
 */
var GetRecipeInformation200ResponseExtendedIngredientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner
   * @param aisle {String} 
   * @param amount {Number} 
   * @param consitency {String} 
   * @param id {Number} 
   * @param image {String} 
   * @param name {String} 
   * @param original {String} 
   * @param originalName {String} 
   * @param unit {String} 
   */
  function GetRecipeInformation200ResponseExtendedIngredientsInner(aisle, amount, consitency, id, image, name, original, originalName, unit) {
    _classCallCheck(this, GetRecipeInformation200ResponseExtendedIngredientsInner);
    GetRecipeInformation200ResponseExtendedIngredientsInner.initialize(this, aisle, amount, consitency, id, image, name, original, originalName, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeInformation200ResponseExtendedIngredientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, aisle, amount, consitency, id, image, name, original, originalName, unit) {
      obj['aisle'] = aisle;
      obj['amount'] = amount;
      obj['consitency'] = consitency;
      obj['id'] = id;
      obj['image'] = image;
      obj['name'] = name;
      obj['original'] = original;
      obj['originalName'] = originalName;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner} The populated <code>GetRecipeInformation200ResponseExtendedIngredientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeInformation200ResponseExtendedIngredientsInner();
        if (data.hasOwnProperty('aisle')) {
          obj['aisle'] = _ApiClient["default"].convertToType(data['aisle'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('consitency')) {
          obj['consitency'] = _ApiClient["default"].convertToType(data['consitency'], 'String');
        }
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('measures')) {
          obj['measures'] = _GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures["default"].constructFromObject(data['measures']);
        }
        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], ['String']);
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('original')) {
          obj['original'] = _ApiClient["default"].convertToType(data['original'], 'String');
        }
        if (data.hasOwnProperty('originalName')) {
          obj['originalName'] = _ApiClient["default"].convertToType(data['originalName'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetRecipeInformation200ResponseExtendedIngredientsInner;
}();
/**
 * @member {String} aisle
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['aisle'] = undefined;

/**
 * @member {Number} amount
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['amount'] = undefined;

/**
 * @member {String} consitency
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['consitency'] = undefined;

/**
 * @member {Number} id
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['id'] = undefined;

/**
 * @member {String} image
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['image'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasures} measures
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['measures'] = undefined;

/**
 * @member {Array.<String>} meta
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['meta'] = undefined;

/**
 * @member {String} name
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['name'] = undefined;

/**
 * @member {String} original
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['originalName'] = undefined;

/**
 * @member {String} unit
 */
GetRecipeInformation200ResponseExtendedIngredientsInner.prototype['unit'] = undefined;
var _default = GetRecipeInformation200ResponseExtendedIngredientsInner;
exports["default"] = _default;