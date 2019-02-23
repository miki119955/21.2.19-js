 /* exercise  1

var x = ( prompt ("enterd first number ",0)
var y = prompt ( "enter second number ",0)

if  (x>y) { console.log ( x ) }

else 

{ console.log ( y) }

*/

// exersice 2
//   קלוט מספר והדפס חיובי שלילי אפס
/* 
var x1 = prompt ( " enter a number ", 0)

if (x1>0) { 
alert ( "positive")
}
else if ( x1<0) {
   alert ( "negative")
 }
else { 
alert ("efes")
}
*/

//exercise 3
// קלוט שני מספרים , אם אחד מהם אפס הדפס שלא ניתן לחלק באפס, אם הוא לא אפס הדפר את חילוק שני המספרים.
/*
var sum = parseInt( prompt (" enter first number ", 0))
var z = parseInt ( prompt ("enter second number",0))
 if (sum == 0){
  alert (" cant devine zero")
 }
 else {
  console.log ( sum / z )
 }
*/
 
 //exercise 4
 // קלוט מספר, הדפס אם יש לו ספרה אחד , שנים, שלוש או יותר
 /*
var a = prompt (" enter number", 0)

if ( a<10 ) {
  alert ("sifra ahat")
}
else if ( a<100) {
  alert( "shney sparot")
} 

else if (a<1000){
  alert ("shalosh sfarot")
}

else {
  alert ("to big number")
}
 
*/

// exercise 5

// קלוט מספרים וחשב את סכומם עד אשר יקלט אפס
/*

var w=0


do {
 var r= parseInt ( prompt("enter numbers (0 to stop)",))
    w=w+r             
                  }              
while ( r != 0)
  console.log (w)
*/

// exercise 6

// קלוט מספרים וחשב את סכומם עד אשר ייקלט שלילי
/*
var fun = 0
var som = parseInt( prompt ( "enter numbers (negative to stop", 0))
 
while ( som >= 0) {
  fun=fun+som
  var som = parseInt (prompt ("mor numbers umnil negative"))
}
alert ( fun )
*/

// exercise 7
// 
// קלוט מספרים וחשב את הממוצע עד אשר ייקלט שלילי
/*

var a1 = 0
var s1 = 0
var d1 = parseInt ( prompt (" enter numbers (negative to stop),"  ))

while ( d1 >= 0) {
   a1 = a1 + d1 
  var d1 = parseInt (prompt(" keep enter numbers ( negative to stop)"))
 s1 = s1+1
  }
console.log (a1) 
alert (s1)
*/




