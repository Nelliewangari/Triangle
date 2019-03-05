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
var response = [equilateral, scalene, isosceles, other];
if( a+b>c && a+c>b && b+c>a ){
  if(a==b && b==c && a==c){
    text = "values you entered will make an equilateral triangle.";
    text = result[0];
  }else if (a!=b && b!=c && a!=c) {
    text = " values you entered will make a scalene triangle.";
    text = result1];
  }else{
    text = " values you entered will make an isosceles triangle.";
    text = result[2];
  }
}else{
  text = "values you entered will not make a triangle.";
  text = result[3];
}
