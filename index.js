// QUESTION 5

function nearestPowerOf2(num) {
    if (num < 1) {
      return null; 
    }
    
    let power = 0;
    while (2 ** power <= num) {
      power++;
    }
    
    const lowerPower = power - 1;
    const lowerDiff = num - (2 ** lowerPower);
    const higherDiff = (2 ** power) - num;
    
    if (lowerDiff < higherDiff) {
      return 2 ** lowerPower;
    } else {
      return 2 ** power;
    }
  }
  