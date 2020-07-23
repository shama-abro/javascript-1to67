        //chapter  1

//task 1 task 2

// alert("error!please enter your valid!");
// document.write

//task3

//alert("welcome to JS Land \n Happy Coding"

//task 4

//var a=("welcome to JS Land")
//alert(a);
//var b= ("Happy Coding!")
//var c=("prevent this page from creating additional dialog!")
//var d=(b+ "\n"+c)
//alert(d);

//task5

//var a=("hello....")
//var b=("i can run js through my web browser's console")
//var c=(a+"\n"+ b)
//alert(c);
//console.log(c)


//TASK NO 6  

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Javascrip Script Tag Demo</title>
//     
// </head>
// <body>
// <h1>Practise Of script Tags</h1>
// <script>
// alert("Working on new file");
// </script>
// </body>
// </html>


// Chapter No 4 

//TASK NO 1 

// var name="ali",age=19,addr="karachi";

//TASK NO 2 

// 5 Legel Vaiables

// var _product = "pepsi";
// var  $price = 100;
// var qty = 13;
// var total= 1300;
// var Buyer = "shama Ali";

// 5 Illeegel Vaiables

// var class = "ali";
// var 12var = "not";
// var true = "khalid";
// var %gate = "done";
// var -plus = "100";

//TASK NO 3 
// var heading = "<h1>Rules for naming JS variables<h1>";
// var mcq1 = "Variable names can only contains,letter, numbers, $ and _ . For example: $my_1stVariable<br>";
// var mcq2 = "Variable names begin with a letter, $ or _ . For example: $name, _name or name<br>";
// var mcq3 = "Variable names are case sensitive<br>";
// var mcq4 = "Variable names should not be the JS keyword<br>";
// document.write(heading+mcq1+mcq2+mcq3+mcq4);


// Chapter No 2 

//TASK NO 1 

// var num1 = 3;
// var num2 = 5;
// var sum = num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);

//TASK NO 2 

// Subtraction 
// var a = 3;
// var b = 5;
// var subtract = a-b;
// document.write("Subtraction of "+a+" and "+b+" is "+subtract);

// Multipplication 
//  var a = 3;
//  var b = 5;
//  var multiply = a*b;
//  document.write("Multiplication of "+num1+" and "+num2+" is "+multiply);

// Division
//  var a = 3;
//  var b = 5;
//  var multiply = a/b;
//  document.write("Division of "+a+" and "+b+" is "+multiply);

//TASK NO 3
// var x;
// document.write("Value agter variable declaration is "+ x+"<br>");
// x = 5;
// document.write("Initial value :"+x+"<br>");
// ++x;
// document.write("Value after increment is : "+x+"<br>");
// x+= 7;
// document.write("Value after addition is : "+x+"<br>");
// x--;
// document.write("Value after decrement is : "+x+"<br>");
// var remainder = x %  3;
// document.write("Value after decrement is : "+remainder+"<br>");

//TASK NO 4

// var tickPrice = 600;
// var tickQty = 5;
// var tickBill = tickPrice*tickQty;
// document.write("Total cost to buy "+tickQty+" tickets to a movie is "+tickBill+"PKR.");

//TASK NO 5

// var table = 4;
// document.write("Table of "+table)
// for (let i = 0; i <= 10; i++) {
//     var answer = table*i 
//     document.write(table+"x"+i+"="+answer+"<br>")
// }

//TASK NO 6

// var celsiusTemp = 25;
// var convertFerhenheit = (celsiusTemp*9/5)+32;
// document.write(celsiusTemp+"<sup>o</sup>C is "+convertFerhenheit+"<sup>o</sup>F<br>");
// var fahrenheitTemperature = 70;
// var convertCelcius = (fahrenheitTemperature - 32)*5/9;
// document.write(fahrenheitTemperature+"<sup>o</sup>F is "+convertCelcius+"<sup>o</sup>C");


//TASK NO 7

// var itemPrice1 = 650;
// var itemPrice2 = 100;
// var qtyItem1 = 3;
// var qtyItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (itemPrice1*qtyItem1)+(itemPrice2*qtyItem2)+shippingCharges;
// document.write("price of item 1 is "+ itemPrice1+"<br>");
// document.write("Quantity of item 1 is "+ qtyItem1+"<br>");
// document.write("price of item 2 is "+ itemPrice2+"<br>");
// document.write("price of item 2 is "+ qtyItem2+"<br>");
// document.write("Shipping Charges is "+ shippingCharges+"<br><br>");
// document.write("Total Cost of your order is "+ totalCost);

//TASK NO 8

// var totalMark = 980;
// var obtainedMark = 808;
// var percentage = (obtainedMark/totalMark)*100;
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks: "+totalMark+"<br>");
// document.write("Marks obtained:"+obtainedMark+"<br>");
// document.write("Percentage :"+totalMark+"<br>");

//TASK NO 9

