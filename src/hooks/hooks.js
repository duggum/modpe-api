/**
 * @namespace Hooks
 */
function Hooks() {

  /**
   * @lends Hooks.prototype
   */
  var funcs = {
    /**
     * Called when an entity is attacked.
     * @param   {int}     int_attackerId the attacker's id
     * @param   {int}     int_victimId   the victim's id
     */
    attackHook: function(int_attackerId, int_victimId) {},

    /**
     * blockEventHook
     */
    blockEventHook: function(x, y, z, type, data) {},

    /**
     * chatHook
     */
    chatHook: function(text) {},

    /**
     * chatReceiveHook
     */
    chatReceiveHook: function(String_text, String_senderName) {},

    /**
     * deathHook
     */
    deathHook: function(int_attackerId, int_victimId) {},

    /**
     * destroyBlock
     */
    destroyBlock: function(int_x, int_y, int_z, int_side) {},

    /**
     * eatHook
     */
    eatHook: function(hearts, saturationRatio) {},

    /**
     * entityAddedHook
     */
    entityAddedHook: function(int_entityId) {},

    /**
     * entityRemovedHook
     */
    entityRemovedHook: function(int_entityId) {},

    /**
     * explodeHook
     */
    explodeHook: function(entity, x, y, z, power, onFire) {},

    /**
     * leaveGame
     */
    leaveGame: function() {},

    /**
     * levelEventHook
     */
    levelEventHook: function(player, eventType, x, y, z, data) {},

    /**
     * modTick
     */
    modTick: function() {},

    /**
     * newLevel
     */
    newLevel: function() {},

    /**
     * procCmd
     */
    procCmd: function(String_cmd) {},

    /**
     * selectLevelHook
     */
    selectLevelHook: function() {},

    /**
     * serverMessageReceiveHook
     */
    serverMessageReceiveHook: function(String_str) {},

    /**
     * startDestroyBlock
     */
    startDestroyBlock: function(int_x, int_y, int_z, int_side) {},

    /**
     * useItem
     */
    useItem: function(int_x, int_y, int_z, int_itemid, int_blockid, int_side, int_itemDamage, int_blockDamage) {}
  };
  return funcs;
}
