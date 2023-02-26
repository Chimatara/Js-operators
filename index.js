//QUESTION 3

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing' ;
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';
let otherGroup = generalSubjects

let myDept = 'Arts Department';

if (myDept = 'Arts Department' ) {
     console.log("Below are the list of Art Subjects " + artSubjects + "" + generalSubjects)
}
else if (otherGroup >= noGroup)
  console.log(generalSubjects)
else {
 console.log (generalSubjects)
}
console.log(myDept);
console.log(artSubjects);


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
  

  // ROUGH WORK LOL
  for (let i = 1; i < 20; i += 7 ) {
    console.log(i);
  }