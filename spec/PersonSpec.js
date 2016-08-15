
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({name: "Suss", weight: 50, height: 147});
  });

  it("should have weight of 50", function() {
    expect(person.weight).toEqual(50);
  });

  it("should have height of 147", function() {
    expect(person.height).toEqual(147);
  });

  it("should have a name of Suss", function() {
    expect(person.name).toEqual("Suss");
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi("metric");
    expect(person.bmiValue).toEqual(23.14)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi("metric");
    expect(person.bmiMessage).toEqual(person.name + " - You are of normal BMI")
  });

});
