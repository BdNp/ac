'use strict';

describe('Service: Rules', function () {

  // load the service's module
  beforeEach(module('acApp'));

  // instantiate service
  var Rules;
  beforeEach(inject(function (_Rules_) {
    Rules = _Rules_;
  }));

  it('should do something', function () {
    expect(!!Rules).toBe(true);
  });

});