// var totalCurrency = (10*104.80)+(25*28);
// document.write("<h1>Currency in PKR</h1><br>")
// document.write("Total Currency in PKR is:"+ totalCurrency);

//TASK NO 10

// var Num = ((10 + 5 )*10) / 2;

//TASK NO 11

// var currentYear = new Date().getFullYear();
// var userBirthYear = 1992;
// var age = currentYear - userBirthYear;
// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year : "+currentYear+"<br>");
// document.write("Birth Year : "+userBirthYear+"<br>");
// document.write("Your Age is : "+age+"<br>");

//TASK NO 12

// var circleRadius = 20;
// var pie = 3.142;
// var radiusSquare = Math.pow(circleRadius,2);
// var circumference = 2*(pie*circleRadius);
// var area = pie*radiusSquare;
// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle is: "+circleRadius+"<br>");
// document.write("Circumference  is: "+circumference+"<br>");
// document.write("Area is: "+area+"<br>");

//TASK NO 13

// var snackName = "Kurleez";
// var currentAge = 14;
// var maxAge = 70;
// var snackPerDay = 3;
// var reqSnack = ((maxAge-currentAge)*365)*3;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: "+snackName+"<br>");        
// document.write("Current Age: "+currentAge+"<br>");
// document.write("Estimated Maximum Age: "+maxAge+"<br>");
// document.write("Amount of snack per day: "+snackPerDay+"<br>");
// document.write("You will need "+reqSnack+" "+snackName+" to last you until the rip old age of: "+maxAge);

// Chapter No 6-9 

//TASK NO 1  

// var a = 10;
// document.write("Result: <br> The value of a is "+a+"<br>");
// document.write("----------------------------------"+"<br>");
// document.write("The value of ++a is "+ ++a+"<br>");
// document.write("The Now value of a is "+ a+"<br><br>");
// document.write("The value of a++ is "+ a++ +"<br>");
// document.write("The Now value of a is "+ a +"<br><br>");
// document.write("The value of --a is "+ --a +"<br>");
// document.write("The Now value of a is "+ a +"<br><br>");
// document.write("The value of a-- is "+ a-- +"<br>");
// document.write("The Now value of a is "+ a +"<br><br>");

//TASK NO 2  

//  1 (--a)
// var a  = 1 (a will be 1);

//  2 (--a - --b)
// --a will be 1 - --b will be 0
// result wull be 1

//  3 (--a - --b + ++b);
// --a will be 1 - --b will be 0 + ++b will be 1
// result wull be 1

//  4 (--a - --b + ++b + b++);
// --a will be 1 - --b will be 0 + ++b will be 1 + b++ will be 1 
// result wull be 3


//TASK NO 3  

// var userName = prompt("Please Enter Your Name");
// document.write("Welcome to our website Mr. "+userName);

//TASK NO 5  

// var tableNum  = prompt("Enter the Table Number ?") || 5;
// document.write("The table of "+tableNum+" is: <br>");
// for (let i = 1; i <= 10; i++) {
//     var answer = tableNum*i 
//     document.write(tableNum+"x"+i+"="+answer+"<br>")
// }

//TASK NO 6  

// var subject1 = prompt("Enter thr subject 1 Name");
// var subject2 = prompt("Enter the subject 2 Name");
// var subject3 = prompt("Enter the subject 3 Name");
// var totalMarks = 100;
// var grandTotalMarks = 300;
// var subMark1 = prompt("Enter the "+ subject1 +" Marks");
// var subMark2 = prompt("Enter the "+ subject2 +" Marks");
// var subMark3 = prompt("Enter the "+ subject3 +" Marks");
// var totalObtMarks = Number(subMark1)+Number(subMark2)+Number(subMark3);
// var percentTotalMarks = totalObtMarks/totalMarks*100;
// var percentSub1 = Number(subMark1) / Number(totalMarks) * 100 +"%";
// var percentSub2 = Number(subMark2) / Number(totalMarks) * 100+"%";
// var percentSub3 = Number(subMark3) / Number(totalMarks) * 100+"%";
// var totalObtPercent = totalObtMarks/grandTotalMarks*100+"%";
// document.write("<h1>Subject Total Marks Obtained MArks Percentage</h1>")
// document.write(`
//     <table>
//     <tbody>
//     <tr>
//     <th>Subject</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
//     </tr>
//     <tr>
//     <td>${subject1}</td>
//     <td>${totalMarks}</td>
//     <td>${subMark1}</td>
//     <td>${percentSub1}</td>
//     </tr>
//     <tr>
//     <td>${subject2}</td>
//     <td>${totalMarks}</td>
//     <td>${subMark2}</td>
//     <td>${percentSub2}</td>
//     </tr>
//     <tr>
//     <td>${subject3}</td>
//     <td>${totalMarks}</td>
//     <td>${subMark3}</td>
//     <td>${percentSub3}</td>
//     </tr>
//     <tr>
//     <th>Total</th>
//     <th>${grandTotalMarks}</th>
//     <th>${totalObtMarks}</th>
//     <th>${totalObtPercent}</th>
//     </tr>
//     </tbody>
//     </table>
// `)


