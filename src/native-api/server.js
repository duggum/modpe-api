/**
 * Static methods for the Server API
 * @namespace {Class} Server
 * @example Server.methodName([ arg1[, arg2[, ...argN] ] ]);
 * @todo code examples
 */

/**
 * return the server IP address
 * @memberof Server
 * @return {string} the IP address
 * @example clientMessage(Server.getAddress()); // prints '84.45.129.7'
 */
function getAddress() {}

/**
 * return the names of all players on the server
 * @memberof Server
 * @return {string[]} the player names
 * @example
 * // announce all players online
 * var players = Server.getAllPlayerNames();
 * for (var i = 0; i < players.length; i++) {
 *   clientMessage(players[i] + " is online!");
 * }
 */
function getAllPlayerNames() {}

/**
 * return the entity IDs of all players on the server
 * @memberof Server
 * @return {long[]} the player IDs
 * @example
 * // announce all players online
 * var players = Server.getAllPlayers();
 * for (var i = 0; i < players.length; i++) {
 *   clientMessage(Player.getName(players[i]) + " is online!");
 * }
 */
function getAllPlayers() {}

/**
 * return the port number of the current remote connection
 * @memberof Server
 * @return {int} the port number
 * @example
 * clientMessage("The current server port is: " + Server.getPort());
 */
function getPort() {}

/**
 * connect to a remote server
 * @memberof Server
 * @param {string} address - the server's IP address
 * @param {int} port       - the port number
 * @example
 * Server.joinServer("84.45.129.7", 19132);
 */
function joinServer(address, port) {}

/**
 * send a chat message
 * @memberof Server
 * @param {string} text - the message text
 * @example
 * Server.sendChat("Herobrine is fake!!");
 */
function sendChat(text) {}
