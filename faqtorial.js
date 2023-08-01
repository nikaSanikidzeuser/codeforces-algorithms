function factorialize(num) {
 
    var result = num;

    if (num === 0 || num === 1) 
      return 1; 
   while(num > 1){
    num--;
    result = result * num;
   }

    return result; 
  }
  console.log(factorialize(6));