// Chapter No 9-11 
//TASK NO 1  

//  var userCity = prompt(" Enter Your City Name");
//  if(userCity === "Karachi"){
//      alert("Welcome to city of lights");
//  }   

//TASK NO 2  

// var userGender = prompt(" Enter Your Gender");
// if(userGender==="male"){
//     alert("Good Morning Sir");
// }else if(userGender ==="female"){
//     alert("Good Morning Ma'am");
// }

//TASK NO 3  

// var Signalcolor = prompt("Please Enter the Color of road Traffic Signal")
// if(Signalcolor == "Red"){
//     alert("Must Stop");
// }else if(Signalcolor == "Yellow"){
//     alert("Ready to move");
// }else if(Signalcolor == "Green"){
//     alert("Move now");
// }

//TASK NO 4  

// var remainingFuel = parseFloat(prompt("What will be the remaining Fuel in car?"));
// alert(remainingFuel)
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

//TASK NO 5 

//(a)  

// var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }
// output given condition for variable a is true


// (b)  

//  var b = 82;if (b++ === 83){alert("given condition for variable b is true");}
// output  undefined


// (c)  

//  var c = 12;if (c++ === 13){alert("condition 1 is true");}if(c === 13){alert("condition 2 is true");}if (++c < 14){alert("condition 3 is true");}if(c === 14){alert("condition 4 is true");}
// output  Condition 2 is True 
// output  Condition 4 is True 


//(d)  


//  var materialCost = 20000;var laborCost = 2000;var totalCost = materialCost + laborCost;if (totalCost === laborCost + materialCost){alert("The cost equals");}
// output  Cost is equal


// (e)  

// if (true){alert("True");}if (false){alert("False");}
// output  True

//(e) 

//  if("car" < "cat"){alert("car is smaller than cat");}
// output car is smaller than cat

//TASK NO 6  


// var englishMarks = prompt("Please Enter the English Marks:");
// var biohMarks = prompt("Please Enter the Bio Marks:");
// var mathMarks = prompt("Please Enter the Math Marks:");
// var totalMarks = Number(prmpt("Please Enter the Total Marks"));
// var obtainedMark = Number(englishMarks)+Number(biohMarks)+Number(mathMarks);
// var obtainedPercent = parseInt(obtainedMark/totalMarks*100)
// var Grade;
// var Remarks;
// if(obtainedPercent >= 80){
//     Grade = "A-one";
//     Remarks = "Excellent";
// }else if(obtainedPercent >= 70){
//     Grade = "A";
//     Remarks = "Good";
// }else if(obtainedPercent >= 60){
//     Grade = "B";
//     Remarks = "You need to improve";
// }else{
//     Grade = "Fail";
//     Remarks = "Sorry";
// }
// document.write(`<h1>Mark Sheet</h1>
//     Total marks: ${totalMarks}<br>
//     Mark obtained: ${obtainedMark}<br>
//     Percentage obtained: ${obtainedPercent}%<br>
//     Grade: ${Grade}<br>
//     Remarks: ${Remarks}<br>
// `)

//TASK NO 7  

//  var secretNum = Math.floor(Math.random()*10);
//  var guessNum = prompt("Guess the Secret Number between 1 to 10");
//  if(guessNum == secretNum){
//      alert("Bingo! Correct answer");
//  }else if(guessNum+1 == secretNum){
//     alert("Close enough to the correct answer");
//  }else{
//     alert("You lost the correct answer is : "+secretNum);
//  }

//TASK NO 8  


//  var userNum = prompt("Enter a Number to check It is divisble by 3");
//  var remain = parseInt(userNum) % 3;
//  if(remain === 0){
//      alert(userNum + " is divisible by 3")
//  }else{
//     alert(userNum + " is not divisible by 3")
//  }

//TASK NO 9  

//  var userNum = prompt("Enter a Number to check it is even or odd number");
//  if(parseInt(userNum) % 2 === 0){
//      alert(userNum+" is a even number");
//  }else{
//     alert(userNum+" is a odd number");
//  }

//TASK NO 10  

//  var userTemperatur = parseInt(prompt("Enter the Temperator of Your Area"));
//  if(userTemperatur > 40){
//      alert("It is too hot outside.");
//  }else if(userTemperatur > 30){
//     alert("The Weather today is Normal.");
//  }else if(userTemperatur >= 20){
//     alert("Today’s Weather is cool.");
//  }else{
//     alert("OMG! Today’s weather is so Cool.");
//  }

//TASK NO 11  

//  var firstNum = parseInt(prompt("Please Enter the First Number"));
//  var secondNum = parseInt(prompt("Please Enter the Second Number"));
//  var operator = prompt("Please Enter the Operation (+,-,*,/,%)");
// var result = eval(firstNum+operator+secondNum);
// alert("The result is "+result);

// Chapter No 11-12 

