


  const one = {
    name: "sumit",
  };

  // Create a copy of 'one' to avoid modifying the original object
  const obj = one;
  obj.name = "shubham"; // Correctly modify the 'name' property in the copy

  console.log(one); // Original object remains unchanged
  console.log(obj); // Modified copy

 


