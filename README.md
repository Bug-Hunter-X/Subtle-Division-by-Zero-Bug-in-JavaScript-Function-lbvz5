# Subtle Division by Zero Bug in JavaScript

This repository demonstrates a common, yet easily missed, bug in JavaScript related to division by zero. The `myFunction` attempts to handle division by zero, but it does so incorrectly.

## Bug Description
The `bug.js` file contains a JavaScript function that attempts to prevent division by zero. However, the current implementation returns 0 in such cases. The correct behavior would be to throw an error or handle the zero case appropriately.

## Solution
The `bugSolution.js` demonstrates a corrected version of the function. It explicitly checks for zero values and handles them correctly using a `try-catch` block or conditional statements, thus preventing unexpected behavior.