//TASK NO 1  


// var strings = prompt("Enter the charcter");
// var i=0;
// var character='';
// while (i <= strings.length){
//     character = strings.charAt(i);
//     if (!isNaN(character * 1)){
//         alert('character is numeric');
//     }else{
//         if (character == character.toUpperCase()) {
//             alert ('upper case true');
//         }
//         if (character == character.toLowerCase()){
//             alert ('lower case true');
//         }
//     }
//     i++;
// }

//TASK NO 2  

// var int1 = prompt("Enter the Integer No 1");
// var int2 = prompt("Enter the Integer No 2");
// if(int1-int2 > 0){
//     alert("The "+int1 + " is bigger then "+int2)
// }else if(int2-int1 > 0){
//     alert("The "+int2 + " is bigger then "+int1)
// }else if(int1 = int2){
//     alert("The "+int1 + " is equal to "+int2)
// }

//TASK NO 3  

// var userNum = parseInt(prompt("Enter a number"));
// if(userNum >0){
//     alert(userNum+" is a positive Number");
// }else if(userNum < 0){
//     alert(userNum+" is a negative Number");
// }else {
//     alert(userNum+" is a zero");
// }

//TASK NO 4  

// var userInput = prompt("Enter a character");
// if (userInput == "a" || userInput == "e"|| userInput == "i"|| userInput == "o"|| userInput == "u") {
//     alert(userInput+" is a vowel")
// }else{
//     alert(userInput+" is not a vowel")
// }

//TASK NO 5  

// var savedPassword = "pakistan123"
// var userPassword = prompt("Pleasse Enter Your password");
// if(savedPassword === userPassword){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect password");
// }

//TASK NO 6 

// var greeting;var hour = 13;if (hour < 18) {greeting = "Good day";}else{greeting = "Good evening";}
// output  "Good day"

//TASK NO 7  

// var userTime = parseInt(prompt("Please Enter you time like 1900"));
// if(userTime-1200 >= 0){
// alert("the time is "+ ((userTime-1200)/100)+"pm")
// }else{
//     alert("the time is "+ (userTime/100)+"am")
// }

// Chapter No 14-16 

//TASK NO 1  

// var literalArr = [];

//TASK NO 2 

// var objectArr = [{studentName:[]}];

//TASK NO 3 

// var stringArr = ["pakistan","karachi"];

//TASK NO 4 

// var numnerArr = [234,535,256];

//TASK NO 5 

// var booleanArr = [true,false];

//TASK NO 6 

// var mixed = ["sindth",25,true,"balochistan",false];

//TASK NO 7 

// var qualificationArr = ["SSC","HSC","BSC","BS","BCOM","MS","M. Phil","PhD"];

// document.write(`<h1>Qualifications</h1>

// 1) ${qualificationArr[0]}<br>
// 2) ${qualificationArr[1]}<br>
// 3) ${qualificationArr[2]}<br>
// 4) ${qualificationArr[3]}<br>
// 5) ${qualificationArr[4]}<br>
// 6) ${qualificationArr[5]}<br>
// 7) ${qualificationArr[6]}<br>
// 8) ${qualificationArr[7]}<br>
// `)

//TASK NO 8//

// var nameArr = ["Micheal","John","Tony"];
// var scoreArr = [320,230,480];
// var totalscore = 500;

// document.write(`
// Score of ${nameArr[0]} is ${scoreArr[0]}. Percentage: ${scoreArr[0]/totalscore*100 }% <br>
// Score of ${nameArr[1]} is ${scoreArr[1]}. Percentage: ${scoreArr[1]/totalscore*100 }%<br>
// Score of ${nameArr[2]} is ${scoreArr[2]}. Percentage: ${scoreArr[2]/totalscore*100 }%<br>
// `)

//TASK NO 9//

//   var colorArr = ["royalBlue","Jasmic"];
//   document.write("The array at beginning is:"+colorArr+"<br>");
//   var userFirstColor = prompt("Enter the color name you want to add on beginning");
//   colorArr.unshift(userFirstColor);
//   document.write("The array after adding color at beginning is:"+colorArr+"<br>");

//   var userEndColor = prompt("Enter the color name you want to add on Ending");
//   colorArr.push(userEndColor);
// document.write(`<select>
//   document.write("The array at ending is:"+colorArr+"<br>");

//   colorArr.push("Green");
//   colorArr.push("White");
//   document.write("Now the array  is:"+colorArr+"<br>");

//   colorArr.shift();
//   document.write("Now the array  is:"+colorArr+"<br>");

//   colorArr.pop();
//   document.write("Now the array  is:"+colorArr+"<br>");

//   var userIndex = parseInt(prompt("Enter the Index you want to add the color"));
//   var userColor = prompt("Enter the color you want to add");
//   colorArr.splice(userIndex,0,userColor);
//   document.write("Now the array  is:"+colorArr+"<br>");


