"use strict";

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded !')
});

(function () {
  if (1 == 1) return true
})()

const v0 = 123
// const str = `asd ${v0}`
const str = `
  asd ${v0}
  asd ${v0}
`

console.log(str)

outer_block: {

  inner_block: {
    console.log('1');
    break outer_block;      // breaks out of both inner_block and outer_block
    console.log(':-(');    // skipped
  }

  console.log('2');        // skipped
}

/*
function funcA() {
  continue

  return 1
}
funcA()
*/

function funcB() {
  switch (3) {
    case 1:
      break
    case 2:
    // continue
    case 3:
      console.log('3')
      break
  }
}
funcB()

console.log("你好\n世界!");

const y = new Boolean(false)

const obj = {
  a: 123,
  b: '123',
  c: () => {
    return '123 hahaha'
  }
}
console.log(obj)

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('first-btn')

  btn.addEventListener('click', () => {
    console.log(2)
  })
  btn.addEventListener('click', () => {
    console.log(2)
  })

  /*
  const sameHandler = () => {
    console.log(2)
  }
  btn.addEventListener('click', sameHandler)
  btn.addEventListener('click', sameHandler)
  */
})

window.onhashchange = (e) => {
  const { newURL, oldURL } = e
  console.log(newURL)
  console.log(oldURL)
}

const funcInClosure = function () { }()
const funcInClosure1 = (() => { })()

window.onresize = function () {
  debounce(fn, 500)
}
var fn = function () {
  console.log('fn')
}
var timer = ''
function debounce(fn, timeLong) {
  if (timer) {
    clearTimeout(timer)
    timer = ''
  }

  timer = setTimeout(function () {
    fn()
  }, timeLong)
}

var object = {
  getNameFunc: function () {
    return function () {
      return this;
    };
  }
};

console.log(object.getNameFunc()());

console.log(levelUpFunc(1, 2, 3))
function levelUpFunc(...rest) {
  // console.log(Array.from(arguments))
  console.log(rest.constructor)
  return 0
}

window.addEventListener('unload', () => {
  alert('Do you really want to close this window?')
})

const s1 = String(null); //"null"
const oNull = null;
// const s2 = oNull.toString(); //won't work, causes an error

function doAdd(num1, num2) {
  console.log(' ====== ');

  num2 = 13;
  // arguments[1] = 13
  console.log(arguments[1]);
  console.log(num2);

  num1 = 13;
  console.log(arguments[0]);
  console.log(num1);
}
doAdd(10)

// function f1(a) {
//   console.log(' ====== ');
//   alert(a);
//   a = 1;//修改形参a 
//   alert(1 === a);
//   alert(1 === arguments[0]);
// }
// f1(10)

var person = {
  "name": "Nicholas",
  "age": 29,
  5: true
}

console.log('before DOMContentLoaded')

const a = Date()
const now = Date(2000, 4, 12)

console.log(a)
console.log(now);

(function () {
  console.log(this)
})()

function outputThis() {
  console.log(this)
}
outputThis()

/**
 * ES6
 */

function foo() {
  // setTimeout(() => {
  //   console.log('=== foo ===');
  //   console.log(this);
  //   console.log('=== foo ===');
  // }, 100);

  setTimeout(function () {
    console.log('=== foo ===');
    console.log(this);
    console.log('=== foo ===');
  }, 100);
}

foo.call({});

const objWithFunc = {
  func: function () {
    // (() => {
    //   console.log(this)
    // })()

    (function () {
      console.log('=== this ===')
      console.log(this)
      console.log('=== this ===')
    })()
  }
}
objWithFunc.func()

function Timer() {
  this.s1 = 0;
  this.s2 = 10;
  // 箭头函数
  setTimeout(() => {
    this.s1++
    console.log(this)
  }, 100);
  // 普通函数
  setTimeout(function () {
    this.s2++;
    console.log(this)
  }, 100);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 200);
setTimeout(() => console.log('s2: ', timer.s2), 200);

// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = 'hidden';
  console.log(this)
  console.log(evt.target)
  console.log(evt.currentTarget)
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);

// ======

var handler = {
  id: '123456',

  init: function () {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function (type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};

// handler.init()

var handler1 = {
  id: '123456',

  // init: function () {
  //   document.addEventListener('click', event => console.log(this), false);
  // },

  init: function () {
    const obj = {}

    obj.func1 = function () {
      console.log(123)
      console.log(this)
      document.addEventListener('click', event => console.log(this), false);
    }

    return obj.func1
  },

  // init: function () {
  //   const obj = {
  //     func1: function () {
  //       console.log(123)
  //       console.log(this)
  //       document.addEventListener('click', event => console.log(this), false);
  //     }
  //   }

  //   return obj
  // },


};

// console.log(handler1.init().func1())
handler1.init()()

// function arrowFunc() {
//   console.log('=== arrowFunc ===')
//   console.log(this)
//   console.log('=== arrowFunc ===')
// }

// var arrowFunc = function () {
//   console.log('=== arrowFunc ===')
//   console.log(this)
//   console.log('=== arrowFunc ===')
// }

const arrowFunc = () => {
  console.log('=== arrowFunc ===')
  console.log(this)
  console.log('=== arrowFunc ===')
}

arrowFunc.apply({})
// arrowFunc()

const objWithArrowFunc = {
  arrowFunc: () => {
    console.log('=== objWithArrowFunc ===')
    console.log(this)
    console.log('=== objWithArrowFunc ===')
  }
}

objWithArrowFunc.arrowFunc()

/*
class Base { }
class Good extends Base { }
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() {
    return
  }
}

new Good();
new AlsoGood();
new Bad(); // ReferenceError
*/

function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty
var h = g.bind({ a: 'yoo' }); // bind返回的函数不会再被bind
console.log(h()); // azerty
var h1 = f.bind({ a: 'yoo' });
console.log(h1()); // yoo

console.log(typeof tmp) // 后文如果不再出现tmp的var声明，浏览器就会报错。

console.log(typeof tmp) // 这样就不会报错了。
tmp = 'abc';
var tmp
var tmp = 123;
// var tmp = 222

// (function () {
//   if (true) {
//     tmp = 'abc';
//     var tmp;

//     console.log(tmp)
//   }
// })()
console.log(tmp)

if (true) {
  function f() { } // !!! 语法错误
  f();
}

const obj1 = {
  funcA: function () {
    console.log('=== obj1.funcA ===')
    console.log(this)

    function f() {
      console.log(this)

      var f1 = () => {
        console.log(this)
      }
      f1()
    }

    f()
  }
}
obj1.funcA()

function funcC() {
  const obj2 = {
    a: 123,
    b: 234,
    c: 345
  }
  const { a, b, c: testC } = obj2
  console.log(testC)
}
funcC()

let testVal0 = 123 || (() => {
  console.log('RUNNING !~~')
  return 12
})();


// let obj2 = {};
// let arr = [];

// ({ bar: testBar } = { foo: 123, bar: true });

// obj // {prop:123}
// arr // [true]

/*
(() => {
  ({ bar: testBar } = { foo: 123, bar: true });
  console.log(testBar)
  console.log(window.testBar)
})()
console.log(testBar)
*/

const obj3 = {
  a: 123,
  b: 234,
  c: 345
}
for (let i in obj3) {
  console.log(i, obj3[i])
}

/**
 * inheritance
 */
function inheritClass(subClass, superClass) {
  function F() { }
  F.prototype = superClass.prototype
  subClass.prototype = new F()
  subClass.prototype.constructor = subClass
}

function SuperClass(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"]
}

SuperClass.prototype.sayName = function () {
  alert(this.name)
}

function SubClass(name, age) {
  SuperClass.call(this, name)

  this.age = age
}

inheritClass(SubClass, SuperClass)

SubClass.prototype.sayAge = function () {
  alert(this.age)
}
