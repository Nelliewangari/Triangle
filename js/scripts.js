if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
  alert("all sides must be numerical");
} else if (sideOne >= (sideTwo + sideThree) || sideTwo >= (sideThree + sideOne) || sideThree >= (sideOne + sideTwo)) {
  alert("This is not a valid triangle");
} else if (sideOne===sideTwo && sideTwo===sideThree) {
  return "equilateral";
} else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
  return "isosceles";
} else if (sideOne!=sideTwo && sideOne!=sideThree) {
  return "scalene";
if (sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)) {
  if (sideOne===sideTwo && sideTwo===sideThree) {
    return "equilateral";
  } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
    return "isosceles";
  } else {
    return "scalene";
  }
} else {
  return sides;
  return "These sides do not a triangle make.";
}
};