//   var userIndex = parseInt(prompt("Enter the Index you want to delete the color"));
//   var deleteIndex = parseInt(prompt("How many color you want to delete"))
//   colorArr.splice(userIndex,deleteIndex);
//   document.write("Now the array  is:"+colorArr+"<br>");


//TASK NO 10
// var studScore = [320,230,480,120];

// document.write("Score of Students:"+studScore+"<br>" );
// studScore.sort(function(a, b){return a - b});
// document.write("Ordered Score of Students:"+studScore );

//TASK NO 11

// var cityArr = ["Karchi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: <br>"+cityArr+"<br>");
// var copyArr = cityArr.splice(2,3);
// document.write("Selected Cities Array list: <br>"+copyArr);

//TASK NO 12

// var arr = ["This", "is ", "my","cat"];
// document.write("Array: <br>"+arr+"<br>")
// var a = arr.join(" ");
// document.write("Array: <br>"+a+"<br>");

//TASK NO 13
// var itemArr = ["keyboard", "mouse", "printer", "monitor"]
// document.write(`Device:<br>Out:<br>${itemArr[0]}<br><br>Out:<br>${itemArr[1]}<br><br>Out:<br>${itemArr[2]}<br><br>Out:<br>${itemArr[3]}<br`);

//TASK NO 14

// var itemArr = ["monitor", "printer", "mouse", "keyboard"]
// document.write(`Device:<br>Out:<br>${itemArr[0]}<br><br>Out:<br>${itemArr[1]}<br><br>Out:<br>${itemArr[2]}<br><br>Out:<br>${itemArr[3]}<br`)

//TASK NO 15

// var phoneArr = ["Apple", "Samsung", "Motorola","Nokia","Sony","Haier"];
// <option valuw="${phoneArr[0]}">${phoneArr[0]}</option>
// <option valuw="${phoneArr[1]}">${phoneArr[1]}</option>
// <option valuw="${phoneArr[2]}">${phoneArr[2]}</option>
// <option valuw="${phoneArr[3]}">${phoneArr[3]}</option>
// <option valuw="${phoneArr[4]}">${phoneArr[4]}</option>
// <option valuw="${phoneArr[5]}">${phoneArr[5]}</option>
// <select>`);

// Chapter No 17 -20 
//TASK NO 1  
//var multiArr = [[], [], []]

//TASK NO 2 

// var matrixArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (let i = 0; i < matrixArr.length; i++) {
//     for (let j = 0; j < matrixArr[i].length; j++) {
//         if(j == 0){
//             document.write("<br>")
//         }
//         document.write(matrixArr[i][j])        
//     }
// }

//TASK NO 3  

// for (let i = 0; i <= 10; i++) {
//     document.write(i+"<br>")
// }

//TASK NO 4  

// var tableNum = parseInt(prompt("Enter the Table Number"));
// var tableLength = parseInt(prompt("Enter the Table Length"));
// document.write("<h1>Multiplication table of" +tableNum+" Length "+tableLength+"</h1>")
// for (let i = 1; i < tableLength+1; i++) {
//     document.write(tableNum+" x "+i+" = "+tableNum*i+"<br>")
// }

//TASK NO 5  

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     document.write(element+"<br>");
// }
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     document.write("Element at Index "+i+" is "+element+"<br>");
// }

//TASK NO 6 

//(a)

// document.write("Counting:<br>")
// for (let i = 1; i <= 15; i++) {
//     document.write(i+",");
// }

// (b) 

// document.write("<br>Reverse Counting:<br>")
// for (let i = 10; i >= 1; i--) {
//     document.write(i+",");
// }


// (c) 

// document.write("Even:<br>")
// for (let i = 0; i <= 20; i++) {
//     document.write(i+",");
//     i++;
// }


// (d) 

// document.write("Even:<br>")
// for (let i = 1; i <= 20; i++) {
//     document.write(i+",");
//     i++;
// }

// (e) 

// document.write("Series:<br>")
// for (let i = 2; i <= 20; i++) {
//     document.write(i+"k,");
//     i++;
// }

//TASK NO 7 

// var A =["cake","apple pie","cookie","chips","patties"];
// var userOrder = prompt("Welcome to ABC Bakery. What you want to order sir/madam?")
// var index1 = A.indexOf(userOrder);
// if(index1 < 0 ){
//     alert("We are sorry,"+userOrder+" is not availabe in our bakery");
// }else{
//     alert(userOrder+" is available at index "+index1+" in our bakery")
// }

//TASK NO 8 


// var array = [24 , 53, 78, 91, 12];
// var largest= 0;
// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// document.write("Array items: "+array+"<br>");
// document.write("The largest number is : "+largest);

//TASK NO 9 

// var arr,
//   i,
//   l,
//   min

// arr = [24 , 53, 78, 91, 12]
// min = Number.POSITIVE_INFINITY
// for (i = 0, l = arr.length; i < l; i++) {
//   min = Math.min(min, arr[i])
// }

