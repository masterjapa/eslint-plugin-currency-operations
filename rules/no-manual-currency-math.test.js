// no-manual-currency-math.js

const { RuleTester } = require("eslint");
const noManualCurrencyMath = require("./no-manual-currency-math");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-manual-currency-math", // rule name
  noManualCurrencyMath, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: "const sum = currency(1).add(0.3);",
      },
      // no floating point
      {
        code: "const sum = 1 + 2;",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const sum = 1 + 0.3;",
        errors: 1,
      },
    ],
  }
);

console.log("All tests passed!");
