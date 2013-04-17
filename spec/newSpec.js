function User(name, age) {
  this.name = name;
  this.age = age;
}

describe("The 'new' way of doing it", function() {

  it("JavaScript provides a Java-ish syntax for objects usage (o.O)", function() {
    var jose = new User('Jose', 30);

    expect(typeof jose).toBe('object')
    expect(jose.name).toBe('Jose');
    expect(jose.age).toBe(30);
  });

  it("What if I forget the 'new' keyword?", function() {
    throw 'Not yet implemented';
  });
});
