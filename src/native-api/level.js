/**
 * Static methods for the Level API
 * @namespace {Class} Level
 * @example Level.methodName([ arg1[, arg2[, ...argN] ] ]);
 */

/**
 * add particle effects to a block
 * @memberof Level
 * @since BlockLauncher 1.10.3
 * @param {number} particleType - the particle type
 * @param {number} blockX the - block's x coordinate
 * @param {number} blockY the - block's y coordinate
 * @param {number} blockZ the - block's z coordinate
 * @param {number} velocityX - __???__
 * @param {number} velocityY - __???__
 * @param {number} velocityZ - __???__
 * @param {number} size - __???__ the particle size (smoke and ink require
 * 100 or greater; itemBreak requires 256 or greater)
 * @see {@link ParticleType}
 * @example
 * // add hearts to the block you're looking at
 * var x = Player.getPointedBlockX();
 * var y = Player.getPointedBlockY();
 * var z = Player.getPointedBlockZ();
 * Level.addParticle(ParticleType.heart, x, y, z, 0, 0, 0, 1);
 * @todo figure out what exactly the last four params do
 */
function addParticle(particleType, blockX, blockY, blockZ, velocityX, velocityY, velocityZ, size) {}

/** @memberof Level */
function biomeIdToName(int1) {}

/** @memberof Level */
function destroyBlock(int1, int2, int3, boolean_) {}

/** @memberof Level */
function dropItem(double1, double2, double3, double4, int1, int2, int3) {}

/**
 * cause an explosion of the specified `radius` with the center located at the
 * specified `x`, `y` and `z` coordinates
 * @memberof Level
 * @param {number} x the  - x coordinate
 * @param {number} y the  - y coordinate
 * @param {number} z the  - z coordinate
 * @param {number} radius - the radius
 * @example // underground nuclear warhead testing
 * explode(127, 8, 45, 128);
 */
function explode(x, y, z, radius) {}

/**
 * __THIS THROWS AN ERROR ON ANDROID; IS IT iOS ONLY???___
 * @memberof Level
 * @return __`unknown`__
 * @todo figure out what this does
 */
function getAddress() {}

/** @memberof Level */
function getBiome(int1, int2) {}

/** @memberof Level */
function getBiomeName(int1, int2) {}

/** @memberof Level */
function getBrightness(int1, int2, int3) {}

/** @memberof Level */
function getChestSlot(int1, int2, int3, int4) {}

/** @memberof Level */
function getChestSlotCount(int1, int2, int3, int4) {}

/** @memberof Level */
function getChestSlotData(int1, int2, int3, int4) {}

/** @memberof Level */
function getData(int1, int2, int3) {}

/** @memberof Level */
function getFurnaceSlot(int1, int2, int3, int4) {}

/** @memberof Level */
function getFurnaceSlotCount(int1, int2, int3, int4) {}

/** @memberof Level */
function getFurnaceSlotData(int1, int2, int3, int4) {}

/** @memberof Level */
function getGameMode() {}

/** @memberof Level */
function getGrassColor(int1, int2) {}

/** @memberof Level */
function getLightningLevel() {}

/** @memberof Level */
function getRainLevel() {}

/** @memberof Level */
function getSignText(int1, int2, int3, int4) {}

/**
 * return the id of the block located at the specified `x`, `y`, and `z` coordinates
 * @memberof Level
 * @param  {double} x - the x coordinate
 * @param  {double} y - the y coordinate
 * @param  {double} z - the z coordinate
 * @return {int} the block id
 * @example
 * // what did I just step in?
 * function modTick() {
 *   var x = Player.getX();
 *   var y = Player.getY() - 2;   // -2 = feet, not head
 *   var z = Player.getZ();
 *   var tileId = Level.getTile(x, y, z);
 *   if (tileId > 0 && tileId < 256) {
 *     var poo = Item.getName(tileId, 0, false);
 *     ModPE.showTipMessage("You just stepped in poo! (or " + poo + ")");
 *   }
 * }
 */
function getTile(x, y, z) {}

/** @memberof Level */
function getTime() {}

/** @memberof Level */
function getWorldDir() {}

/** @memberof Level */
function getWorldName() {}

/** @memberof Level */
function playSound(double1, double2, double3, String_, double4, double5) {}

/** @memberof Level */
function playSoundEnt(Object_, String_, double1, double2) {}

/** @memberof Level */
function setChestSlot(int1, int2, int3, int4, int5, int6, int7) {}

/** @memberof Level */
function setFurnaceSlot(int1, int2, int3, int4, int5, int6, int7) {}

