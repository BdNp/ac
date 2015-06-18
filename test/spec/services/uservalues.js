'use strict';

describe('Service: userValues', function () {

  // load the service's module
  beforeEach(module('acApp'));

  // instantiate service
  var userValues;
  beforeEach(inject(function (_userValues_) {
    userValues = _userValues_;
  }));

  it('should do something', function () {
    expect(!!userValues).toBe(true);
  });

});
