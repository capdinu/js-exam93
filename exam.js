// 1
const obj1 ={fist:20,second:30,fist:50};
console.log(obj1)

// 2
console.log(typeof(NaN))

// 3
var a = "scaler"
var result = a.substring(2,4);
Document.write(result);

// 01
let n = 24;
 let l =0, r = 100, ans = n;
 while (l<=r){
    let mid =Math.floor((l+r)/2);
    if(mid*mid <=n){
        ans =mid;
        l=mid + 1}
        else { 
            r =mid -1;
        }

    }
    console.log(ans)

// 02
const example =({a,b,c}) => {
    console.log(a,b,c);

}
example(0,1,2)
 


// 03
const numbers = [5, 10, 15, 20, 25];

const firstNumber = numbers[0];

const lastNumber = numbers[numbers.length - 1];

console.log("First element:", firstNumber); 
console.log("Last element:", lastNumber);   

// 04

const fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => console.log(fruit));

// 05



function dinushanArray(arr) {
    return arr.flat(Infinity);
  }

  const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, [9]]]];
  const dinushan = dinushanArray(nestedArray);
  
  console.log(dinushan)

// 10

/
function Car(make, model, year) {
    this.make = make;        this.model = model;   
    this.year = year;     


    this.displayDetails = function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    };
}


const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Tesla', 'Model 3', 2022);


car1.displayDetails();  
car2.displayDetails();   







  
  
  