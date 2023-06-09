"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutocompleteIngredientSearch200ResponseInner = _interopRequireDefault(require("../com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner"));
var _ComputeIngredientAmount200Response = _interopRequireDefault(require("../com.spoonacular.client.model/ComputeIngredientAmount200Response"));
var _GetIngredientInformation200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetIngredientInformation200Response"));
var _GetIngredientSubstitutes200Response = _interopRequireDefault(require("../com.spoonacular.client.model/GetIngredientSubstitutes200Response"));
var _IngredientSearch200Response = _interopRequireDefault(require("../com.spoonacular.client.model/IngredientSearch200Response"));
var _MapIngredientsToGroceryProducts200ResponseInner = _interopRequireDefault(require("../com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner"));
var _MapIngredientsToGroceryProductsRequest = _interopRequireDefault(require("../com.spoonacular.client.model/MapIngredientsToGroceryProductsRequest"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Ingredients service.
* @module com.spoonacular.client/com.spoonacular/IngredientsApi
* @version 1.1
*/
var IngredientsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IngredientsApi. 
  * @alias module:com.spoonacular.client/com.spoonacular/IngredientsApi
  * @class
  * @param {module:com.spoonacular.client/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.spoonacular.client/ApiClient#instance} if unspecified.
  */
  function IngredientsApi(apiClient) {
    _classCallCheck(this, IngredientsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the autocompleteIngredientSearch operation.
   * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~autocompleteIngredientSearchCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Autocomplete Ingredient Search
   * Autocomplete the entry of an ingredient.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query The (natural language) search query.
   * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
   * @param {Boolean} opts.metaInformation Whether to return more meta information about the ingredients.
   * @param {String} opts.intolerances A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
   * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
   * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~autocompleteIngredientSearchCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/AutocompleteIngredientSearch200ResponseInner>}
   */
  _createClass(IngredientsApi, [{
    key: "autocompleteIngredientSearch",
    value: function autocompleteIngredientSearch(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'number': opts['number'],
        'metaInformation': opts['metaInformation'],
        'intolerances': opts['intolerances'],
        'language': opts['language']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_AutocompleteIngredientSearch200ResponseInner["default"]];
      return this.apiClient.callApi('/food/ingredients/autocomplete', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the computeIngredientAmount operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~computeIngredientAmountCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/ComputeIngredientAmount200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compute Ingredient Amount
     * Compute the amount you need of a certain ingredient for a certain nutritional goal. For example, how much pineapple do you have to eat to get 10 grams of protein?
     * @param {Number} id The id of the ingredient you want the amount for.
     * @param {String} nutrient The target nutrient. See a list of supported nutrients.
     * @param {Number} target The target number of the given nutrient.
     * @param {Object} opts Optional parameters
     * @param {String} opts.unit The target unit.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~computeIngredientAmountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/ComputeIngredientAmount200Response}
     */
  }, {
    key: "computeIngredientAmount",
    value: function computeIngredientAmount(id, nutrient, target, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling computeIngredientAmount");
      }
      // verify the required parameter 'nutrient' is set
      if (nutrient === undefined || nutrient === null) {
        throw new Error("Missing the required parameter 'nutrient' when calling computeIngredientAmount");
      }
      // verify the required parameter 'target' is set
      if (target === undefined || target === null) {
        throw new Error("Missing the required parameter 'target' when calling computeIngredientAmount");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'nutrient': nutrient,
        'target': target,
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ComputeIngredientAmount200Response["default"];
      return this.apiClient.callApi('/food/ingredients/{id}/amount', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getIngredientInformation operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientInformationCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ingredient Information
     * Use an ingredient id to get all available information about an ingredient, such as its image and supermarket aisle.
     * @param {Number} id The item's id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.amount The amount of this ingredient.
     * @param {String} opts.unit The unit for the given amount.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientInformationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientInformation200Response}
     */
  }, {
    key: "getIngredientInformation",
    value: function getIngredientInformation(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIngredientInformation");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'amount': opts['amount'],
        'unit': opts['unit']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetIngredientInformation200Response["default"];
      return this.apiClient.callApi('/food/ingredients/{id}/information', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getIngredientSubstitutes operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientSubstitutesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientSubstitutes200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ingredient Substitutes
     * Search for substitutes for a given ingredient.
     * @param {String} ingredientName The name of the ingredient you want to replace.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientSubstitutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientSubstitutes200Response}
     */
  }, {
    key: "getIngredientSubstitutes",
    value: function getIngredientSubstitutes(ingredientName, callback) {
      var postBody = null;
      // verify the required parameter 'ingredientName' is set
      if (ingredientName === undefined || ingredientName === null) {
        throw new Error("Missing the required parameter 'ingredientName' when calling getIngredientSubstitutes");
      }
      var pathParams = {};
      var queryParams = {
        'ingredientName': ingredientName
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetIngredientSubstitutes200Response["default"];
      return this.apiClient.callApi('/food/ingredients/substitutes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getIngredientSubstitutesByID operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientSubstitutesByIDCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientSubstitutes200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Ingredient Substitutes by ID
     * Search for substitutes for a given ingredient.
     * @param {Number} id The item's id.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~getIngredientSubstitutesByIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/GetIngredientSubstitutes200Response}
     */
  }, {
    key: "getIngredientSubstitutesByID",
    value: function getIngredientSubstitutesByID(id, callback) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIngredientSubstitutesByID");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetIngredientSubstitutes200Response["default"];
      return this.apiClient.callApi('/food/ingredients/{id}/substitutes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the ingredientSearch operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~ingredientSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredient Search
     * Search for simple whole foods (e.g. fruits, vegetables, nuts, grains, meat, fish, dairy etc.).
     * @param {Object} opts Optional parameters
     * @param {String} opts.query The (natural language) search query.
     * @param {Boolean} opts.addChildren Whether to add children of found foods.
     * @param {Number} opts.minProteinPercent The minimum percentage of protein the food must have (between 0 and 100).
     * @param {Number} opts.maxProteinPercent The maximum percentage of protein the food can have (between 0 and 100).
     * @param {Number} opts.minFatPercent The minimum percentage of fat the food must have (between 0 and 100).
     * @param {Number} opts.maxFatPercent The maximum percentage of fat the food can have (between 0 and 100).
     * @param {Number} opts.minCarbsPercent The minimum percentage of carbs the food must have (between 0 and 100).
     * @param {Number} opts.maxCarbsPercent The maximum percentage of carbs the food can have (between 0 and 100).
     * @param {Boolean} opts.metaInformation Whether to return more meta information about the ingredients.
     * @param {String} opts.intolerances A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
     * @param {String} opts.sort The strategy to sort recipes by. See a full list of supported sorting options.
     * @param {String} opts.sortDirection The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
     * @param {Number} opts.offset The number of results to skip (between 0 and 900).
     * @param {Number} opts.number The maximum number of items to return (between 1 and 100). Defaults to 10. (default to 10)
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~ingredientSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.spoonacular.client/com.spoonacular.client.model/IngredientSearch200Response}
     */
  }, {
    key: "ingredientSearch",
    value: function ingredientSearch(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'addChildren': opts['addChildren'],
        'minProteinPercent': opts['minProteinPercent'],
        'maxProteinPercent': opts['maxProteinPercent'],
        'minFatPercent': opts['minFatPercent'],
        'maxFatPercent': opts['maxFatPercent'],
        'minCarbsPercent': opts['minCarbsPercent'],
        'maxCarbsPercent': opts['maxCarbsPercent'],
        'metaInformation': opts['metaInformation'],
        'intolerances': opts['intolerances'],
        'sort': opts['sort'],
        'sortDirection': opts['sortDirection'],
        'offset': opts['offset'],
        'number': opts['number'],
        'language': opts['language']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IngredientSearch200Response["default"];
      return this.apiClient.callApi('/food/ingredients/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the ingredientsByIDImage operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~ingredientsByIDImageCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredients by ID Image
     * Visualize a recipe's ingredient list.
     * @param {Number} id The recipe id.
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.measure Whether the the measures should be 'us' or 'metric'.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~ingredientsByIDImageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "ingredientsByIDImage",
    value: function ingredientsByIDImage(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling ingredientsByIDImage");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {
        'measure': opts['measure']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = Object;
      return this.apiClient.callApi('/recipes/{id}/ingredientWidget.png', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the mapIngredientsToGroceryProducts operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~mapIngredientsToGroceryProductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Map Ingredients to Grocery Products
     * Map a set of ingredients to products you can buy in the grocery store.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProductsRequest} mapIngredientsToGroceryProductsRequest 
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~mapIngredientsToGroceryProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:com.spoonacular.client/com.spoonacular.client.model/MapIngredientsToGroceryProducts200ResponseInner>}
     */
  }, {
    key: "mapIngredientsToGroceryProducts",
    value: function mapIngredientsToGroceryProducts(mapIngredientsToGroceryProductsRequest, callback) {
      var postBody = mapIngredientsToGroceryProductsRequest;
      // verify the required parameter 'mapIngredientsToGroceryProductsRequest' is set
      if (mapIngredientsToGroceryProductsRequest === undefined || mapIngredientsToGroceryProductsRequest === null) {
        throw new Error("Missing the required parameter 'mapIngredientsToGroceryProductsRequest' when calling mapIngredientsToGroceryProducts");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_MapIngredientsToGroceryProducts200ResponseInner["default"]];
      return this.apiClient.callApi('/food/ingredients/map', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the visualizeIngredients operation.
     * @callback module:com.spoonacular.client/com.spoonacular/IngredientsApi~visualizeIngredientsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ingredients Widget
     * Visualize ingredients of a recipe. You can play around with that endpoint!
     * @param {Object} opts Optional parameters
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.contentType The content type.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.language The language of the input. Either 'en' or 'de'.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/String} opts.accept Accept header.
     * @param {module:com.spoonacular.client/com.spoonacular/IngredientsApi~visualizeIngredientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
  }, {
    key: "visualizeIngredients",
    value: function visualizeIngredients(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'language': opts['language']
      };
      var headerParams = {
        'Content-Type': opts['contentType'],
        'Accept': opts['accept']
      };
      var formParams = {};
      var authNames = ['apiKeyScheme'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return this.apiClient.callApi('/recipes/visualizeIngredients', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return IngredientsApi;
}();
exports["default"] = IngredientsApi;