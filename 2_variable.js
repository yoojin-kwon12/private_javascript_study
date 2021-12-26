// ## 1. Use strict
// added in ES 5
// use this for Valina Javascript.
// 정의 되지않은 변수 사용, 변수나 객체의 삭제 , 함수 파라미터에 중복된 이름 등 옳지 않은 일에 대해
// 막아준다.
'use strict';





// ## 2. Variable
// let (added in ES6)

// Global scope : 블럭 안, 블럭 밖에서 모두 사용 가능하다. 
// 하지만 어플리케이션이 끝날 때까지 메모리에 할당되어져있기 때문에 최소한으로 사용해야한다.
let globalName = 'global name';

// Block scope : 블럭안에 변수를 선언하면 블럭 밖에서는 사용할 수 없다.
{
    let name = 'yoojin';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// let 이전에는 var를 사용했었다. 
// 이상하게도 var는 변수를 선언하기 이전에 값을 할당할 수 있고 출력도 할 수 있다.

// 이러한 현상을 'var hoisting' 이라고 한다.
// hoisting이란 : 변수의 선언문이 유효범위의 최상단으로 끌어올려지는 현상
// 그러므로 두번째 console.log(age) 의 결과는 4가 나온다.
console.log(age) // 결과 : undefined
age = 4;
console.log(age) 
var age;

// 이방식을 let을 이용하여서 해보면~
//age2 = 4;
//console.log(age2) // 오류 : Cannot access 'age2' before initialization
//console.log(age2) // Cannot access 'age2' before initialization
//age2 = 4;  // Cannot access 'age2' before initialization
//console.log(age2)    // Cannot access 'age2' before initialization
let age2;

// has no block scope
// var는 block을 철저히 무시한다.
{
    age = 4;
    var age;
}

console.log(age) // 결과 : 4





// 3. Constants
// favor immutable data type always for a few reasons:
//    - security
//    - thread safety (다양한 thread가 동시에 변수에 접근하여 값을 변경할 수 있는데 해킹에 위험함.)
//    - reduce human mistakes
// constants는 절대 값이 변경될 수 없음. 
// let으로 선언된 변수는 메모리의 어딘가를 포인터로 가르키고 있는데 
// const같은 경우에는 가르키고 있는 포인터가 잠겨있다.
// 값이 계속 변경될 수 있는 타입을 mutable 타입이라고 하는데 const는 immutable 타입이다.

const daysInWeek = 7;
const maxNumber = 5;





// 4. Variable types
// Primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function (function도 하나의 매개변수로 사용 가능하다는 의미.)

// 자바, C언어 에서는 얼마나 큰 숫자가 들어갈 것인지를 미리 고려하여 선언하여야하지만
//자바스크립트에서는 그럴 필요가 없다.

const count = 17; // integer
const size = 17.1; // decimal numver
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size} , type : ${typeof size}`);

// 4.1 number - speicla numeric values : infinity, -infinity, Na
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity); // Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); // NaN

// 4.2 string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // ``를 사용하면 편하다.
console.log('value: ' + helloBob + '  type: ' + typeof helloBob);

// 4.3 boolean
//false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`)


// 5. Dynamic typing: dynamically typed language
// 자바스크립트는 Dynamic typing , Java나 C언어는 Start typing 
// 자바스크립트는 변수를 선언할 때, 타입을 함께 선언하지 않고 런타임시 타입을 결정한다. 

// 처음 개발한 개발자가 'text'는 이름만으로 string이라고 생각해서 charAt으로 h를 가져왔지만
// 그 이후에 수정하는 개발자가 text = '8' / '2';에서 type이 number로 변경된것을 모르고 
// console.log(text.charAt(0));라고 했을 때 에러가 나는 경우가 종종 있다. 
// 자바스크립트가 가진 dynamic typing의 이러한 문제때문에 후에 type script가 나오게 되었다.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 에러가 남 -> 이런 현상때문에 type script가 나옴