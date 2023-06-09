"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetRecipeInformation200ResponseExtendedIngredientsInner = _interopRequireDefault(require("./GetRecipeInformation200ResponseExtendedIngredientsInner"));
var _GetRecipeInformation200ResponseWinePairing = _interopRequireDefault(require("./GetRecipeInformation200ResponseWinePairing"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetRecipeInformationBulk200ResponseInner model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformationBulk200ResponseInner
 * @version 1.1
 */
var GetRecipeInformationBulk200ResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRecipeInformationBulk200ResponseInner</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformationBulk200ResponseInner
   * @param id {Number} 
   * @param title {String} 
   * @param image {String} 
   * @param imageType {String} 
   * @param servings {Number} 
   * @param readyInMinutes {Number} 
   * @param license {String} 
   * @param sourceName {String} 
   * @param sourceUrl {String} 
   * @param spoonacularSourceUrl {String} 
   * @param aggregateLikes {Number} 
   * @param healthScore {Number} 
   * @param spoonacularScore {Number} 
   * @param pricePerServing {Number} 
   * @param analyzedInstructions {Array.<String>} 
   * @param cheap {Boolean} 
   * @param creditsText {String} 
   * @param cuisines {Array.<String>} 
   * @param dairyFree {Boolean} 
   * @param diets {Array.<String>} 
   * @param gaps {String} 
   * @param glutenFree {Boolean} 
   * @param instructions {String} 
   * @param ketogenic {Boolean} 
   * @param lowFodmap {Boolean} 
   * @param occasions {Array.<String>} 
   * @param sustainable {Boolean} 
   * @param vegan {Boolean} 
   * @param vegetarian {Boolean} 
   * @param veryHealthy {Boolean} 
   * @param veryPopular {Boolean} 
   * @param whole30 {Boolean} 
   * @param weightWatcherSmartPoints {Number} 
   * @param dishTypes {Array.<String>} 
   * @param extendedIngredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner>} 
   * @param summary {String} 
   * @param winePairing {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} 
   */
  function GetRecipeInformationBulk200ResponseInner(id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) {
    _classCallCheck(this, GetRecipeInformationBulk200ResponseInner);
    GetRecipeInformationBulk200ResponseInner.initialize(this, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetRecipeInformationBulk200ResponseInner, null, [{
    key: "initialize",
    value: function initialize(obj, id, title, image, imageType, servings, readyInMinutes, license, sourceName, sourceUrl, spoonacularSourceUrl, aggregateLikes, healthScore, spoonacularScore, pricePerServing, analyzedInstructions, cheap, creditsText, cuisines, dairyFree, diets, gaps, glutenFree, instructions, ketogenic, lowFodmap, occasions, sustainable, vegan, vegetarian, veryHealthy, veryPopular, whole30, weightWatcherSmartPoints, dishTypes, extendedIngredients, summary, winePairing) {
      obj['id'] = id;
      obj['title'] = title;
      obj['image'] = image;
      obj['imageType'] = imageType;
      obj['servings'] = servings;
      obj['readyInMinutes'] = readyInMinutes;
      obj['license'] = license;
      obj['sourceName'] = sourceName;
      obj['sourceUrl'] = sourceUrl;
      obj['spoonacularSourceUrl'] = spoonacularSourceUrl;
      obj['aggregateLikes'] = aggregateLikes;
      obj['healthScore'] = healthScore;
      obj['spoonacularScore'] = spoonacularScore;
      obj['pricePerServing'] = pricePerServing;
      obj['analyzedInstructions'] = analyzedInstructions;
      obj['cheap'] = cheap;
      obj['creditsText'] = creditsText;
      obj['cuisines'] = cuisines;
      obj['dairyFree'] = dairyFree;
      obj['diets'] = diets;
      obj['gaps'] = gaps;
      obj['glutenFree'] = glutenFree;
      obj['instructions'] = instructions;
      obj['ketogenic'] = ketogenic;
      obj['lowFodmap'] = lowFodmap;
      obj['occasions'] = occasions;
      obj['sustainable'] = sustainable;
      obj['vegan'] = vegan;
      obj['vegetarian'] = vegetarian;
      obj['veryHealthy'] = veryHealthy;
      obj['veryPopular'] = veryPopular;
      obj['whole30'] = whole30;
      obj['weightWatcherSmartPoints'] = weightWatcherSmartPoints;
      obj['dishTypes'] = dishTypes;
      obj['extendedIngredients'] = extendedIngredients;
      obj['summary'] = summary;
      obj['winePairing'] = winePairing;
    }

    /**
     * Constructs a <code>GetRecipeInformationBulk200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformationBulk200ResponseInner} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformationBulk200ResponseInner} The populated <code>GetRecipeInformationBulk200ResponseInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRecipeInformationBulk200ResponseInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }
        if (data.hasOwnProperty('imageType')) {
          obj['imageType'] = _ApiClient["default"].convertToType(data['imageType'], 'String');
        }
        if (data.hasOwnProperty('servings')) {
          obj['servings'] = _ApiClient["default"].convertToType(data['servings'], 'Number');
        }
        if (data.hasOwnProperty('readyInMinutes')) {
          obj['readyInMinutes'] = _ApiClient["default"].convertToType(data['readyInMinutes'], 'Number');
        }
        if (data.hasOwnProperty('license')) {
          obj['license'] = _ApiClient["default"].convertToType(data['license'], 'String');
        }
        if (data.hasOwnProperty('sourceName')) {
          obj['sourceName'] = _ApiClient["default"].convertToType(data['sourceName'], 'String');
        }
        if (data.hasOwnProperty('sourceUrl')) {
          obj['sourceUrl'] = _ApiClient["default"].convertToType(data['sourceUrl'], 'String');
        }
        if (data.hasOwnProperty('spoonacularSourceUrl')) {
          obj['spoonacularSourceUrl'] = _ApiClient["default"].convertToType(data['spoonacularSourceUrl'], 'String');
        }
        if (data.hasOwnProperty('aggregateLikes')) {
          obj['aggregateLikes'] = _ApiClient["default"].convertToType(data['aggregateLikes'], 'Number');
        }
        if (data.hasOwnProperty('healthScore')) {
          obj['healthScore'] = _ApiClient["default"].convertToType(data['healthScore'], 'Number');
        }
        if (data.hasOwnProperty('spoonacularScore')) {
          obj['spoonacularScore'] = _ApiClient["default"].convertToType(data['spoonacularScore'], 'Number');
        }
        if (data.hasOwnProperty('pricePerServing')) {
          obj['pricePerServing'] = _ApiClient["default"].convertToType(data['pricePerServing'], 'Number');
        }
        if (data.hasOwnProperty('analyzedInstructions')) {
          obj['analyzedInstructions'] = _ApiClient["default"].convertToType(data['analyzedInstructions'], ['String']);
        }
        if (data.hasOwnProperty('cheap')) {
          obj['cheap'] = _ApiClient["default"].convertToType(data['cheap'], 'Boolean');
        }
        if (data.hasOwnProperty('creditsText')) {
          obj['creditsText'] = _ApiClient["default"].convertToType(data['creditsText'], 'String');
        }
        if (data.hasOwnProperty('cuisines')) {
          obj['cuisines'] = _ApiClient["default"].convertToType(data['cuisines'], ['String']);
        }
        if (data.hasOwnProperty('dairyFree')) {
          obj['dairyFree'] = _ApiClient["default"].convertToType(data['dairyFree'], 'Boolean');
        }
        if (data.hasOwnProperty('diets')) {
          obj['diets'] = _ApiClient["default"].convertToType(data['diets'], ['String']);
        }
        if (data.hasOwnProperty('gaps')) {
          obj['gaps'] = _ApiClient["default"].convertToType(data['gaps'], 'String');
        }
        if (data.hasOwnProperty('glutenFree')) {
          obj['glutenFree'] = _ApiClient["default"].convertToType(data['glutenFree'], 'Boolean');
        }
        if (data.hasOwnProperty('instructions')) {
          obj['instructions'] = _ApiClient["default"].convertToType(data['instructions'], 'String');
        }
        if (data.hasOwnProperty('ketogenic')) {
          obj['ketogenic'] = _ApiClient["default"].convertToType(data['ketogenic'], 'Boolean');
        }
        if (data.hasOwnProperty('lowFodmap')) {
          obj['lowFodmap'] = _ApiClient["default"].convertToType(data['lowFodmap'], 'Boolean');
        }
        if (data.hasOwnProperty('occasions')) {
          obj['occasions'] = _ApiClient["default"].convertToType(data['occasions'], ['String']);
        }
        if (data.hasOwnProperty('sustainable')) {
          obj['sustainable'] = _ApiClient["default"].convertToType(data['sustainable'], 'Boolean');
        }
        if (data.hasOwnProperty('vegan')) {
          obj['vegan'] = _ApiClient["default"].convertToType(data['vegan'], 'Boolean');
        }
        if (data.hasOwnProperty('vegetarian')) {
          obj['vegetarian'] = _ApiClient["default"].convertToType(data['vegetarian'], 'Boolean');
        }
        if (data.hasOwnProperty('veryHealthy')) {
          obj['veryHealthy'] = _ApiClient["default"].convertToType(data['veryHealthy'], 'Boolean');
        }
        if (data.hasOwnProperty('veryPopular')) {
          obj['veryPopular'] = _ApiClient["default"].convertToType(data['veryPopular'], 'Boolean');
        }
        if (data.hasOwnProperty('whole30')) {
          obj['whole30'] = _ApiClient["default"].convertToType(data['whole30'], 'Boolean');
        }
        if (data.hasOwnProperty('weightWatcherSmartPoints')) {
          obj['weightWatcherSmartPoints'] = _ApiClient["default"].convertToType(data['weightWatcherSmartPoints'], 'Number');
        }
        if (data.hasOwnProperty('dishTypes')) {
          obj['dishTypes'] = _ApiClient["default"].convertToType(data['dishTypes'], ['String']);
        }
        if (data.hasOwnProperty('extendedIngredients')) {
          obj['extendedIngredients'] = _ApiClient["default"].convertToType(data['extendedIngredients'], [_GetRecipeInformation200ResponseExtendedIngredientsInner["default"]]);
        }
        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }
        if (data.hasOwnProperty('winePairing')) {
          obj['winePairing'] = _GetRecipeInformation200ResponseWinePairing["default"].constructFromObject(data['winePairing']);
        }
      }
      return obj;
    }
  }]);
  return GetRecipeInformationBulk200ResponseInner;
}();
/**
 * @member {Number} id
 */
GetRecipeInformationBulk200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetRecipeInformationBulk200ResponseInner.prototype['title'] = undefined;

/**
 * @member {String} image
 */
GetRecipeInformationBulk200ResponseInner.prototype['image'] = undefined;

/**
 * @member {String} imageType
 */
GetRecipeInformationBulk200ResponseInner.prototype['imageType'] = undefined;

/**
 * @member {Number} servings
 */
GetRecipeInformationBulk200ResponseInner.prototype['servings'] = undefined;

/**
 * @member {Number} readyInMinutes
 */
GetRecipeInformationBulk200ResponseInner.prototype['readyInMinutes'] = undefined;

/**
 * @member {String} license
 */
GetRecipeInformationBulk200ResponseInner.prototype['license'] = undefined;

/**
 * @member {String} sourceName
 */
GetRecipeInformationBulk200ResponseInner.prototype['sourceName'] = undefined;

/**
 * @member {String} sourceUrl
 */
GetRecipeInformationBulk200ResponseInner.prototype['sourceUrl'] = undefined;

/**
 * @member {String} spoonacularSourceUrl
 */
GetRecipeInformationBulk200ResponseInner.prototype['spoonacularSourceUrl'] = undefined;

/**
 * @member {Number} aggregateLikes
 */
GetRecipeInformationBulk200ResponseInner.prototype['aggregateLikes'] = undefined;

/**
 * @member {Number} healthScore
 */
GetRecipeInformationBulk200ResponseInner.prototype['healthScore'] = undefined;

/**
 * @member {Number} spoonacularScore
 */
GetRecipeInformationBulk200ResponseInner.prototype['spoonacularScore'] = undefined;

/**
 * @member {Number} pricePerServing
 */
GetRecipeInformationBulk200ResponseInner.prototype['pricePerServing'] = undefined;

/**
 * @member {Array.<String>} analyzedInstructions
 */
GetRecipeInformationBulk200ResponseInner.prototype['analyzedInstructions'] = undefined;

/**
 * @member {Boolean} cheap
 */
GetRecipeInformationBulk200ResponseInner.prototype['cheap'] = undefined;

/**
 * @member {String} creditsText
 */
GetRecipeInformationBulk200ResponseInner.prototype['creditsText'] = undefined;

/**
 * @member {Array.<String>} cuisines
 */
GetRecipeInformationBulk200ResponseInner.prototype['cuisines'] = undefined;

/**
 * @member {Boolean} dairyFree
 */
GetRecipeInformationBulk200ResponseInner.prototype['dairyFree'] = undefined;

/**
 * @member {Array.<String>} diets
 */
GetRecipeInformationBulk200ResponseInner.prototype['diets'] = undefined;

/**
 * @member {String} gaps
 */
GetRecipeInformationBulk200ResponseInner.prototype['gaps'] = undefined;

/**
 * @member {Boolean} glutenFree
 */
GetRecipeInformationBulk200ResponseInner.prototype['glutenFree'] = undefined;

/**
 * @member {String} instructions
 */
GetRecipeInformationBulk200ResponseInner.prototype['instructions'] = undefined;

/**
 * @member {Boolean} ketogenic
 */
GetRecipeInformationBulk200ResponseInner.prototype['ketogenic'] = undefined;

/**
 * @member {Boolean} lowFodmap
 */
GetRecipeInformationBulk200ResponseInner.prototype['lowFodmap'] = undefined;

/**
 * @member {Array.<String>} occasions
 */
GetRecipeInformationBulk200ResponseInner.prototype['occasions'] = undefined;

/**
 * @member {Boolean} sustainable
 */
GetRecipeInformationBulk200ResponseInner.prototype['sustainable'] = undefined;

/**
 * @member {Boolean} vegan
 */
GetRecipeInformationBulk200ResponseInner.prototype['vegan'] = undefined;

/**
 * @member {Boolean} vegetarian
 */
GetRecipeInformationBulk200ResponseInner.prototype['vegetarian'] = undefined;

/**
 * @member {Boolean} veryHealthy
 */
GetRecipeInformationBulk200ResponseInner.prototype['veryHealthy'] = undefined;

/**
 * @member {Boolean} veryPopular
 */
GetRecipeInformationBulk200ResponseInner.prototype['veryPopular'] = undefined;

/**
 * @member {Boolean} whole30
 */
GetRecipeInformationBulk200ResponseInner.prototype['whole30'] = undefined;

/**
 * @member {Number} weightWatcherSmartPoints
 */
GetRecipeInformationBulk200ResponseInner.prototype['weightWatcherSmartPoints'] = undefined;

/**
 * @member {Array.<String>} dishTypes
 */
GetRecipeInformationBulk200ResponseInner.prototype['dishTypes'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInner>} extendedIngredients
 */
GetRecipeInformationBulk200ResponseInner.prototype['extendedIngredients'] = undefined;

/**
 * @member {String} summary
 */
GetRecipeInformationBulk200ResponseInner.prototype['summary'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseWinePairing} winePairing
 */
GetRecipeInformationBulk200ResponseInner.prototype['winePairing'] = undefined;
var _default = GetRecipeInformationBulk200ResponseInner;
exports["default"] = _default;