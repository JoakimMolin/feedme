'use strict';

describe('lunch randomizer', function() {
  it('fetches a list of restaurants and displays one of them', function() {
    var alternatives, resultPromise;

    browser.get('/');

    alternatives = ['Loungen', 'Matlåda i köket'];
    resultPromise = element(by.css('h2')).getText();

    resultPromise.then(function(result) {
	    expect(alternatives).toContain(result);
    });
  });
});
