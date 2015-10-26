/*
global
  exports, require, defineTag
 */
/**
 * @author Dave Jopson <duggum@duggum.com>
 */
"use strict";

var logger = require("jsdoc/util/logger");

exports.defineTags = function(dictionary) {
  dictionary.defineTag("staticclass", {
    onTagged: function(doclet, tag) {
      doclet.addTag("kind", "staticclass");
      if (tag.value && tag.value.name) {
          doclet.addTag('name', tag.value.name);
      }
    }
  });
};
