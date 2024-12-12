function myFunction(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // Handle the case where b is 0
  } else if (a === 0) {
    return 0; // Handle the case where a is 0
  } else {
    return a / b;
  }
}
//Alternative using try-catch
function myFunction2(a,b){
  try{
    return a/b
  } catch (error) {
    if(error instanceof TypeError){
       return 0; //Handle the Type Error
    }
    return "Division by Zero";
  }
}