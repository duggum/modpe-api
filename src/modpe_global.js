/**
 *
 * @member      ArmorType
 * @description Armor types.
 *
 * @property {int} boots      - 3
 * @property {int} chestplate - 1
 * @property {int} helmet     - 0
 * @property {int} leggings   - 2
 *
 * @example
 * // prints 1
 * print(ArmorType.chestplate);
 *
 * ***/

/**
 *
 * @member      ChatColor
 * @description Chat colors for `clientMessage();`.
 *
 * @property {string} AQUA         - "§b"
 * @property {string} BEGIN        - "§"
 * @property {string} BLACK        - "§0"
 * @property {string} BLUE         - "§9"
 * @property {string} BOLD         - "§l"
 * @property {string} DARK_AQUA    - "§3"
 * @property {string} DARK_BLUE    - "§1"
 * @property {string} DARK_GRAY    - "§8"
 * @property {string} DARK_GREEN   - "§2"
 * @property {string} DARK_PURPLE  - "§5"
 * @property {string} DARK_RED     - "§4"
 * @property {string} GOLD         - "§6"
 * @property {string} GRAY         - "§7"
 * @property {string} GREEN        - "§a"
 * @property {string} LIGHT_PURPLE - "§d"
 * @property {string} RED          - "§c"
 * @property {string} RESET        - "§r"
 * @property {string} WHITE        - "§f"
 * @property {string} YELLOW       - "§e"
 *
 * @example
 * // you better RUN!
 * clientMessage(ChatColor.RED + "There's a Magma Cube behind you!");
 *
 * ***/

/**
 *
 * @member      DimensionId
 * @description Dimension IDs.
 *
 * @property {int} NETHER - 1
 * @property {int} NORMAL - 0
 *
 * @example
 * // prints 1
 * print(DimensionId.NETHER);
 *
 * ***/

/**
 *
 * @member      EntityRenderType
 * @description Entity render types. This determines the shape of creature to render, not
 *              the skin. To change the skin see {@link Entity.setMobSkin}.
 *
 * @property {int[]} allTypes       - [ 2, . . . 45 ]
 * @property {int}   arrow          - 32
 * @property {int}   bat            - 10
 * @property {int}   blaze          - 18
 * @property {int}   boat           - 35
 * @property {int}   chicken        - 5
 * @property {int}   cow            - 6
 * @property {int}   creeper        - 22
 * @property {int}   egg            - 30
 * @property {int}   enderman       - 24
 * @property {int}   expPotion      - 45
 * @property {int}   experienceOrb  - 40
 * @property {int}   fallingTile    - 33
 * @property {int}   fireball       - 37
 * @property {int}   fishHook       - 26
 * @property {int}   ghast          - 17
 * @property {int}   human          - 3
 * @property {int}   ironGolem      - 42
 * @property {int}   item           - 4
 * @property {int}   lavaSlime      - 16
 * @property {int}   lightningBolt  - 41
 * @property {int}   minecart       - 34
 * @property {int}   ocelot         - 43
 * @property {int}   pig            - 8
 * @property {int}   player         - 27
 * @property {int}   player2        - 28
 * @property {int}   sheep          - 9
 * @property {int}   silverfish     - 21
 * @property {int}   skeleton       - 19
 * @property {int}   slime          - 23
 * @property {int}   smallFireball  - 38
 * @property {int}   snowGolem      - 44
 * @property {int}   snowball       - 29
 * @property {int}   spider         - 20
 * @property {int}   squid          - 36
 * @property {int}   thrownPotion   - 31
 * @property {int}   tnt            - 2
 * @property {int}   unknown1       - 25
 * @property {int}   villager       - 12
 * @property {int}   villagerZombie - 39
 * @property {int}   wolf           - 11
 * @property {int}   zombie         - 14
 * @property {int}   zombiePigman   - 15
 *
 * @example
 * // make all pigs look like cows
 * function entityAddedHook(entity) {
 *   if (Entity.getEntityTypeId(entity) === EntityType.PIG) {
 *     Entity.setRenderType(entity, EntityRenderType.cow);
 *     // don't forget the skin!
 *     Entity.setMobSkin(entity, "mob/cow.png");
 *   }
 * }
 *
 * ***/