/** @memberof Level */
function setGameMode(int1) {}

/** @memberof Level */
function setGrassColor(int1, int2, int3) {}

/**
 * BL 1.10.4-beta
 * @memberof Level
 * @param {double} level The lighting level?
 */
function setLightningLevel(double_level) {}

/** @memberof Level */
function setNightMode(boolean_) {}

/**
 * BL 1.10.4-beta
 * @memberof Level
 * @param {double} level The rain level?
 */
function setRainLevel(double_level) {}

/** @memberof Level */
function setSignText(int1, int2, int3, int4, String_) {}

/** @memberof Level */
function setSpawn(int1, int2, int3) {}

/** @memberof Level */
function setSpawnerEntityType(int1, int2, int3, int4) {}

/** @memberof Level */
function setTile(int1, int2, int3, int4, int5) {}

/** @memberof Level */
function setTime(int1) {}

/**
 * Spawn a chicken entity at the specified `x`, `y`, and `z` coordinates using the specified `skin` image.
 * @memberof Level
 * @param {double} x    - the x coordinate
 * @param {double} y    - the y coordinate
 * @param {double} z    - the z coordinate
 * @param {string} skin - the skin image path (usually an image found in the
 *                              `../assets/images` folder of the MCPE apk)
 * @see {@link Entity.spawnMob}, {@link bl_spawnMob}
 * @example <caption>credit: {@link https://goo.gl/byNRuF|'Treebl' via 500 Internal Server Error}</caption>
 * var tb = false;
 *
 * function useItem(x, y, z, itemId, blockId, side) {
 *   if (itemId == 280 && !tb) { // if the item is a stick and items hasn't been initialized
 *     ModPE.setItem(392, "stick", 0, "Wand");
 *     ModPE.setFoodItem(393, "cookie", 0, 5, "Cookie");
 *     Player.addItemInventory(392, 5);
 *     Player.addItemInventory(393, 1);
 *     tb = true;
 *   } else if (itemId == 280) { // else: if the item is a stick
 *     Player.addItemInventory(392, 5);
 *     Player.addItemInventory(393, 1);
 *   } else if (itemId == 392) { // else: if the item is a wand
 *     Level.spawnChicken(x, y + 1, z, "mob/chicken.png");
 *   }
 * }
 */
function spawnChicken(x, y, z, skin) {}

/**
 * Spawn a cow entity at the specified `x`, `y`, and `z` coordinates using the specified `skin` image.
 * @memberof Level
 * @param {double} x    - the x coordinate
 * @param {double} y    - the y coordinate
 * @param {double} z    - the z coordinate
 * @param {string} skin - the skin image path (usually an image found in the
 *                              `../assets/images` folder of the MCPE apk)
 * @see {@link Entity.spawnMob}, {@link Level.spawnMob}, {@link bl_spawnMob}
 * @example <caption>credit: {@link https://goo.gl/byNRuF|'Treebl' via 500 Internal Server Error}</caption>
 * var tb = false;
 *
 * function useItem(x, y, z, itemId, blockId, side) {
 *   if (itemId == 280 && !tb) { // if the item is a stick and items hasn't been initialized
 *     ModPE.setItem(392, "stick", 0, "Wand");
 *     ModPE.setFoodItem(393, "cookie", 0, 5, "Cookie");
 *     Player.addItemInventory(392, 5);
 *     Player.addItemInventory(393, 1);
 *     tb = true;
 *   } else if (itemId == 280) { // else: if the item is a stick
 *     Player.addItemInventory(392, 5);
 *     Player.addItemInventory(393, 1);
 *   } else if (itemId == 392) { // else: if the item is a wand
 *     Level.spawnChicken(x, y + 1, z, "mob/cow.png");
 *   }
 * }
 */
function spawnCow(x, y, z, skin) {}

/**
 * spawn a valid MCPE entity at the specified x, y, and z coordinates using the specified skin image
 * @memberof Level
 * @param {number} x    - the x coordinate
 * @param {number} y    - the y coordinate
 * @param {number} z    - the z coordinate
 * @param {number} id   - the entity ID (see: {@link EntityType})
 * @param {string} skin - the skin image path (an image found in the
 *                        `../assets/images` folder of the MCPE apk)
 * @see {@link Entity.spawnMob}, {@link bl_spawnMob}
 * @example
 * // spawn a skeleton
 * Level.spawnMob(152, 48, 73, EntityType.SKELETON, "mob/skeleton.png");
 */
  function spawnMob(x, y, z, entityId, skinPath) {}
