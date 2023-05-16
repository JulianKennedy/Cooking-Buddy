/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetDishPairingForWine200Response model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response
 * @version 1.1
 */
class GetDishPairingForWine200Response {
    /**
     * Constructs a new <code>GetDishPairingForWine200Response</code>.
     * 
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response
     * @param pairings {Array.<String>} 
     * @param text {String} 
     */
    constructor(pairings, text) { 
        
        GetDishPairingForWine200Response.initialize(this, pairings, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pairings, text) { 
        obj['pairings'] = pairings;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>GetDishPairingForWine200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetDishPairingForWine200Response} The populated <code>GetDishPairingForWine200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDishPairingForWine200Response();

            if (data.hasOwnProperty('pairings')) {
                obj['pairings'] = ApiClient.convertToType(data['pairings'], ['String']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} pairings
 */
GetDishPairingForWine200Response.prototype['pairings'] = undefined;

/**
 * @member {String} text
 */
GetDishPairingForWine200Response.prototype['text'] = undefined;






export default GetDishPairingForWine200Response;

