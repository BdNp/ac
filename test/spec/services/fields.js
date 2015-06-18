'use strict';

describe('Service: Fields', function () {

  // load the service's module
  beforeEach(module('acApp'));

  // instantiate service
  var Fields;
  beforeEach(inject(function (_Fields_) {
    Fields = _Fields_;
  }));

  it('should do something', function () {
    expect(!!Fields).toBe(true);
  });

});
