export{}
// different "types" in typescript
/*
   let count = 5;
   count = "a";      // can not re-declare in typescript
*/
   let a: number;
   a = 10;
 //  a = true;   // error in typescript
 //  a = 'a';    // error in typescript

// when working with a group of related constants, use "enum":-

   const ColorRed = 12;
   const colorGreen = 34;
   const colorBlue = 42;

   enum Color { Red, Green, Blue, Orange};
   let bgColor = Color.Red;

// type assertions

   let message;
   message = "abc";
   //let endsWithB = message.endsWith('b');
   // one way of type assertion
   let endsWithB = (<string>message).endsWith('b');
   
   let alternativeWay = (message as string).endsWith('b');

// arrow functions

   let log = function(message) {
      console.log(message);
   }
   // above code using arrow function
   let doLog = (message) => console.log(message);


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
   
   class Point{
      x: number;
      y: number;
      
      draw() {
         console.log('X: ' + this.x + 'Y: ' + this.y);
      }

      getDistance(another: Point) {
         // ...
      }
   }

   // let point: Point;
   // point.draw();
   
   /* This "point" object was undefined when code line 107 of main.ts was called during run-time. When defining an object of custom type, we need to allocate memory explicitly to it. */

   let point = new Point();
   point.x = 1;
   point.y = 2;
   point.draw();