module.exports = function(grunt) {
  "use strict";
  var config = {
    pkg: grunt.file.readJSON("package.json"),
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
  grunt.registerTask("default", ["jsdoc"]);
  grunt.loadNpmTasks("grunt-jsdoc");
};
