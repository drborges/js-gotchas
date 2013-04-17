describe('Why should you learn the bad parts of the language?', function() {

  describe('Numbers are just "Number"', function() {

    it("typeof 2 == 'number'", function() {
      expect(typeof(2)).toBe('number');
    });

    it("typeof -2 == 'number'", function() {
      expect(typeof(-2)).toBe('number');
    });

    it("typeof 2.3 == 'number'", function() {
      expect(typeof(2.3)).toBe('number');
    });

    describe("Even extra large/small numbers are just 'number'", function() {

      it("typeof 123e5 == 'number'", function() {
        expect(typeof(123e5)).toBe('number');
      });

      it("typeof 123e-5 == 'number'", function() {
        expect(typeof(123e-5)).toBe('number');
      });
    });

    describe('But watch it closely...', function() {

      it('2/Infinity == 0 as expected', function() {
        expect(2/Infinity).toBe(0);
      });

      it("Infinity/Infinity is NaN", function() {
        expect(isNaN(Infinity/Infinity)).toBeTruthy();
      });

      it('But for some sort of greater power, or just because, Infinity/Infinity != NaN', function() {
        expect(Infinity/Infinity).not.toBe(NaN);  
      });

      it("And as if all this were not enough, typeof NaN == 'number'", function() {
        expect(typeof NaN).toBe('number'); 
      });
    });
  });

  describe('Boolean literals are "in da house"', function() {

    it('true for truthness', function() {
      expect(typeof(true)).toBe('boolean');
    });

    it('false for falseness', function() {
      expect(typeof(false)).toBe('boolean');
    });

    describe("Moreover, expressions can also be used in a logical scope, thanks to type coercion, so watch out 'cause", function() {

      it('0 == false', function() {
        expect(0 == false).toBeTruthy();
      });

      it("'0' == false", function() {
        expect('0' == false).toBeTruthy();
      });

      it("'' == false", function() {
        expect('' == false).toBeTruthy();
      });

      it("'' == 0", function() {
        expect('' == 0).toBeTruthy();
      });

    });

    describe("However...", function() {

      it("'' != '0'", function() {
        expect('' != '0').toBeTruthy();
      });

      it("false != 'false'", function() {
        expect(false != 'false').toBeTruthy();
      });

      it('false != undefined', function() {
        expect(false != undefined).toBeTruthy();
      });
    });

    describe("And just because it couldn't be that simple...", function() {

      it("null == undefined", function() {
        expect(null == undefined).toBeTruthy();
      });

      it("despite the fact that: typeof null == 'object'", function() {
        expect(typeof null == 'object').toBeTruthy();
      });

      it("typeof undefined == 'undefined'", function() {
        expect(typeof undefined == 'undefined').toBeTruthy();
      });

      it("and even though [] == 0", function() {
        expect([] == 0).toBeTruthy();
      });

      it("{} != 0", function() {
        expect({} != 0).toBeTruthy();
      });

      it("nonetheless: typeof [] == typeof {} == 'object'", function() {
        expect(typeof []).toBe(typeof {});
      });
    });
  });

  describe('Fill in the blanks :)', function () {

    it('typeof ({} + []) is ___?', function() {
      throw 'Not yet implemented';
    });

    it ("typeof + '' is ___", function() {
      throw 'Not yet implemented';
    });
  });

  describe('Use "!==" over "!=", and "===" over "==", if you need to avoid type coercion', function() {

    it("'' !== '0'", function() {
      expect('' !== '0').toBeTruthy();
    });
    
    it("0 !== ''", function() {
      expect(0 !== '').toBeTruthy();
    });
    
    it("0 !== '0'", function() {
      expect(0 !== '0').toBeTruthy();
    });
    
    it("false !== 'false'", function() {
      expect(false !== 'false').toBeTruthy();
    });
    
    it("false !== '0'", function() {
      expect(false !== '0').toBeTruthy();
    });
    
    it("null !== undefined", function() {
      expect(null !== undefined).toBeTruthy();
    });

    describe("Type coercion don't have to be a big deal though...", function() {
    
      it("Given: var a = ''; then !!a is: ___", function() {
        var a = '';
        throw 'Not yet implemented';
      });

      it("Given: var obj; then !!obj is: ___", function() {
        var obj;
        throw 'Not yet implemented';
      });
    });
  });
});