// document.write("Array items: "+arr+"<br>");
// document.write("The smaller number is : "+min);

//TASK NO 10 

// var multiple = 5;
// var range_min =  1;
// var range_max = 100;
// var compRange = range_max/multiple
// for (let i = 1; i <= compRange; i++) {
// document.write(multiple*i+",")
// }
    //chapter # 21 to 25 
//Task#1

// var frstn = prompt("enter the first name");
// var lstn = prompt("enter the last name");
// var fulln = prompt=firstnam+lastnam;
// document.write ("welcome ! to website" +fulln);

//Task#2

// var user=prompt("Enter your favourite phone model");
// var numchar=phone.length;
// document.write("my favourite mobile is:" + user +"<br>");
// document.write("lenght of string:" + numchar);

//Task#3

//var country = "Pakistan";
//var firstChar = country.indexOf ("n");
 //document.write("<h1>String : " + country + "<br>");
 //document.write("Index of 'n' :" + firstChar + "</h1>");

 //Task#4

// var name="hello world";
// var secondchar = name.lastIndexOf("l")
//document.write("<h3>string : " + name +"<br>");
//document.write("Last Inex of 'l'  : "+ secondchar +"</h3>")



//   Task 5   

// var countName = "Pakistani";
// var characterThree = countName[3];
// document.write("Sting : "+countName+ " <br> Character at Index 3 : " +characterThree);

//   Task 6   


// var firstName = prompt("Enter your first Name");
// var lastName = prompt("Enter your last Name");
// var fullName = concat(firstName," ",lastName)
// document.write("Welcome  "+fullName);

//   Task 7   

// var cityName1 = "Hyderabad";
// var NewCity  = cityName1.replace("Hyder","Islam");
// document.write("City: "+cityName1+ " <br> After the replacement: "+NewCity);



//   Task 8   


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var NewMessages = message.replace(/and/g,"&");
// document.write(NewMessages);


//   Task 9   


// var value1 = "472";
// var Typevalue1 = typeof value1;
// var value2 = Number(value1);
// var Typevalue2 = typeof value2;
// document.write(`Value: ${value1} <br> Type: ${Typevalue1} <br> Value: ${value2} <br> Type: ${Typevalue2}`);


//   Task 10   


// var userInput = prompt("Enter any word thing to convert into Capital Letter");
// var Uppercase = userInput.toUpperCase();
// document.write("User input "+userInput+" <br> Upper case :"+Uppercase);


//   Task 11   


// var user = prompt("Enter a word to convert into TitleCase");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// var titleCase = toTitleCase(user);
// document.write("User input "+user+" <br> Title case :"+titleCase);


//   Task 12   


// var num = 35.36;
// var stringNew = num.toString().replace(".","");
// document.write("Number : "+num+"<br> Result : "+stringNew);


//   Task 13   


// var stUser = prompt("Please Enter your username");
// for(var i=0;i<stUser.length;i++){
//     if(stUser.charCodeAt(i) == 33 || stUser.charCodeAt(i) == 44 || stUser.charCodeAt(i) == 46 || stUser.charCodeAt(i) == 64){
//         alert("Please Enter a valid username")
//     }
// }



//   Task 14   


// var A =["cake","apple pie","cookie","chips","patties"];
// var userOrder = prompt("Welcome to ABC Bakery. What you want to order sir/madam?");
// var indexOrder = userOrder.toLowerCase();
// var index1 = A.indexOf(indexOrder);
// if(index1 < 0 ){
//     alert("We are sorry,"+userOrder+" is not availabe in our bakery");
// }else{
//     alert(userOrder+" is available at index "+index1+" in our bakery")
// }


//   Task 15   