/**
 *
 * @member      EntityType
 * @description Entity type variants.
 *
 * @property  {int} ARROW             - 80
 * @property  {int} BAT               - 19
 * @property  {int} BLAZE             - 43
 * @property  {int} BOAT              - 90
 * @property  {int} CAVE_SPIDER       - 40
 * @property  {int} CHICKEN           - 10
 * @property  {int} COW               - 11
 * @property  {int} CREEPER           - 33
 * @property  {int} EGG               - 82
 * @property  {int} ENDERMAN          - 38
 * @property  {int} EXPERIENCE_ORB    - 69
 * @property  {int} EXPERIENCE_POTION - 68
 * @property  {int} FALLING_BLOCK     - 66
 * @property  {int} FIREBALL          - 85
 * @property  {int} FISHING_HOOK      - 77
 * @property  {int} GHAST             - 41
 * @property  {int} IRON_GOLEM        - 20
 * @property  {int} ITEM              - 64
 * @property  {int} LAVA_SLIME        - 42
 * @property  {int} LIGHTNING_BOLT    - 93
 * @property  {int} MINECART          - 84
 * @property  {int} MUSHROOM_COW      - 16
 * @property  {int} OCELOT            - 22
 * @property  {int} PAINTING          - 83
 * @property  {int} PIG               - 12
 * @property  {int} PIG_ZOMBIE        - 36
 * @property  {int} PLAYER            - 63
 * @property  {int} PRIMED_TNT        - 65
 * @property  {int} SHEEP             - 13
 * @property  {int} SILVERFISH        - 39
 * @property  {int} SKELETON          - 34
 * @property  {int} SLIME             - 37
 * @property  {int} SMALL_FIREBALL    - 94
 * @property  {int} SNOWBALL          - 81
 * @property  {int} SNOW_GOLEM        - 21
 * @property  {int} SPIDER            - 35
 * @property  {int} SQUID             - 17
 * @property  {int} THROWN_POTION     - 86
 * @property  {int} VILLAGER          - 15
 * @property  {int} WOLF              - 14
 * @property  {int} ZOMBIE            - 32
 * @property  {int} ZOMBIE_VILLAGER   - 44
 *
 * @example
 * // spawn a creeper on your head
 * var x = Player.getX();
 * var y = Player.getY();
 * var z = Player.getZ();
 * Level.spawnMob(x, y, z, EntityType.CREEPER, "mob/creeper.png");
 *
 * ***/

/**
 *
 * @member      ItemCategory
 * @description Item category variants.
 *
 * @property {int} DECORATION - 8
 * @property {int} FOOD       - 4
 * @property {int} INTERNAL   - \-1
 * @property {int} MATERIAL   - 1
 * @property {int} TOOL       - 2
 *
 * @example
 * // prints 4
 * print(ItemCategory.FOOD);
 *
 * ***/

/**
 *
 * @member      MobEffect
 * @description Effects (think potions) that can be applied to mobs.
 *
 * @see {@link Entity.addEffect}, {@link Entity.removeEffect},
 *      {@link Entity.removeAllEffects}
 *
 * @property {int}                  absorption       - 22
 * @property {int}                  blindness        - 15
 * @property {int}                  confusion        - 9
 * @property {int}                  damageBoost      - 5
 * @property {int}                  damageResistance - 11
 * @property {int}                  digSlowdown      - 4
 * @property {int}                  digSpeed         - 3
 * @property {HashMap<int, string>} effectIds        - all type IDs; *NOT* in numerical order (i.e. `{8=jump, ..., 20=wither} )
 * @property {int}                  fireResistance   - 12
 * @property {int}                  harm             - 7
 * @property {int}                  heal             - 6
 * @property {int}                  healthBoost      - 21
 * @property {int}                  hunger           - 17
 * @property {int}                  invisibility     - 14
 * @property {int}                  jump             - 8
 * @property {int}                  movementSlowdown - 2
 * @property {int}                  movementSpeed    - 1
 * @property {int}                  nightVision      - 16
 * @property {int}                  poison           - 19
 * @property {int}                  regeneration     - 10
 * @property {int}                  saturation       - 23
 * @property {int}                  waterBreathing   - 13
 * @property {int}                  weakness         - 18
 * @property {int}                  wither           - 20
 *
 * @example
 * // prints 8
 * print(MobEffect.jump);
 *
 * ***/

