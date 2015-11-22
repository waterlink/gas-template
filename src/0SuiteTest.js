Suite.test("suite works", function(t) {
  if (2 + 2 != 4) {
    t.error("Expected 2 + 2 to equal 4")
  }
})

Suite.test("multiple tests work too", function(t) {
  if (2 + 3 != 5) {
    t.error("Expected 2 + 3 to equal 5")
  }
})
