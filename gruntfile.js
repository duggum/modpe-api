module.exports = function(grunt) {
  "use strict";
  var config = {
    pkg: grunt.file.readJSON("package.json"),
    clean: {
      docs: {
        src: "./docs"
      }
    },
    jsdoc: {
      dist: {
        src: ["./src"],
        jsdoc: "./node_modules/.bin/jsdoc",
        options: {
          destination: "./docs",
          configure: "./jsdoc.json"
        }
      }
    }
  };
  grunt.initConfig(config);

  // Load task libraries
  [
    'grunt-contrib-clean',
    'grunt-jsdoc',
  ].forEach(function(taskName) {
    grunt.loadNpmTasks(taskName);
  });

  // Definitions of tasks
  grunt.registerTask("default",
    [
      "clean:docs",
      "jsdoc:dist"
    ]
  );
};