/**
 *
 * @member      ParticleType
 * @description Particle types.
 *
 * See: {@link Level.addParticle}
 *
 * @property {int} angryVillager     - 30
 * @property {int} bubble            - 1
 * @property {int} cloud             - 4
 * @property {int} crit              - 2
 * @property {int} dripLava          - 22
 * @property {int} dripWater         - 21
 * @property {int} enchantmenttable  - 32
 * @property {int} fallingDust       - 23
 * @property {int} flame             - 6
 * @property {int} happyVillager     - 31
 * @property {int} heart             - 15
 * @property {int} hugeexplosion     - 13
 * @property {int} hugeexplosionSeed - 12
 * @property {int} ink               - 27
 * @property {int} itemBreak         - 10
 * @property {int} largeexplode      - 5
 * @property {int} lava              - 7
 * @property {int} mobFlame          - 14
 * @property {int} portal            - 18
 * @property {int} rainSplash        - 29
 * @property {int} redstone          - 9
 * @property {int} slime             - 28
 * @property {int} smoke             - 3
 * @property {int} smoke2            - 8
 * @property {int} snowballpoof      - 11
 * @property {int} spell             - 24
 * @property {int} spell2            - 25
 * @property {int} spell3            - 26
 * @property {int} splash            - 19
 * @property {int} suspendedTown     - 17
 * @property {int} terrain           - 16
 * @property {int} waterWake         - 20
 *
 * @example
 * // sprout hearts from the block you're looking at
 * var x = Player.getPointedBlockX();
 * var y = Player.getPointedBlockY();
 * var z = Player.getPointedBlockZ();
 * Level.addParticle(ParticleType.heart, x, y, z, 0, 0, 0, 1);
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.addItemInventory} instead
 *
 * @function    addItemInventory
 * @description Add a specified `quantity` of a specified item or block `id` to the player's inventory.
 *
 * @param {int} id       - the item or block ID
 * @param {int} quantity - how much to add
 * @param {int} damage   - the damage value of the item
 *
 * @example
 * // sticks anyone?
 * addItemInventory(280, 64, 0);
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setMobSkin} instead
 *
 * @function    bl_setMobSkin
 * @description Set the `skin` image for a valid MCPE `entityId`.
 *
 * @param {int}    entityId - the entity ID (see: {@link EntityType})
 * @param {string} skin     - the skin image path (usually an image found in the
 *                            `../assets/images` folder of the MCPE apk)
 *
 * @example
 * // make yourself look like a creeper
 * bl_setMobSkin(Player.getEntity(), "mob/creeper.png");
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.spawnMob} instead
 *
 * @function    bl_spawnMob
 * @description Spawn a mob with a valid MCPE `entityId` at the specified
 *              `x`, `y`, and `z` coordinates using the specified `skin` image.
 *
 * @param {double} x        - the x coordinate
 * @param {double} y        - the y coordinate
 * @param {double} z        - the z coordinate
 * @param {int}    entityId - the entity ID (see: {@link EntityType})
 * @param {string} skin     - the skin image path (usually an image found in the
 *                            `../assets/images` folder of the MCPE apk)
 *
 * @example
 * // spawn a skeleton
 * bl_spawnMob(152, 48, 73, EntityType.SKELETON, "mob/skeleton.png");
 *
 * ***/

/**
 *
 * @function    clientMessage
 * @description Display a `message` in the chat buffer.
 *
 * @param {string} message - the message to display
 *
 * @see {@link print}, {@link ModPE.showTipMessage}
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino/Shell#print.28.5Bexpr_....5D.29
 *
 * @example
 * // you've been warned
 * clientMessage("Don't poke the Zombie Pigmen!!")
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.explode} instead
 *
 * @function    explode
 * @description Cause an explosion of the specified `radius` with the center located at the
 *              specified `x`, `y` and `z` coordinates.
 *
 * @param {double} x      - the x coordinate
 * @param {double} y      - the y coordinate
 * @param {double} z      - the z coordinate
 * @param {double} radius - the radius
 *
 * @example
 * // underground nuclear warhead testing
 * explode(127, 8, 45, 128);
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.getCarriedItem} instead
 *
 * @function    getCarriedItem
 * @description Return the id of the item or block the player is currently holding.
 *
 * @return {int} - the item or block ID
 *
 * @see {@link Player.getCarriedItemCount}, {@link Player.getCarriedItemData}
 *
 * @example
 * // where did I put that ... ?
 * print("You are carrying a " + getCarriedItem() + "!");
 *
 * ***/

