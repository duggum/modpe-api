# NOTICE:

### I am working on a new JSDoc Template that better suits my needs for documenting the ModPE API. This proiject will not be worked until I am able to complete the new template. Sorry for the delay!

---

# Documentation for the ModPE API

#### v0.0.3
[![Build Status](https://travis-ci.org/duggum/modpe-api.svg?branch=master)][travis]

[travis]: https://travis-ci.org/duggum/modpe-api "Travis CI Build Status"

## Version Compatibility

- Minecraft Pocket Edition: `0.13.0`
- BlockLauncher Pro: `1.11.1-b5`  

## References Documentation
- {@tutorial data-values}
- {@tutorial textures}

## Helpful Stuff
- [Sublime Text Completions](https://gist.github.com/duggum/bce10dfa0adb49e71315)

## TODO
#### General
- improve code examples where necessary
- tutorials and script examples
- make sure to credit all sources of code and docs
- ~~separate references into tutorials/help section (block IDs, block render types, textures, etc...)~~
- improve README

#### Global Namespace
- `getLevel`: what does this do? iOS only?
- `preventDefault`: need more info on what it does and a better example with explanatory details

#### Hooks
- fine tune examples and function/parameter descriptions

#### Block API
- `Block.setRenderLayer`: does translucency work (layer 2)?

#### Entity API
- still lots to do

#### Item API
- done, including new `Item.setProperties()`

#### Level API
- `Level.addParticle`: better description of how velocity settings work
- `Level.getAddress`: what does this do? iOS only?

#### ModPE API
- almost everything

#### Player API
- almost everything

#### Renderer API
- everything
- is this a valid API?

#### Server API
- done except for fine tuning & better examples

## Graphics Credits

#### Minecraft Block
&emsp;[Minecraft Block][block]
&emsp;From: [Vector.me][Vector.me] (by Tavin)

## Font License Info

#### Minecrafter Font
&emsp;Copyright &copy; 2014 by MadPixel Designs  
&emsp;Author:   MadPixel Designs  
&emsp;License:  [CC](http://creativecommons.org/licenses)  
&emsp;Homepage: [dafont](http://www.dafont.com/minecrafter.font)

#### Glyphicons Halflings
&emsp;From [Bootstrap Components][bs]:
> ". . . Glyphicons Halflings are normally not available for free, but their  
> creator has made them available for Bootstrap free of cost. As a thank you,  
> we only ask that you include a link back to [Glyphicons][glyphicons] whenever possible."

#### Entypo
&emsp;Copyright &copy; 2012 by Daniel Bruce  
&emsp;Author:   Daniel Bruce  
&emsp;License:  [SIL][sil]  
&emsp;Homepage: [Entypo][entypo]

#### Font Awesome
&emsp;Copyright &copy; 2012 by Dave Gandy  
&emsp;Author:    Dave Gandy  
&emsp;License:   [SIL][sil]  
&emsp;Homepage:  [Font Awesome][font_awesome]

#### Modern Pictograms
&emsp;Copyright &copy; 2012 by John Caserta. All rights reserved.  
&emsp;Author:    John Caserta  
&emsp;License:   [SIL][sil]  
&emsp;Homepage:  [Modern Pictograms][modern_picts]

#### Web Symbols
&emsp;Copyright &copy; 2011 by Just Be Nice studio. All rights reserved.  
&emsp;Author:    Just Be Nice studio  
&emsp;License:   [SIL][sil]  
&emsp;Homepage:  [Web Symbols][web_symbols]

[block]: http://vector.me/browse/286710/minecraft_block "Minecraft Block"
[vector.me]: http://vector.me "Vector.me"
[bs]: http://getbootstrap.com/components/ "Bootstrap Components"
[sil]: http://scripts.sil.org/OFL "SIL Open Font License"
[glyphicons]: http://glyphicons.com "Glyphicons Halflings"
[entypo]: http://www.entypo.com "Entypo"
[font_awesome]: http://fortawesome.github.com/Font-Awesome/ "Font Awesome"
[modern_picts]: http://thedesignoffice.org/project/modern-pictograms/ "Modern Pictograms"
[web_symbols]: http://www.justbenice.ru/studio/websymbols "Web Symbols"

