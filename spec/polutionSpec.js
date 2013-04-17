var bloodyGlobalVar = 'lolz';

// Immediately-invoked function expression.
(function() {
  var notGlobalVar = 'That is how u do it!';
})();

describe("Be conscious, take care of the global scope", function() {

  describe("Global variables are attached into the global scope.", function() {

    it("On a browser that means, your variable becomes a property of the 'window' object.", function() {
      expect(bloodyGlobalVar).toBe(window.bloodyGlobalVar);
    });

    it("Immediately-invoked function expressions can solve this problem!", function() {
      expect(window.notGlobalVar).toBe(undefined);
    });
  });
});