/**
 *
 * @todo figure out what this does
 *
 * @deprecated use {@link Level.getAddress} instead
 *
 * @function    getLevel
 * @description __THIS THROWS AN ERROR ON ANDROID; IS IT iOS ONLY???___
 *
 * @return {Object} - __`unknown`__ *
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.getPitch} instead
 *
 * @function    getPitch
 * @description Return the up/down head rotation of the given `entity` (range: \-90 to 90).
 *
 * @param  {entity} [entity = Player] - the entity to query
 * @return {double}                   - the pitch value
 *
 * @see {@link getYaw} for a more detailed example
 *
 * @example
 * // no shoe gazing
 * var pitch = getPitch(Player.getEntity()); // <-- redundant since Player is default
 * if (pitch < -30) {
 *   clientMessage("Keep your head up!!");
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.getEntity} instead
 *
 * @function getPlayerEnt
 * @description Return the player's native entity id (*NOT* the
 *              same as {@link EntityType}).
 *
 * @return {long} - the player's entity id
 *
 * @see {@link getYaw} for a more detailed example
 *
 * @example
 * // suicide is painless...
 * Entity.setHealth(getPlayerEnt(), 0);
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.getX} instead
 *
 * @function    getPlayerX
 * @description Return the player's current x coordinate.
 *
 * @return {double} - the player's x coordinate
 *
 * @example
 * // where in the X am I?
 * var x = Math.round(getPlayerX());
 * ModPE.showTipMessage("Your X coordinate is: " + x);
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.getY} instead
 *
 * @function    getPlayerY
 * @description Return the player's current y coordinate.
 *
 * @return {double} - the player's y coordinate
 *
 * @example
 * // where in the Y am I?
 * var y = Math.round(getPlayerY());
 * ModPE.showTipMessage("Your Y coordinate is: " + y);
 *
 * ***/

/**
 *
 * @deprecated use {@link Player.getZ} instead
 *
 * @function    getPlayerZ
 * @description Return the player's current z coordinate.
 *
 * @return {double} - the player's z coordinate
 *
 * @example
 * // where in the Z am I?
 * var z = Math.round(getPlayerZ());
 * ModPE.showTipMessage("Your Z coordinate is: " + z);
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.getTile} instead
 *
 * @function    getTile
 * @description return the id of the block located at the specified `x`, `y`, and `z` coordinates
 *
 * @param  {int} x - the x coordinate
 * @param  {int} y - the y coordinate
 * @param  {int} z - the z coordinate
 * @return {int}   - the block id
 *
 * @example
 * // what did I just step in?
 * function modTick() {
 *   var x = Math.floor(Player.getX());
 *   var y = Math.floor(Player.getY() - 1.6); // -1.6 = y @ feet, not head
 *   var z = Math.floor(Player.getZ());
 *   var tileId = getTile(x, y, z);
 *   if (tileId > 0 && tileId < 256) {
 *     var poo = Item.getName(tileId, 0, false);
 *     ModPE.showTipMessage("You just stepped in poo! (or " + poo + ")");
 *   }
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.getYaw} instead
 *
 * @function getYaw
 * @description Return the left/right head rotation of the given `entity` (range: -∞ to ∞).
 *
 * @param  {entity} [entity = Player] - the entity to query
 * @return {double}                   - the yaw value
 *
 * @example
 * <caption>Adapted from: {@link http://goo.gl/fcSYaQ|Anti's DebugPE mod}</caption>
 *
 * // determine player's cardinal or intermediate direction
 * function getDirection() {
 *   var player = getPlayerEnt();
 *   var yaw = getYaw(player);
 *   var pitch = getPitch(player);
 *   var direction;
 *
 *   // adjust rotation for yaw < 0 || yaw >= 360
 *   if (yaw < 0) {
 *     setRot(player, yaw + 360, pitch);
 *   } else if (yaw >= 360) {
 *     setRot(player, yaw - 360, pitch);
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
 *
 * ***/

