/**
    @overview Define custom tags for ModPE API Documents
    @module   custom_tags
    @author   Dave Jopson <duggum@duggum.com>
 */
'use strict';

exports.defineTags = function(dictionary) {

  // dictionary.defineTag('hook', {
  //   onTagged: function(doclet, tag) {
  //     doclet.addTag('function', tag.value);
  //     doclet.scope = "instance";
  //     doclet.memberof = "Hooks";
  //   }
  // });

  // dictionary.defineTag('enumeration', {
  //   onTagged: function(doclet, tag) {
  //     doclet.addTag('kind', 'enumeration');
  //     doclet.filename = doclet.name;
  //   }
  // });

  // dictionary.defineTag('performance', {
  //   mustHaveValue: true,
  //   onTagged: function(doclet, tag) {
  //     if (!doclet.performance) { doclet.performance = []; }
  //     doclet.performance.push(tag.value);
  //   }
  // });

  // dictionary.defineTag('glsl', {
  //   onTagged: function(doclet, tag) {
  //     doclet.addTag('kind', 'glsl');
  //     doclet.filename = doclet.name;
  //   }
  // }).synonym('glslStruct').synonym('glslUniform').synonym('glslConstant').synonym('glslFunction');
};
