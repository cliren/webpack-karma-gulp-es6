require('../vendor/select2');
describe("Test2", function() {
  beforeEach(function() {
    spyOn($.fn, 'select2');
  });

  it("two...", function() {
    expect('').toBe('');
  });

});
