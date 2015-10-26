A patched version of [JaguarJS-JSDoc](https://github.com/davidshimjs/jaguarjs-jsdoc)
---
JaguarJS-JSDoc is by far the most beautiful JSDoc theme in existence, but unfortuantely it's no longer maintained.

This patched version consists of every PR and every other patch I could find, all mashed together into one giant hideous amalgalm, all in the name of progress.  It seems to work.

Usage
---
1. Install from npm
  ```
  $ npm install jaguarjs-jsdoc-patched --save-dev
  ```

2. Copy the `conf.json` file to the root directory of your repo.  Edit as necessary.

3. Assuming you're using [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc), set the template to `./node_modules/jaguarjs-jsdoc-patched`
  ``` javascript
    grunt.initConfig({
      ..other grunt tasks here..
      jsdoc : {
        dist : {
          src: ['src/*.js', 'README.md'],
          options: {
            destination: 'docs',
            configure : "conf.json",
            template: './node_modules/jaguarjs-jsdoc-patched'
          }
        }
      }
    });
  ```
Other task runners should work similarly.

3. Again assuming you're using grunt-jsdoc, simply run `grunt jsdoc`!


License
---
This project under the MIT License.

