/**
 * Static methods for the Entity API
 * @namespace {Class} Entity
 * @license CC-BY-SA-4.0
 * @example Entity.methodName([ arg1[, arg2[, ...argN] ] ]);
 */

/**
 * Add a potion effect with the specified `effectId` to the specified `entity`.
 * @memberof Entity
 * @param {Object}  entity         - the entity to add the effect to
 * @param {int}     effectId       - the {@link MobEffect} to add
 * @param {int}     duration       - the duration of the effect in ticks (1 second = 20 ticks)
 * @param {int}     amplification  - the amplification level of the effect
 * @param {boolean} ambient        - ???
 * @param {boolean} showParticles  - show particle effects if true, otherwise false
 * @see {@link MobEffect}
 * @example
 * // give that poisonous look
 * var entity = Player.getPointedEntity(),
 * var effect = MobEffect.poison;
 *
 * // to calculate duration, multiply the number of seconds by 20
 * // (i.e. 30 seconds * 20 ticks/second = 600 ticks)
 * var duration = 600;
 *
 * Entity.addEffect(entity, effect, duration, 0, false, true);
 * @todo get more info on `amplification`
 * @todo figure out what `ambient` is
 */
function addEffect(entity, effectId, duration, amplification, ambient, showParticles) {}

/**
 * Return a list of all entity objects in the current world
 * @memberof Entity
 * @return {long[]} all entity objects currently in the game
 * @example <caption>credit: {@link https://goo.gl/5GAKMF|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 * function procCmd(cmd) {
 *   if (cmd === "removeall") {
 *     var entitiesList = Entity.getAll();
 *     for (var i = 0; i < entitiesList.length; i++) {
 *
 *       //skip players, otherwise Minecraft glitches
 *       if (Player.isPlayer(entitiesList[i])) {
 *         continue;
 *       }
 *
 *       Entity.remove(entitiesList[i]);
 *     }
 *   } else {
 *     return;
 *   }
 * }
 */
function getAll() {}

/**
 * @memberof Entity
 */
function getAnimalAge(Object_) {}

/**
 * @memberof Entity
 */
function getEntityTypeId(Object_) {}

/**
 * @memberof Entity
 */
function getHealth(Object_) {}

/**
 * @memberof Entity
 */
function getItemEntityCount(Object_) {}

/**
 * @memberof Entity
 */
function getItemEntityData(Object_) {}

/**
 * @memberof Entity
 */
function getItemEntityId(Object_) {}

/**
 * @memberof Entity
 */
function getMobSkin(Object_) {}

/**
 * @memberof Entity
 */
function getNameTag(Object_) {}

/**
 * return the up/down head rotation of the given `entity` (range: \-90 to 90)
 * @memberof Entity
 * @param  {Entity} [entity=Player] - the entity to query
 * @return {number} the pitch value
 * @example
 * // no shoe gazing
 * var pitch = Entity.getPitch();
 * if (pitch < -30) {
 *   clientMessage("Keep your head up!!");
 * }
 * @see {@link Entity.getYaw} for a more detailed example
 */
function getPitch(entity) {}

/**
 * @memberof Entity
 */
function getRenderType(Object_) {}

/**
 * @memberof Entity
 */
function getRider(Object_) {}

/**
 * @memberof Entity
 */
function getRiding(Object_) {}

/**
 * @memberof Entity
 */
function getUniqueId(Object_) {}

/**
 * @memberof Entity
 */
function getVelX(Object_) {}

/**
 * @memberof Entity
 */
function getVelY(Object_) {}

/**
 * @memberof Entity
 */
function getVelZ(Object_) {}

/**
 * @memberof Entity
 */
function getX(Object_) {}

/**
 * @memberof Entity
 */
function getY(Object_) {}

/**
 * return the left/right head rotation of the given `entity` (range: -∞ to ∞)
 * @memberof Entity
 * @param  {Entity} [entity=Player] - the entity to query
 * @return {number} the yaw value
 * @example <caption>Based on {@link http://goo.gl/fcSYaQ|Anti's DebugPE mod}</caption>
 * // determine player's cardinal or intermediate direction
 * function getDirection() {
 *   var player = Player.getEntity();
 *   var yaw = Entity.getYaw(player);
 *   var pitch = Entity.getPitch(player);
 *   var direction;
 *
 *   // adjust rotation for yaw < 0 || yaw >= 360
 *   if (yaw < 0) {
 *     Entity.setRot(player, yaw + 360, pitch);
 *   } else if (yaw >= 360) {
 *     Entity.setRot(player, yaw - 360, pitch);
 *   }
 *
 *   // determine direction with fuzzy ranges
 *   if ((yaw >= 337.5 && yaw < 360) || (yaw >= 0 && yaw < 22.5)) {
 *     direction = "West";
 *   } else if (yaw >= 22.5 && yaw < 67.5) {
 *     direction = "North West";
 *   } else if (yaw >= 67.5 && yaw < 112.5) {
 *     direction = "North";
 *   } else if (yaw >= 112.5 && yaw < 157.5) {
 *     direction = "North East";
 *   } else if (yaw >= 157.5 && yaw < 202.5) {
 *     direction = "East";
 *   } else if (yaw >= 202.5 && yaw < 247.5) {
 *     direction = "South East";
 *   } else if (yaw >= 247.5 && yaw < 292.5) {
 *     direction = "South";
 *   } else if (yaw >= 292.5 && yaw < 337.5) {
 *     direction = "South West";
 *   }
 *   return direction;
 * }
 *
 * // if you die watching the sun set, this should print "West" :-)
 * clientMessage(getDirection());
 */
