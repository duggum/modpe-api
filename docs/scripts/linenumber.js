/**
 * Static methods for the Block API
 * @namespace {Class} Block
 * @example Block.methodName([ arg1[, arg2[, ...argN] ] ]);
 * @see http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/mcpe-mod-tool-discussion/1987726-custom-blocks-tutorial
 * @see https://github.com/Connor4898/ModPE-Scripts/wiki/Custom-blocks
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_blocktest.js
 * @see https://github.com/zhuowei/ModPEScripts/blob/master/500ise_enchantingbench.js
 */

(function() {
  window.addEventListener('load', function () {
    try {
      var counter = 0;
      var numbered;
      var source = document.getElementsByClassName('hljs');

      if (source && source[0]) {
          var linenums = config.linenums;

          if (linenums) {
              source = source[0].getElementsByTagName('ol')[0];

              numbered = Array.prototype.slice.apply(source.children);
              numbered = numbered.map(function(item) {
                  counter++;
                  item.id = 'line' + counter;
              });
          }
          //  else {
          //     source = source[0].getElementsByTagName('code')[0];

          //     numbered = source.innerHTML.split('\n');
          //     numbered = numbered.map(function(item) {
          //         counter++;
          //         return '<span id="line' + counter + '"></span>' + item;
          //     });

          //     source.innerHTML = numbered.join('\n');
          // }
      }
    } catch (e) {
      console.error('LineNumbers error: ', e);
    }
  });
})();
