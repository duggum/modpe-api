// Custom type definitions to link Java, ModPE, and Rhino data types to
// JavaScript primitives, or to provide clearer documentation.

///////////
// RHINO //
///////////
/**
 * __`Rhino`__ Java interface that all objects in JavaScript must implement.
 * @typedef {org.mozilla.javascript.Scriptable} Scriptable
 * @see https://mozilla.github.io/rhino/javadoc/org/mozilla/javascript/Scriptable.html
 */
/**
 * __`Rhino`__ This is the default implementation of the Scriptable interface in Rhino.
 * @typedef {org.mozilla.javascript.ScriptableObject} ScriptableObject
 * @see https://mozilla.github.io/rhino/javadoc/org/mozilla/javascript/ScriptableObject.html
 */
/**
 * __`Rhino`__ JavaScript object created by the Rhino Javascript engine.
 * @typedef {java.lang.Class<Scriptable>} Class
 * @extends ScriptableObject
 * @see https://mozilla.github.io/rhino/javadoc/org/mozilla/javascript/ScriptableObject.html#defineClass(org.mozilla.javascript.Scriptable, java.lang.Class)
 */
/**
 * __`Rhino`__ JavaScript objects that allow access to the MCPE library via BlockLauncher
 * and the Rhino JavaScript engine.
 * @typedef {ScriptableObject} NativeApi
 * @property {Class} NativeBlockApi    public static class for the {@link Block|Block API}
 * @property {Class} NativeEntityApi   public static class for the {@link Entity|Entity API}
 * @property {Class} NativeItemApi     public static class for the {@link Item|Item API}
 * @property {Class} NativeLevelApi    public static class for the {@link Level|Level API}
 * @property {Class} NativeModPEApi    public static class for the {@link ModPE|ModPE API}
 * @property {Class} NativePlayerApi   public static class for the {@link Player|Player API}
 * @property {Class} NativeRendererApi public static class for the {@link Renderer|Renderer API}
 * @property {Class} NativeServerApi   public static class for the {@link Server|Server API}
 * @see https://mozilla.github.io/rhino/
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino
 */

///////////
// MODPE //
///////////
/**
 * __`ModPE`__ A MCPE block object
 * @typedef {Object} block
 */
/**
 * __`ModPE`__ A MCPE entity object
 * @typedef {Object} entity
 */
/**
 * __`ModPE`__ A MCPE player object
 * @typedef {Object} player
 */
/**
 * __`ModPE`__ A MCPE item object
 * @typedef {Object} item
 */
/**
 * @typedef Hook
 * @property {function} attackHook {@link attackHook}
 */

///////////////////////////////
// JAVA DATA TYPES //
///////////////////////////////
/**
 * __`Java`__ A double-precision 64-bit floating point
 * @typedef {number} double
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A single precision 32-bit floating point
 * @typedef {number} float
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A 16-bit integer value
 * @typedef {number} short
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A 32-bit integer value
 * @typedef {number} int
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A 64-bit integer value
 * @typedef {number} long
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ An 8-bit integer value
 * @typedef {number} byte
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A single 16-bit Unicode character
 * @typedef {string} char
 * @see https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
 */
/**
 * __`Java`__ A string of characters
 * @typedef {string} string
 * @see https://docs.oracle.com/javase/8/docs/api/java/lang/String.html
 */
/**
 * __`Java`__ A hash table based implementation of the Map interface.
 *
 * __Type Parameters:__
 *
 * K - the type of keys maintained by this map
 *
 * V - the type of mapped values
 * @typedef HashMap
 * @type {Object}
 * @property {Object} key value
 * @see https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html
 */

//////////////////////
// JAVASCRIPT TYPES //
//////////////////////
/**
 * __`JavaScript`__ According to the ECMAScript standard, there is only one number type: the double-precision
 * 64-bit binary format IEEE 754 value (number between -(253 -1) and 253 -1).
 * @typedef {number} number
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
 */
/**
 * __`JavaScript`__ A logical entity with two values: true, and false.
 * @typedef {boolean} boolean
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
 */