function getYaw(Object_) {}

/**
 * @memberof Entity
 */
function getZ(Object_) {}

/**
 * @memberof Entity
 */
function isSneaking(Object_) {}

/**
 * @memberof Entity
 */
function remove(Object_) {}

/**
 * @memberof Entity
 */
function removeAllEffects(Object_) {}

/**
 * @memberof Entity
 */
function removeEffect(Object_, int_) {}

/**
 * @memberof Entity
 */
function rideAnimal(Object1, Object2) {}

/**
 * @memberof Entity
 */
function setAnimalAge(Object_, int_) {}

/**
 * @memberof Entity
 */
function setCape(Object_, String_) {}

/**
 * @memberof Entity
 */
function setCarriedItem(Object_, int1, int2, int3) {}

/**
 * @memberof Entity
 */
function setCollisionSize(Object_, double1, double2) {}

/**
 * @memberof Entity
 */
function setFireTicks(Object_, int_) {}

/**
 * @memberof Entity
 */
function setHealth(Object_, int_) {}

/**
 * Set the `skin` image for a valid MCPE entity `id`.
 * @memberof Entity
 * @param {int}    id   - the entity ID (see: {@link EntityType})
 * @param {string} skin - the skin image path (usually an image found in the
 *                        `../assets/images` folder of the MCPE apk)
 * @example
 * // make yourself look like a creeper
 * Entity.setMobSkin(Player.getEntity(), "mob/creeper.png");
 */
function setMobSkin(id, skin) {}

/**
 * @memberof Entity
 */
function setNameTag(Object_, String_) {}

/**
 * @memberof Entity
 */
function setPosition(Object_, double_, double1, double2) {}

/**
 * @memberof Entity
 */
function setPositionRelative(Object_, double_, double1, double2) {}

/**
 * @memberof Entity
 */
function setRenderType(Object_, int_) {}

/**
 * Set the rotation of the specified `entity`'s head to the specified `yaw` and `pitch`.
 * If attackHook is not used, {@link Player.getEntity()} should be used as the entity parameter.
 * @memberof Entity
 * @param {entity} entity - the target entity that will have its head rotation modified
 * @param {double} yaw    - the desired `yaw` of the entity
 * @param {double} pitch  - the desired `pitch` of the entity
 * @see {@link getYaw} for a more detailed example
 * @example
 * // the exorcist
 * var y = 0;
 * while (y <= 360) {
 *   setRot(Player.getEntity(), y, 0);
 *   y++;
 * }
 */
function setRot(entity, yaw, pitch) {}

/**
 * @memberof Entity
 */
function setSneaking(Object_, boolean_) {}

/**
 * Set the specified `entity`'s `velocity` along the X axis.
 * @memberof Entity
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 * @example <caption>credit: {@link https://goo.gl/CWKplX|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 * var playerDir = [0, 0, 0];
 * var DEG_TO_RAD = Math.PI / 180;
 * var playerFlySpeed = 1;
 *
 * function modTick() {
 *   if (Player.getCarriedItem() == 280) {
 *     jetpackTick();
 *   }
 * }
 * function jetpackTick() {
 *   toDirectionalVector(playerDir, (Player.getYaw() + 90) * DEG_TO_RAD, Player.getPitch() * DEG_TO_RAD * -1);
 *   var player = Player.getEntity();
 *   Entity.setVelX(player, playerFlySpeed * playerDir[0]);
 *   Entity.setVelY(player, playerFlySpeed * playerDir[1]);
 *   Entity.setVelZ(player, playerFlySpeed * playerDir[2]);
 * }
 * function toDirectionalVector(vector, yaw, pitch) {
 *   // see: http://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
 *   vector[0] = Math.cos(yaw) * Math.cos(pitch);
 *   vector[1] = Math.sin(pitch);
 *   vector[2] = Math.sin(yaw) * Math.cos(pitch);
 * }
 */
function setVelX(entity, velocity) {}

/**
 * Set the specified `entity`'s `velocity` along the Y axis.
 * @memberof Entity
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 * @see Example at {@link Entity.setVelX}
 */
function setVelY(entity, velocity) {}

/**
 * Set the specified `entity`'s `velocity` along the Z axis.
 * @memberof Entity
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 * @see Example at {@link Entity.setVelX}
 */
function setVelZ(entity, velocity) {}

/**
 * spawn a valid MCPE entity with the specified `id` at the given `x`, `y`, and
 * `z` coordinates using the specified `skin` image
 * @memberof Entity
 * @param {number} x    - the x coordinate
 * @param {number} y    - the y coordinate
 * @param {number} z    - the z coordinate
 * @param {number} id   - the entity ID (see: {@link EntityType})
 * @param {string} skin - the skin image path (an image found in the
 *                        `../assets/images` folder of the MCPE apk)
 * @see {@link Level.spawnMob}, {@link bl_spawnMob}
 * @example
 * // spawn a skeleton
 * Entity.spawnMob(152, 48, 73, EntityType.SKELETON, "mob/skeleton.png");
 */
function spawnMob(x, y, z, id, skin) {}
