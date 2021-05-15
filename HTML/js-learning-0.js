"use strict";

/*
function tag() {
  console.log(arguments)
}

let a = 5;
let b = 10;

tag`Hello ${a + b} world ${a * b}`;
*/

Math.sign(5)      // 1
Math.sign(-5)     // -1
Math.sign(-3.14)  // -1

Math.sign(-0)     // -0

function testFunc(a, b) {
  return function (...rest) {
    console.log(a, b)
    console.log(rest)
  }
}
const retFunc = testFunc('a', 'b')
console.log(retFunc(1, 2, 3))

const arr = [1, 2, 3]
const ret = arr.reduce((a, b, i, arr) => {
  console.log(i, a, b, arr)
  return a + b
})
console.log(ret)

const obj = {
  funcA() {
    console.log(123)
  }
}
obj.funcA?.()

// const headerText = response.settings.headerText ?? 'Hello, world!';

1 && 2 || 3

const obj3 = {
  a: 123,
  b: 234,
  c: 345
}
for (let i in obj3) {
  console.log(i, obj3[i])
}


const obj1 = { a: 123 }
const obj2 = { b: 123 }
const resultObj = { ...obj1, ...obj2 }

const s = new Set()
s.add(2)

const s0 = new Set([1, 2, 3, 4])
for (let i of s0) {
  i = 1
}

const arrS0 = Array.from(s0)
console.log(arrS0)

const arrS1 = Array.of(1, 2, 3, 4, 5)
console.log(arrS1)

const m = new Map()
m.set('abc')
console.log(m)


// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('p2')
//     resolve(p1)
//   }, 1000)
// })

// p2
//   .then(result => console.log(result))
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// Error: fail

// 0.5秒后返回input*input的计算结果:
function multiply(input) {
  window.p = new Promise(function (resolve, reject) {
    console.log('calculating ' + input + ' x ' + input + '...');
    setTimeout(resolve, 500, input * input);
  });

  return window.p
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
  return new Promise(function (resolve, reject) {
    console.log('calculating ' + input + ' + ' + input + '...');
    setTimeout(resolve, 500, input + input);
  });
}

const p = new Promise(function (resolve, reject) {
  console.log('start new Promise...');
  resolve(2);
});

console.log(p.then(multiply) === window.p)
// .then(add)
//   .then(multiply)
//   .then(add)
//   .then(function (result) {
//     console.log('Got value: ' + result);
//   });
// console.log('p finished')

Promise.resolve(666)
  .then(value => {
    console.log(value) //666
    return new Promise((resolve, reject) => {
      resolve('新的promise的value')
      resolve('123')
    })
  }).then(res => {
    console.log(res) // '新的promise的value'  
  }).then(res => {
    console.log(res) // undefined
  })

function* gen(x) {
  console.log('gen')
  var y = yield x + 2;
  return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
// g.next() // { value: undefined, done: true }


// function* f() {
//   console.log('执行了！')
// }

// var generator = f();



function* gen() {
  var result = yield new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
  })
  return result
  // return 1
}

const g0 = gen()
// console.log(g0.next())
// console.log(g0.next())

var result = g0.next();

console.log(1)
result.value.then(function (data) {
  console.log(data)
  return data
}).then(function (data) {
  console.log(g.next(data + 1))
});
console.log(2)


const curry = (fn, arity = fn.length) => {
  const curried = (...args) =>
    args.length >= arity
      ? fn(...args)
      : (...restArgs) => curried(...args, ...restArgs);
  return curried;
};

const add0 = (a, b, c, d, e) => a + b + c + d + e;

const addResult = curry(add0)(1)(3)(5)(7)(9); //25
console.log(addResult)


function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    // console.log(reset, i)
    if (reset) { i = -1; }
  }
}

var g1 = f();

g1.next() // { value: 0, done: false }
g1.next() // { value: 1, done: false }
g1.next(true) // { value: 0, done: false }

/**
 * async function
 */

async function timeout(ms) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, ms);
  });
}

async function asyncPrint(value, ms) {
  const ret = await timeout(ms);
  console.log(value);
  console.log(ret);
}

asyncPrint('hello world', 50);

class B {
  constructor() {
    this.a = 123
  }

  static abc = 123
  static funcA() {
    console.log(this)
  }

  funcB() {
    console.log(this)
  }

  abc = 123
}

const b0 = new B()

console.log(Object.getPrototypeOf(b0))


class Obj {
  constructor() {
    this.getThis = () => this;
    // this.getThis = function () {
    //   return this
    // }
  }
}

var getThis = (new Obj()).getThis;
console.log(getThis());
const newGetThis = getThis.bind({})
console.log(newGetThis());

// var obj4 = {
//   getThis: function () {
//     return this
//   }
// };

// var getThis0 = obj4.getThis;
// console.log(getThis0());  // window

// (function () {
//   console.log(this)
// })()

// const myObj = new Obj();
// console.log(myObj.getThis())


const MyClass = class Me {
  getClassName() {
    Me.abc = 123

    return Me.name;
  }

  #abc = 123
  #privateFunc() {
    console.log(123)
  }
};

let inst = new MyClass();
inst.getClassName() // Me

class MyClass0 {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass0(); // true
[1, 2, 3] instanceof MyClass0; // false



class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
}

let cp = new ColorPoint(25, 8, 'green');

cp instanceof ColorPoint // true
cp instanceof Point // true


class A { }
A.prototype.x = 2;

class B0 extends A {
  constructor() {
    super();
    console.log(super.x) // 2

    super.x = 3
    console.log(super.x) // 2
    // console.log(this.x) // 3
  }
}
B0.prototype.x = 4

let b = new B0();


class A0 {
  static b = 123

  constructor() {
    this.x = 1;
  }
  static print() {
    this.x = 333
    console.log(this.x); // 333
  }
}

class B1 extends A0 {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();

    // 重点代码
    super.b = 222
    console.log(super.b) // 123

    // console.log(this.b)  // 222
  }
}

B1.x = 3;
B1.m() // 3


const proto = {
  x: 'hello',
  fooA() {
    console.log(this.x);
  },
};

// const obj = {
//   x: 'world',
//   foo() {
//     super.fooA();
//   }
// }

// Object.setPrototypeOf(obj, proto);

// obj.foo() // "world"

/*
class Base { }
class Good extends Base { }
class AlsoGood extends Base {
  constructor() {
    // this.x = 123
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() { }
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError
*/
