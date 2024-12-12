function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle 0 individually
  } else {
    return a / b; 
  }
}