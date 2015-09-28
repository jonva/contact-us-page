'use strict';

describe('Service: carousel', function () {

  // load the service's module
  beforeEach(module('sapientApp'));

  // instantiate service
  var carousel;
  beforeEach(inject(function (_carousel_) {
    carousel = _carousel_;
  }));

  it('should do something', function () {
    expect(!!carousel).toBe(true);
  });

});
