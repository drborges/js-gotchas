function fn() { return this; }
var globalThis = this;

describe("'this' can be that, or not even that!", function() {

  it("this in the global scope points out to the 'window' object.", function() {
    expect(globalThis).toBe(window);  
  });

  describe("Think of 'this' as a context", function() {
    describe("Within a function, 'this' means the context where the function was declared.", function() {
      it("Compare the return of the global function fn and the variable globalThis, what's the outcome?", function() {
        throw 'Not yet implemented';
      });

      it("What should 'this' be within this test case?", function() {
        throw 'Not yet implemented';
      });
    });
  });

  describe("Functions can have different 'these' depending on how you invoke them...", function() {
    var partyFinder = {
      partyPlace: 'in my pants, bitch!',
    whereIsTheParty: function (name) {
      return name + ' says: the party tonight is gonna be ' + this.partyPlace;
    }
    };

    it("Normally invoking a function, i.e. fn()", function() {
      expect(partyFinder.whereIsTheParty('Lipe')).toBe('Lipe says: the party tonight is gonna be in my pants, bitch!');
    });

    it("Invoking a function through fn.call(thisArg [, arg1 [, arg2 [, ...]]])", function() {
      var context = { partyPlace: 'Onde mais Robin? eh claro que eh no ...!' };
      var message = partyFinder.whereIsTheParty.call(context, 'Batman');
      expect(message).toBe('Batman says: the party tonight is gonna be Onde mais Robin? eh claro que eh no ...!');
    });

    it("Invoking a function through fn.apply(thisArg [, args]) you get the same outcome as fn.call", function() {
      var context = { partyPlace: 'Onde mais Robin? eh claro que eh no ...!' };
      var message = partyFinder.whereIsTheParty.apply(context, ['Batman']);
      expect(message).toBe('Batman says: the party tonight is gonna be Onde mais Robin? eh claro que eh no ...!');
    });

    it("You can also create a new function binding a brand new 'context' to it using fn.bind(thisArg)", function() {
      var context = { partyPlace: 'at CabareEeEeEet!' };
      var brandNewPartyFinder = partyFinder.whereIsTheParty.bind(context);
      var message = brandNewPartyFinder('Dani');
      expect(message).toBe('Dani says: the party tonight is gonna be at CabareEeEeEet!');
    });
  });

  describe("Please fix me!! <o>", function() {
    var o;

    beforeEach(function() {
      spyOn(console, 'log');

      o = {
        f1: function() {
          console.log('hi');
        },
        f2: function() {
          this.f1();
        }
      };

      o.f2.prototype.f1 = function() {
       console.log('bye');
      }
    });

    it("what does console.log outputs when: new o.f2()", function() {
      new o.f2();
      throw 'Implement me!'
    });

    it("what does console.log outputs when: o.f2.apply(k)", function() {
      var k = {
        f1: function() {
          console.log('pfff');
        }
      }
      o.f2.apply(k);
      throw 'Implement me!'
    });

    it("what does console.log outputs when: o.f2();", function() {
      o.f2();
      throw 'Implement me!'
    });
  });
});
