describe("coinCombo", function() {
  it("returns the correct amount of quarters", function() {
    expect(coinCombo(50)).to.equal("2Q");
  });

  it("returns the correct amount of dimes", function() {
    expect(coinCombo(35)).to.equal("1Q 1D");
  });

  it("returns the correct amount of nickles", function() {
    expect(coinCombos(40)).to.equal("1Q 1D 1N");
  });
});
