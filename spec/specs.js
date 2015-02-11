describe("coinCombo", function() {
  it("returns the correct amount of quarters", function() {
    expect(coinCombo(50)).to.eql([ 2, 0, 0, 0 ]);
  });

  it("returns the correct amount of dimes", function() {
    expect(coinCombo(35)).to.eql([ 1, 1, 0, 0 ]);
  });

  it("returns the correct amount of nickles", function() {
    expect(coinCombo(40)).to.eql([ 1, 1, 1, 0 ]);
  });

  it("returns the correct amount of pennies", function() {
    expect(coinCombo(99)).to.eql([ 3, 2, 0, 4 ]);
  });
});
