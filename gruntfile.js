module.exports = function(grunt) {
  "use strict";
  var config = {

    jsdoc: {
      dist: {
        src: [ "./src" ],
        jsdoc: "./node_modules/.bin/jsdoc",
        options: {
          destination : "./jsdoc",
          configure   : "./jsdoc.json"
        }
      }
    }
  };
  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-jsdoc");
  grunt.registerTask("default", ["jsdoc"]);
};