// function validate(userPassword) { 
// for (let i = 0; i < userPassword.length; i++) {
//     const element = userPassword[i];
//     if(userPassword[0] == 1 || userPassword[0] == 2 ||userPassword[0] == 3 ||userPassword[0] == 4 ||userPassword[0] == 5 ||userPassword[0] == 6 ||userPassword[0] == 7 ||userPassword[0] == 8 ||userPassword[0] == 9){
//         alert("Password can not begin with a number");
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.length <= 6){
//         alert("Password Must be atleast six characters")
//         prompt("Please Enter a valid password");
//         return;
//     }else if(userPassword.match(/[a-zA-Z0-9]/g).length < 0){
//         alert("Password should contain number and characher");
//         return;
//     }else{
//         alert("Welcome");
//         return;
//     }
    
// }   
// }

// var userPassword = prompt("Please Enter Your Password");
// validate(userPassword);


//   Task 16   


// var university = "University of Karachi";
// for (let i = 0; i < university.length; i++) {
//     const element = university[i];
//     document.write(element+"<br>");
// }



//   Task 17   


// var userinput = prompt("please enter a word");
// var lastinput = userInput[userInput.length-1];
// document.write(`User inout: ${userinput} <br> Last character of input : ${lastinput}`)


//   Task 18   


// var temp = "The quick brown fox jumps over the lazy dog.";
// var count = (temp.match(/the/g) || []).length;
// document.write(`Text: ${temp} <br> there are ${count} occurrence(s) of word 'the' `)


//Chapter 26-30 
//   Task 1   

// var numberString = prompt("Enter a positive integer number");
// var roundOff = Math.round(numberString);
// var floorNum = Math.floor(numberString);
// var ceirlNum = Math.ceil(numberString);
// document.write(`number: ${numberString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)


//   Task 2 


// var numString = prompt("Enter a negative integer number");
// var roundOff = Math.round(numString);
// var floorNum = Math.floor(numString);
// var ceirlNum = Math.ceil(numString);
// document.write(`number: ${numString}<br> round off value: ${roundOff} <br>floor value: ${floorNum} <br>ceil value: ${ceirlNum}`)


//   Task 3 


// var value = -4;
// var absoulteValue = Math.abs(value);
// document.write(`The absolute value of ${value} is ${absoulteValue}`)


//   Task 4   


// document.write(`random dice value: ${Math.floor(Math.random()*(1-6)+6)} <br> random dice value: ${Math.floor(Math.random()*(1-6)+6)}`);


//   Task 5   


// var coin = Math.floor(Math.random() * 2) ;
// if (coin == 0) {
//     document.write(`${coin} <br> random coin value: Heads`);
// } else {
//     document.write(`${coin} <br> random coin value: Tails`);
// }


//   Task 6   


// var num = Math.floor(Math.random() * 100);
// document.write(`radom number between 1 and 100: ${num}`);


//   Task 7   


// var userWeight = prompt("Please enter your weight");
// document.write(`The weight of user is ${parseInt(userWeight)} kilograms`);



//   Task 8


// var userNum = prompt("Enter a number between 1 and 10");
// var secrectNum = Math.floor(Math.random() * 10) + 1;
// if(userNum == secrectNum){
//     alert("Congratulations , You write the right number")
// }else{
//     alert("Try Again!")
// }

//Chapter 26-30 

//   Task 1   


// var currentDateAndTime = new Date();
// document.write(currentDateAndTime);

//   Task 2   


// var date = new Date(); 
// var month = date.toLocaleString('default', { month: 'long' });
// document.write(`Current month: ${month}`);


//   Task 3  


// var date = new Date().toDateString();
// var day= date.slice(0,3);
// document.write(`Today is ${day}`);


//   Task 4   

// var date = new Date().toDateString();
// var day= date.slice(0,3);
// if(day == "Sat" || day == "Sun"){
//     document.write("Its's Fun day");
// }


//   Task 5   


// var date = new Date().getDate();
// if(date < 16){
//     document.write("First Fifteen Days of the months");
// }else{
//     document.write("Last Fifteen Days of the months");

// }

//   Task 6   


// const date = new Date(); 
// const mili = new Date().getTime();
// var min =  mili / 60000;
// document.write(`Current Date: ${date}<br>Elapsed milliseconds since January 1, 1970: ${mili} <br> Elapsed minutes since January 1, 1970: ${min}`)

//   Task 7    


// var hrs = new Date().getHours();
// if(hrs < 12 ){
//     document.write("its AM");
// }else{
//     document.write("its PM");
// }

//   Task 8   


// var laterDate = new Date(2021,0,0)
// document.write(`Later date : ${laterDate}`);


//   Task 9   


// var date1 = new Date().getTime(); 
// var date2 = new Date("06/18/2015").getTime();
// var diff = date1 - date2 ;
// var days = diff / (1000 * 3600 * 24);
// document.write(`${Math.floor(days)} days have been passed since 1st ramdan, 2015`);

//   Task 10   

// var date = new Date("01/01/2015").getTime(); 
// var date1 = new Date("12/05/2015 22:50:16").getTime();
// var diffSec = date1-date2 / (1000);
// document.write(`On reference date ${new Date("12/05/2015 22:50:16")} <br> ${diffSec} seconds had passed since beginning of 2015 `);


//   Task 11   


// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var newDate = new Date(date2 - (3600 *1000));
// document.write(`current date: ${new Date("12/05/2015 23:50:16")} <br> 1 hour ago, it was ${newDate}`)


//   Task 12


// var date2 = new Date("12/05/2015 23:50:16").getTime();
// var date3 = new Date(date2 - (1000*3600*24*365*100));
// document.write(`current date: ${date3("12/05/2015 23:50:16")} <br> 100 years ago, it was ${date3}`)


//Task 13


// var userAge = prompt("Enter your Age");
// var birthYear = new Date().getFullYear() - userAge;
// document.write(`Your Age is ${userAge} <br> Your birth year is ${birthYear}`)


//   Task 14   


// var customerName = "ABC Customer";
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)


//Chapter 35-38


//   Task 1   

// function todayDate() {
//     var date = new Date();
//     document.write(date);
// }
// todayDate();


//   Task 2   



