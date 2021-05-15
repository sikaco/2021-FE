document.write('123123')
const f1: any = (function () {
  return 1
})

type Obj = {
  a: number
  b: number
}

const o1: Obj = {
  a: 123,
  b: 234
}

window.onhashchange = (e: HashChangeEvent) => {
  const { newURL, oldURL } = e
  console.log(newURL)
  console.log(oldURL)
}

let birth = '2000/01/01';

const Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};

const obj0: any = {
  funcA() {
    console.log(123)
  }
}
obj.funcA?.()

const headerText0 = (window as any).response.settings.headerText ?? 'Hello, world!';


////////////////////////////////

function funcA<T>() {

}

type FuncA = <T>(a: T) => void

const funcB: FuncA = (a) => {

}


interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

const identity: GenericIdentityFn = <T>(arg: T): T => {
  return arg;
}

function loggingIdentity<Type extends []>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

function getProperty<Obj, K extends keyof Obj>(o: Obj, k: K) {

}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A) {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;



type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;  // boolean

function f0() {
  return { x: 10, y: 3 };
}

type P = ReturnType<typeof f0>

//////////////////////////////////////////////////
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type I1 = Person["age" | "name"];
type I1_0 = Person["age"] | Person["name"]


type MessageOf<T extends { 'msg': unknown }> = T['msg']

interface Email {
  msg: number;
}
type EmailMessageContents = MessageOf<Email>;


// type Flatten<T> = T extends Array<unknown> ? T[number] : T
// type Flatten<T> = T extends Array<infer Item> ? Item : T


type GetReturnType<Type> = Type extends (...args: []) => infer Return
  ? Return
  : never;

type Num = GetReturnType<() => number>;

type Str = GetReturnType<(x: string) => string>;

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;