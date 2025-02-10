// no-manual-currency-math.js

// Helper function to determine if a number is a floating-point number
const isFloatingPoint = (node) => {
  // Check for a literal node that is a floating-point number
  if (
    node.type === "Literal" &&
    typeof node.value === "number" &&
    node.value % 1 !== 0
  ) {
    return true; // It's a floating-point number
  }

  // If the node is a BinaryExpression, check the operands recursively
  if (node.type === "BinaryExpression") {
    return isFloatingPoint(node.left) || isFloatingPoint(node.right);
  }

  return false; // It's not a floating-point number
};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow manual math operations on floating point numbers to avoid weird outputs.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null, // Set to null since we are not providing auto-fixes
    schema: [],
  },

  create(context) {
    return {
      // Check for binary operations like +, -, *, /
      BinaryExpression(node) {
        // Only handle arithmetic operations (+, -, *, /)
        if (
          node.operator === "+" ||
          node.operator === "-" ||
          node.operator === "*" ||
          node.operator === "/"
        ) {
          // Check if either operand is a floating-point number
          if (isFloatingPoint(node.left) || isFloatingPoint(node.right)) {
            context.report({
              node,
              message:
                "Do not use manual math operations on floating point numbers. Prefer to use a library such as Currency.js.",
            });
          }
        }
      },
    };
  },
};
