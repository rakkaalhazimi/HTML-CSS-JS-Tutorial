function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a:number[], b:number[]): number[];

function add(a: any, b:any): any {
  console.log(typeof a);
  return a + b;
}

console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
console.log(add(10, 20)); // returns 30 
console.log(add([1, 2], [3, 4]))