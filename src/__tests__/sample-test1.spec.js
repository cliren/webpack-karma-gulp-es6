require('../vendor/select2');
describe("Test1", function() {
  beforeEach(function() {
    spyOn($.fn, 'select2');
  });

  it("one...", function() {
    expect('').toBe('');
  });

});