/**
 *
 * @function preventDefault
 * @description Prevent the default action from taking place.
 *
 * @todo get more information about how this works and precisely what it does
 * @todo better example or add explanatory details
 *
 * @example
 * <caption>credit: {@link https://goo.gl/2Ojy4t|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // ???
 * function useItem(x, y, z, itemId, blockId) {
 *   if (itemId === 354) { // cake
 *     teleportToFloor(UPWARD);
 *     preventDefault();
 *   } else if (itemId === 344) { // egg
 *     teleportToFloor(DOWNWARD);
 *     preventDefault();
 *   }
 * }
 *
 * ***/

/**
 *
 * @function print
 * @description Display the given `text` as a pop-up toast message.
 *
 * @param {string} text - the message to be displayed
 *
 * @see {@link clientMessage}, {@link ModPE.showTipMessage}
 *
 * @example
 * // onoz!!
 * print("The creepers are coming!");
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.rideAnimal} instead
 *
 * @function rideAnimal
 * @description Make the specified `rider` entity ride the `target` entity.
 *
 * @param {entity} rider  - the rider
 * @param {entity} target - the target
 *
 * @example
 * <caption>credit: {@link https://goo.gl/ZkEa8H|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // weeeee!
 * var cart = -1;
 * var playerX;
 * var playerZ;
 * var stairBlocks = [53, 67, 108, 109, 114, 128, 134, 135, 136, 156];
 * function useItem(x, y, z, itemid, blockId, side) {
 *   if (stairBlocks.indexOf(blockId) >= 0) {
 *     //spawn a minecart
 *     cart = Level.spawnMob(x + 0.5, y + 1, z + 0.5, 84, "mob/char.png");
 *     //make it invisible
 *     Entity.setRenderType(cart, 0);
 *     rideAnimal(getPlayerEnt(), cart);
 *     preventDefault();
 *     //store the chair's location: that way, when the player gets off, we can remove the cart
 *     playerX = x + 0.5;
 *     playerZ = z + 0.5;
 *   }
 * }
 * function modTick() {
 *   if (cart === -1) return;
 *   if (Math.abs(getPlayerX() - playerX) > 1 || Math.abs(getPlayerZ() - playerZ) > 1) {
 *     Entity.remove(cart);
 *     cart = -1;
 *   }
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.setNightMode} instead
 *
 * @function setNightMode
 * @description Set whether it is night or day.
 *
 * @param {boolean} isNight - night if true, day if false
 *
 * @example
 * // afraid of the dark?
 * if (Level.getTime() >= 18000) {
 *   setNightMode(false);
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setPosition} instead
 *
 * @function setPosition
 * @description Set the location of the specified `entity` to the specified `x`, `y`, `z` coordinates;
 * If attackHook is not used, {@link Player.getEntity()} can be used as the entity parameter
 *
 * @param {entity} entity - the entity to be teleported
 * @param {double} x      - the x coordinate
 * @param {double} y      - the y coordinate
 * @param {double} z      - the z coordinate
 *
 * @example
 * <caption>credit: {@link https://goo.gl/8LAaNU|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // teleporting? check for flies!!
 * var UPWARD = 1;
 * var DOWNWARD = -1;
 * function useItem(x, y, z, itemId, blockId) {
 *   if (itemId === 354) { // cake
 *     teleportToFloor(UPWARD);
 *     preventDefault();
 *   } else if (itemId === 344) { // egg
 *     teleportToFloor(DOWNWARD);
 *     preventDefault();
 *   }
 * }
 * function teleportToFloor(direction) {
 *   var currentX = Math.floor(getPlayerX());
 *   var currentZ = Math.floor(getPlayerZ());
 *   var currentY = Math.floor(getPlayerY() - 1.6); //get player's feet, so subtract 1.6 (player's height)
 *   var beginY = currentY + (direction * 2);
 *   for (var i = beginY; i < 128 && i >= 0; i += direction) {
 *     if (getTile(currentX, i, currentZ) !== 0 && getTile(currentX, i + 1, currentZ) === 0 && getTile(currentX, i + 2, currentZ) === 0) {
 *       var deltaY = (i - currentY);
 *       setPosition(getPlayerEnt(), currentX, getPlayerY() + deltaY + 1, currentZ);
 *       break;
 *     }
 *   }
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setPositionRelative} instead
 *
 * @function setPositionRelative
 * @description Set the location of the specified `entity` relative to the current `x`, `y`, `z` coordinates.
 * If attackHook is not used, {@link Player.getEntity()} should be used as the entity parameter
 *
 * @param {entity} entity - the entity to be teleported
 * @param {double} x - the x coordinate
 * @param {double} y - the y coordinate
 * @param {double} z - the z coordinate
 *
 * @example
 * <caption>credit: {@link https://goo.gl/i1ixVy|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // build vehicles out of blocks, fly them by tapping with an iron hoe
 * function modTick() {
 *   if (vehicleLoc === null || --vehicleSpeed > 0) return;
 *   vehicleSpeed = 5;
 *   for (var x = 0; x < vehicleMaxSize; ++x) {
 *     for (var y = 0; y < vehicleMaxSize; ++y) {
 *       for (var z = 0; z < vehicleMaxSize; ++z) {
 *         if (vehicleBlocks[x][y][z] != 0) {
 *           setTile(vehicleLoc[0] + x, vehicleLoc[1] + y, vehicleLoc[2] + z, 0);
 *         }
 *       }
 *     }
 *   }
 *   vehicleLoc[0] += vehicleVel[0];
 *   vehicleLoc[1] += vehicleVel[1];
 *   vehicleLoc[2] += vehicleVel[2];
 *   for (var x = 0; x < vehicleMaxSize; x++) {
 *     for (var y = 0; y < vehicleMaxSize; y++) {
 *       for (var z = 0; z < vehicleMaxSize; z++) {
 *         if (vehicleBlocks[x][y][z] != 0) {
 *           setTile(vehicleLoc[0] + x, vehicleLoc[1] + y, vehicleLoc[2] + z, vehicleBlocks[x][y][z]);
 *         }
 *       }
 *     }
 *   }
 *   setPositionRelative(getPlayerEnt(), vehicleVel[0], vehicleVel[1], vehicleVel[2]);
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setRot} instead
 *
 * @function setRot
 * @description Set the rotation of the specified `entity`'s head to the specified `yaw` and `pitch`.
 * If attackHook is not used, {@link Player.getEntity()} should be used as the entity parameter.
 *
 * @param {entity} entity - the target entity that will have its head rotation modified
 * @param {double} yaw    - the desired `yaw` of the entity
 * @param {double} pitch  - the desired `pitch` of the entity
 *
 * @see {@link getYaw} for a more detailed example
 *
 * @example
 * // the exorcist
 * var y = 0;
 * while (y <= 360) {
 *   setRot(Player.getEntity(), y, 0);
 *   y++;
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.setTile} instead
 *
 * @function setTile
 * @description Place a tile with the specified `id` and `damage` value at the specified `x`, `y`, `z` coordinates
 *
 * @param {int} x            - the x coordinate for the tile
 * @param {int} y            - the y coordinate for the tile
 * @param {int} z            - the z coordinate for the tile
 * @param {int} id           - the tile id
 * @param {int} [damage = 0] - the tile's damage value
 *
 * @example
 * <caption>credit: {@link https://goo.gl/X4HRNx| 'Chad' via Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // instantly grow a tree when the ground is tapped with an oak sapling.
 * function useItem(x,y,z,itemId,blockId,side) {
 *   if(itemId === 6) {
 *
 *     // creates the trunk of the tree
 *     setTile(x,y,z,17);
 *     setTile(x,y+1,z,17);
 *     setTile(x,y+2,z,17);
 *     setTile(x,y+3,z,17);
 *     setTile(x,y+4,z,17);
 *     setTile(x,y+5,z,17);
 *
 *     // creates the leaves of the tree
 *     setTile(x,y+6,z,18);
 *     setTile(x,y+7,z,18);
 *     setTile(x+1,y+6,z,18);
 *     setTile(x-1,y+6,z,18);
 *     setTile(x,y+6,z+1,18);
 *     setTile(x,y+6,z-1,18);
 *     setTile(x+1,y+5,z,18);
 *     setTile(x-1,y+5,z,18);
 *     setTile(x,y+5,z+1,18);
 *     setTile(x,y+5,z-1,18);
 *     setTile(x+1,y+4,z,18);
 *     setTile(x-1,y+4,z,18);
 *     setTile(x,y+4,z+1,18);
 *     setTile(x,y+4,z-1,18);
 *     setTile(x+1,y+5,z+1,18);
 *     setTile(x-1,y+5,z-1,18);
 *     setTile(x-1,y+5,z+1,18);
 *     setTile(x+1,y+5,z-1,18);
 *     setTile(x+2,y+5,z,18);
 *     setTile(x-2,y+5,z,18);
 *     setTile(x,y+5,z+2,18);
 *     setTile(x,y+5,z-2,18);
 *   }
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setVelX} instead
 *
 * @function setVelX
 * @description Set the specified `entity`'s `velocity` along the X axis.
 *
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 *
 * @example
 * <caption>credit: {@link https://goo.gl/CWKplX|Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // jetpack
 * var playerDir = [0, 0, 0];
 * var DEG_TO_RAD = Math.PI / 180;
 * var playerFlySpeed = 1;
 *
 * function modTick() {
 *   if (getCarriedItem() == 280) {
 *     jetpackTick();
 *   }
 * }
 * function jetpackTick() {
 *   toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
 *   var player = getPlayerEnt();
 *   setVelX(player, playerFlySpeed * playerDir[0]);
 *   setVelY(player, playerFlySpeed * playerDir[1]);
 *   setVelZ(player, playerFlySpeed * playerDir[2]);
 * }
 * function toDirectionalVector(vector, yaw, pitch) {
 *   // see: http://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
 *   vector[0] = Math.cos(yaw) * Math.cos(pitch);
 *   vector[1] = Math.sin(pitch);
 *   vector[2] = Math.sin(yaw) * Math.cos(pitch);
 * }
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setVelY} instead
 *
 * @function setVelY
 * @description Set the specified `entity`'s `velocity` along the Y axis.
 *
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 *
 * @see Example at {@link setVelX}
 *
 * ***/

