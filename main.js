"use strict";
exports.__esModule = true;
// different "types" in typescript
/*
   let count = 5;
   count = "a";      // can not re-declare in typescript
*/
var a;
a = 10;
//  a = true;   // error in typescript
//  a = 'a';    // error in typescript
// when working with a group of related constants, use "enum":-
var ColorRed = 12;
var colorGreen = 34;
var colorBlue = 42;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
;
var bgColor = Color.Red;
// type assertions
var message;
message = "abc";
//let endsWithB = message.endsWith('b');
// one way of type assertion
var endsWithB = message.endsWith('b');
var alternativeWay = message.endsWith('b');
// arrow functions
var log = function (message) {
    console.log(message);
};
// above code using arrow function
var doLog = function (message) { return console.log(message); };
// custom type
// inline annotation
/*
 let drawPoint = (point: {x: number, y: number }) => {
    // ...
 }

 drawPoint({
    x: 1,
    y: 2
 })
    */
// interface 
/*
   interface Point{
      x: number,
      y: number
   }

   let drawPoint = (point: Point) => {
      // ...
   }

   drawPoint({
      x: 1,
      y: 2
   })
*/
// cohesion
/*
interface Point{
   x: number,
   y: number
}

let drawPoint = (point: Point) => {
   // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
   // ...
}

drawPoint({
   x: 1,
   y: 2
})
*/
// Cohesion principle is being violated in above code.
// We use "class" for cohesion
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// let point: Point;
// point.draw();
/* This "point" object was undefined when code line 107 of main.ts was called during run-time. When defining an object of custom type, we need to allocate memory explicitly to it. */
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