// function greet() {
//     var fistName = prompt("Enter your First Name");
//     var lastName = prompt("Enter your Last Name");
//     alert("Welcome Mr/Mrs " + fistName + " "+ lastName);  
// }
// greet();



//   Task 3 

// function sumNum() {
//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     return num1+num2
// }
// sumNum();


// Task 4  


// function calculate(num1,num2,operator) {
//  var result = eval(num1+operator+num2);
//  return result   
// }

//     var num1 =  prompt("Enter the first Number");
//     var num2 =  prompt("Enter the second Number");
//     var operator =  prompt("Enter the Operator");

// var show = calculate(num1,num2,operator);
// document.write(show);


//   Task 5   


// function convertSquare(num) {
//     var result = Math.pow(num,2)
//     document.write(result)
// }
// convertSquare(5);


//   Task 6    


// function factorialization(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return document.write(num);
//   }
//   factorialization(5);


// Task 7


// function counts(num1,num2) {
//     for (let i = num1; i <= num2; i++) {
//         document.write(i)
//     }
// }
// counts(1,10);


//   Task 8   



// function calHypotenus(base,perpendicular) {
//     function calSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenus = calSquare(base) + calSquare(perpendicular);
//     return document.write(hypotenus)
// }

// calHypotenus(10,10);



//   Task 9 



// function calcArea(height,width) {
//     var area = height * width
//     return document.write(area+"<br>");
// }
// var height = 100;
// var width =100;
// calcArea(10,10);

// calcArea(height,width);


// Task 10 


// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var count = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             count = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 count = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a Palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

//  var user = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }


//   Task 11     


// var titlecase = toTitleCase(userInput);
// document.write("Example String "+userInput+" <br> Expected Output :"+titlecase);

//   Task 12    


// function largestWord(string) {
//     var str = string.split(" ");
//     var largest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (largest < str[i].length) {
//             largest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var largest = largestWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+largest);



//   Task 13  


// function Occur(string,word) {
//     var regex = new RegExp(word,"g")
//     var result = (string.match(regex) || []).length;
//     return document.write(result);
// }

// checkOccur("Hellow world is world hellow","o");



// Task 14   



// function  Circum(radius) {
//     var result = 2 * (3.14) *radius
//     return document.write("The circumference of "+ radius +" is "+result+"<br>")
// }
// function  Area(radius) {
//     var result = 3.14 * (Math.pow(radius,2));
//       return document.write("The area of "+ radius +" is "+result)
// }
// Circum(35);
// Area(35);

//chapter#38 to 44

//task#1
// var a=3;
// var b=7;
// var c=math.pow(a, b);
// Document.write(c);

//task#2
// var year = parseInt(prompt("Enter a year to check year is leap year or not "));
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
//  document.write( leapyear(year));
// //task#3
// var a =5;
// var b =6;
// var c =7;
// var s =(a+b+c)/2;
// var amount =Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// document.write(amount);

// Task no 4


// var sub1 = parseInt(prompt("Enter your math marks"));
// var sub2 = parseInt(prompt("Enter your biology marks"));
// var sub3 = parseInt(prompt("Enter your english marks"));
// var totalSub = parseInt(prompt("Enter your total marks"));

// var a = sub1+sub2+sub3;

// function average(){
//     return(a/3);
// }
// document.write("average marks"+average(a));

// function percentage(){
//     return(a/totalSub*100);
// }
// document.write(percentage(a));

//task#5

//  var a = "Pakistan";

//  function character(){
//      return(a.indexOf("t"))
//  }
//  document.write(" In " + a + " the indexof  't' is  "  + character(a));
//Task#6

// var string = prompt("Write a word to remove vowels in it")

// function removeVowels() {
//    return string.replace(/[aeiouAEIOU]/gi, '');
// }

// document.write("Before removing vowel " + string + "<br>" + "After removing vowel " + removeVowels(string))

//task#7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;

    
    
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
      
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
    
//     return count;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   document.write(found);
 
//task#8

// 1 km = 1000m , 1 km = 3280.84feet , 1 km = 39370.1 inches , 1 km = 100000 cm
// var distance = parseInt(prompt("Write a distance between two cities in ('km')"));

// function convertM(){
//     return(distance*1000)
// }
// function convertFeet(){
//     return(distance*3280.84)
// }
// function convertInches(){
//     return(distance*39370.1)
// }
// function convertCm(){
//     return(distance*100000)
// }

// document.write(distance + "km" + "<br>" + convertM(distance) + "m" + "<br>" + convertFeet(distance) + "feet" + "<br>" + convertInches(distance) + "inches" + "<br>" + convertCm(distance) +  "cm"  ) 

//task#9

var salary(){
    var hour=40
    var rate=12.00
    if(hour>40)
    {
        regpay = (rate*40)
        overtimepay((rate*1.5)*(hour-40))

        pay= ( regpay + overtimepay)
    return("you earned overtime"+hour+"hour !"+"your pay is"+pay)
    }
    else{
                                                                                                                s
    }
}