/**
 *
 * @deprecated use {@link Entity.setVelZ} instead
 *
 * @function setVelZ
 * @description Set the specified `entity`'s `velocity` along the Z axis.
 *
 * @param {entity} entity   - the target entity
 * @param {double} velocity - the desired velocity
 *
 * @see Example at {@link setVelX}
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.spawnChicken} instead
 *
 * @function spawnChicken
 * @description Spawn a chicken entity at the specified `x`, `y`, and `z` coordinates using the specified `skin` image.
 *
 * @param {int} x          - the x coordinate
 * @param {int} y          - the y coordinate
 * @param {int} z          - the z coordinate
 * @param {string} skin    - the skin image path (usually an image found in the
 *                           `../assets/images` folder of the MCPE apk)
 *
 * @see {@link Entity.spawnMob}, {@link Level.spawnMob}, {@link bl_spawnMob}
 *
 * @example
 * <caption>credit: {@link https://goo.gl/byNRuF|'Treebl' via Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // yay! chickens
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
 *
 * ***/

/**
 *
 * @deprecated use {@link Level.spawnCow} instead
 *
 * @function spawnCow
 * @description Spawn a cow entity at the specified `x`, `y`, and `z` coordinates using the specified `skin` image.
 *
 * @param {int} x          - the x coordinate
 * @param {int} y          - the y coordinate
 * @param {int} z          - the z coordinate
 * @param {string} skin    - the skin image path (usually an image found in the
 *                           `../assets/images` folder of the MCPE apk)
 *
 * @see {@link Entity.spawnMob}, {@link Level.spawnMob}, {@link bl_spawnMob}
 *
 * @example
 * <caption>credit: {@link https://goo.gl/byNRuF|'Treebl' via Zhuowei Zhang (500_Internal_Server_Error)}</caption>
 *
 * // moo!
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
 *
 * ***/

/**
 *
 * @function spawnPigZombie
 * @description Spawn a zombie pigman entity at the specified `x`, `y`, and `z` coordinates using the specified `skin` image.
 *
 * The `heldItemId` parameter determines what the zombie pigman will be hold when spawned.
 *
 * @param {int} x          - the x coordinate
 * @param {int} y          - the y coordinate
 * @param {int} z          - the z coordinate
 * @param {int} heldItemId - the id for the held item
 * @param {string} skin    - the skin image path (usually an image found in the
 *                           `../assets/images` folder of the MCPE apk)
 *
 * @see {@link Entity.spawnMob}, {@link Level.spawnMob}, {@link bl_spawnMob}
 *
 * @example
 * // cannibals!!
 * spawnPigZombie(getPlayerX() + 2, getPlayerY(), getPlayerZ() + 2, 320, "mob/char.png");
 *
 * ***/
