if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
  alert("this is a Triangle");
} else if (sideOne >= (sideTwo + sideThree) || sideTwo >= (sideThree + sideOne) || sideThree >= (sideOne + sideTwo)) {
  alert("This is not triangle");
} else if (sideOne===sideTwo && sideTwo===sideThree) {
  alert"equilateral";
} else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
  alert "isosceles";
} else if (sideOne!=sideTwo && sideOne!=sideThree) {
  alert"scalene";
};
