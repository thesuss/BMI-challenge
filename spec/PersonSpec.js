
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 50, height: 147});
  });

  it("should have weight of 50", function() {
    expect(person.weight).toEqual(50);
  });

  it("should have height of 147", function() {
    expect(person.height).toEqual(147);
  });
});
