'use strict';

describe("lunch randomizer", function() {
  it("fetches a list of restaurants and displays one of them", function() {
    browser.get('/');

    expect(element(by.css("h2")).getText()).toEqual("Loungen");
  });
});
