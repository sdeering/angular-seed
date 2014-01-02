'use strict';

describe('Directive: navbar', function () {

  var el
      , scope;

  beforeEach(module('app'));
  beforeEach(module('views/partials/navbar.html'));

  beforeEach(inject(function ($rootScope, $compile) {

    el = angular.element('<navbar ng-controller="NavbarCtrl"></navbar>');
    scope = $rootScope;
    $compile(el)($rootScope);
    scope.$digest();

  }));

  it('should attach a navbar to the page with links', function () {

    var links = el.find('a');
    expect(links.length).toBeGreaterThan(0);

  });

  // it('should set the active link based on the current page', function () {
    // go to login page
    //var loginEl = el.find(a[href="#/login"]).click();
    // expect it's active in the navbar
    //expect(loginEl.toHaveClass('active'))
  // });

});
