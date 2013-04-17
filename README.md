ThoughtWorks Porto Alegre, Brazil: JavaScript Study Group
=========================================================
> Most programming languages contain good parts and bad parts.
> I discovered that I could be a better programmer by using only the good parts
> and avoiding the bad parts. After all, how can you build something good
> out of bad parts?

Douglas Crockford, from his book JavaScript: The Good Parts

This first meet up will focus on basic topics regarding the internals of the
language that are very often misunderstood, leading to interesting and tricky
scenarios.

Ideally this repository will grow organically based on contribution
from people interested, and willing to help, making of this a rich source of
knowledge about javascript language and its gotchas.

1. spec/introSpec.js: Why should you learn the bad parts of the language?

2. spec/polutionSpec.js: Global Namespace polution
  * The window object
  * Immediately-invoked function expression

3. spec/newSpec.js: The "new" way of doing it
  * Function constructor vs Function factory

4. spec/thisSpec.js: "this" can be that, or not even that!

5. spec/hoistingSpec.js: Variable Hoisting, who?!

6. spec/scopesSpec.js: Scopes - Closure does as much good as blocks

Tips
-----
  * Never polute the global namespace
  * Avoid 'this' and 'new' as much as you can
  * use === over == and its similars
  * Be declarative, instead of programmatic
  * Stop doing Java in JavaScript for the sake of Mozair! He will hunt you down

References
----------
  * [Mozilla: Re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/A_re-introduction_to_JavaScript)
  * [SuperHero.js](http://superherojs.com) - Highly recomended.
  * [Extravaganza - By Mozair](http://macskeptic.com/scrap/extravaganza-day1/extravaganza-day1.html)
  * [Perdido is Lost](http://luizfar.wordpress.com/2012/04/28/dont-use-this-in-javascript/#more-423)
  * [Common JavaScript "Gotchas"](http://www.jblotus.com/2013/01/13/common-javascript-gotchas)
  * [Preparing Yourself for Modern JavaScript Development](http://www.codethinked.com/preparing-yourself-for-modern-javascript-development)
