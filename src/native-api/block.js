/**
 * Static methods for the Block API
 * @namespace {Class} Block
 * @example Block.methodName([ arg1[, arg2[, ...argN] ] ]);
 * @see http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/mcpe-mod-tool-discussion/1987726-custom-blocks-tutorial
 * @see https://github.com/Connor4898/ModPE-Scripts/wiki/Custom-blocks
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_blocktest.js
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_enchantingbench.js
 */

/**
 * define a custom block with the specified `id` and attributes
 * @memberof Block
 * @param {int} id                     - a valid, unused block ID between 0
 *                                       and 255 (see: {@link Reference.BlockIds})
 * @param {string} blockName           - the block name
 * @param {Array<string, int>} texture - the texture and offset used to decorate
 *                                       this block
 * @param {int} [materialSource]       - the material (block ID) this block is
 *                                       based on (useful for determining which
 *                                       tool is best used to break your block;
 *                                       see: {@link Reference.BlockIds})
 * @param {boolean} [isOpaque]         - opaque if true, transparent if false
 * @param {int}  [renderType]          - the type of block to render (see:
 *                                       {@link Reference.BlockRenderTypes})
 * @see {@link http://192.168.1.40:8888/textures/|MCPE Textures}
 * @example <caption>credit: {@link https://goo.gl/58zbrm|500 Internal Server Error}</caption>
 * var initialized = false;
 * var ID = 220;
 * // do all this before level is initialized
 * function selectLevelHook() {
 *   if (!initialized) {
 *     // make a Foo Stone
 *     Block.defineBlock(ID, "Foo Stone", ["glass", 0], 1, false, 0);
 *     Block.setDestroyTime(ID, 0);
 *     Block.setLightLevel(ID, 15);
 *     Block.setLightOpacity(ID, 0);
 *     Block.setColor(ID, [0xF5A9D0]);
 *     Block.setRenderLayer(ID, 1);
 *     initialized = true;
 *   }
 * }
 */
function defineBlock(id, blockName, texture, materialSource, isOpaque, renderType) {}

/**
 * return all available block IDs
 * @memberof Block
 * @return {int[]} the block IDs
 */
function getAllBlockIds() {}

/**
 * return the render type (shape) of a block with the specified `id`
 * @memberof Block
 * @param {int} id - the block ID (see: {@link Reference.BlockIds})
 * @return {int} the render type (see: {@link Reference.BlockRenderTypes})
 * @example // print the rendertype for a cactus
 * print(Block.getRenderType(81));
 */
function getRenderType(id) {}

/**
 * set the color of a block with the specified `id` and `color`
 * @memberof Block
 * @param {int} id         - the block ID (see: {@link Reference.BlockIds})
 * @param {number[]} color - a hexadecimal color value in the form: `[0xRRGGBB]`
 * @example
 * // make a block red
 * Block.setColor(220, [0xFF0000])
 * @see {@link http://html-color-codes.info|HTML Color Codes}
 */
function setColor(id, color) {}

/**
 * set the hardness of a block with the specified `id` and `hardness`
 * @memberof Block
 * @param {int} id          - the block ID (see: {@link Reference.BlockIds})
 * @param {double} hardness - the hardness (-1 = unbreakable; destroy time will
 *                            vary depending on tool used)
 * @see {@link http://minecraft.gamepedia.com/Breaking#Blocks_by_hardness|Block Hardness}
 * @example
 * // make Glass Pane unbreakable
 * Block.setDestroyTime(102, -1);
 */
function setDestroyTime(id, hardness) {}

/**
 * set the explosion resistance of a block with the specified `id` and `resistance`
 * @memberof Block
 * @param {int} id            - the block ID (see: {@link Reference.BlockIds})
 * @param {double} resistance - the explosion resistance
 * @see {@link http://minecraft.gamepedia.com/Explosion#Blast_resistance|Blast Resistance}
 * @example
 * // make Gorilla Glass by changing Glass Pane from 1.5 to 6000 (same as obsidian)
 * Block.setExplosionResistance(102, 6000);
 */
function setExplosionResistance(id, resistance) {}

/**
 * set the light level of a block with the specified `id` and `lightLevel`
 * @memberof Block
 * @param {int} id         - the block ID (see: {@link Reference.BlockIds})
 * @param {int} lightLevel - the light level of the block (0-15)
 * @see {@link http://minecraft.gamepedia.com/Light#Brightness|Brightness}
 * @example
 * // tone down that glowstone b
 * Block.setLightLevel(89, 4);
 */
function setLightLevel(id, lightLevel) {}

/**
 * set the light opacity of a block with the specified `id` and `opacity`
 * @memberof Block
 * @param {int} id      - the block ID (see: {@link Reference.BlockIds})
 * @param {int} opacity - the block's opacity to light passing through
 * (0-10 where 0 = most light can pass through, 10 = least light can pass through)
 */
function setLightOpacity(id, opacity) {}

/**
 * set the render layer for a block with the specified `id` and `layer`
 * @memberof Block
 * @param {int} id    - the block ID (see: {@link Reference.BlockIds})
 * @param {int} layer - the render layer [0: opaque, 1: transparent,
 * 2: translucent - __broken?__]
 * @example
 * // render a transparent block
 * Block.setRenderLayer(220, 1);
 * @todo find out if translucent (2) is working
 */
function setRenderLayer(id, layer) {}

/**
 * set the render type for a block with the specified `id` and `type`
 * @memberof Block
 * @param {int} id   - the block ID (see: {@link Reference.BlockIds})
 * @param {int} type - the type of block to render (see:
 *                        {@link Reference.BlockRenderTypes})
 * @example
 * // render custom block with id 220 using the cactus shape
 * Block.setRenderType(220, 13);
 */
function setRenderType(id, type) {}

/**
 * set the size of a block with the specified `id` and start/finish coordinates
 * @memberof Block
 * @param {int} id         - the block ID (see: {@link Reference.BlockIds})
 * @param {double} startX  - the starting x coordinate
 * @param {double} startY  - the starting y coordinate
 * @param {double} startZ  - the starting z coordinate
 * @param {double} finishX - the finishing x coordinate
 * @param {double} finishY - the finishing y coordinate
 * @param {double} finishZ - the finishing z coordinate
 * @example
 * // set the shape of a block to be 1m wide(X) by 1m long(Z) by .75m high(Y)
 * Block.setShape(45, 0, 0, 0, 1, 0.75, 1);
 */
function setShape(id, startX, startY, startZ, finishX, finishY, finishZ) {}
