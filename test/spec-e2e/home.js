describe('homepage', function() {

  var ptor = protractor.getInstance();

  it('should load the homepage and say hello', function() {
    ptor.get('/#');
    expect(ptor.findElement(protractor.By.id('welcome-msg')).getText()).toContain('Hello');
  });

});
