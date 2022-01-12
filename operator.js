
// 1.string concatenation
console.log('my' + 'cat');
console.log('1' + 2 );
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1) // add
console.log(1 - 1) // substract
console.log(1 / 1) // divide
console.log(1 * 1) // multiply
console.log(5 % 2) // remainder
console.log(2 ** 3) // exponentiation


// 3. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; // counter = 3
// preIncrement = counter; // preIncrement = 3
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);

const postIncrement = counter++;
// preIncrement = counter; // preIncrement = 3
// counter = counter + 1; // counter = 4
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);

const preDecrement = --counter;
// counter = counter - 1; // counter = 3
// preIncrement = counter; // preIncrement = 3
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);

const postDecrement = counter--;
// preIncrement = counter; // preIncrement = 3
// counter = counter - 1; // counter = 2
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);



// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2;

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('안뇽');
    }
    return true;
}

// || (or), finds the first truthy value
// 주니어 개발자들이 많이 실수하는 부분이 or이나 and 연산시
// heavy한 function이나 연산을 앞에 넣게되면 
// ex) console.log(`or : ${check() || value2 || value1}`);
// check()가 false일 시 메모리와 시간을 많이 쓰게된다. 
// heavy한 연산은 맨뒤에 두는 것이 맞다. 
console.log(`or : ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

// often used to compress long if-statement
// mullableObject && nullableObject.somthing
// 보통 실무에서 mullableObject && nullableObject.somthing 와 같은 방법으로 사용한다.
// nullableObject가 null이 아니면 somthing function을 실행하게 한다. 
// 이러한 방법을 풀어서 적자면 아래의 코드가 된다.
//if (nullableObject != null){
//    nullableObject.something;
//}



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// loose equality같은 경우 type은 고려하지않고 값만 비교하기때문에 
// 해당 값은 true이다. 
console.log(stringFive == numberFive);
//false
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// strict equality같은 경우 type도 비교하기 떄문에 
// 해당값은 false이다. 
console.log(stringFive === numberFive);
// true
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

//false
console.log(ellie1 == ellie2); 
//false
console.log(ellie1 === ellie2);
// true -> object 같은 경우 메모리에 reference가 저장된다고 이전에 배웠다. 
//          그러면 여기서 ellie3에 ellie1을 저장했으므로 ellie3에는 ellie1의 ref가 저장된다.
// 그러므로 strict equality로 해도 두개의 object는 같다.
console.log(ellie1 === ellie3);

// equality - puzzler
// false는 boolean type이다. 
console.log( 0 == false); // 내생각 : true 0
console.log( 0 === false); // 내생각 : false 0
console.log( '' == false); // 내생각 : true 0
console.log( '' === false); // 내생각 : false 0
console.log( null == undefined); // 내생각 : true 0 
console.log( null === undefined); // 내생각 : false  0




// 8. Conditional operators : if
// if, else if. else
const name = 'df';
if (name === 'elie'){
    console.log('Welcome, Ellie! ');
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unkwon');
}



// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'df' ? 'yes' : 'no');



// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you');
        break;    
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

// 위의 코드에 경우 chrome 과 firefox 의 결과가 반복된다. 
// 그러므로 아래의 코드와 같이 수정해도 인식된다.

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome': 
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}




// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code si executed first,
// then check the condition.
// do - while문의 경우 while문과 다르게 do문을 먼저 실행하고 while문의 조건문을 확인한다.
do {
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step)
// for 루프에서 i = 3인 bejin 부분의 경우 한번만 실행된다. (코테 출제)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i-2){
    //inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops
// 이중 for문의 경우, 시간 복잡도가 O(n^2) 이므로 CPU에 좋지않기 때문에
// 왠만하면 사용하지 않는 것이 좋다.
for (let i = 0; i < 10; i++){
    for (let j = 0; i < 10; j++){
        console.log(`i : ${i}, j : ${j}`);
    } 
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(짝수)(use continue)
// 내 답
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        print(i);
        continue;
    }
}
// 정답
// continue는 그 이후의 과정을 모두 생략하고 다음 단계로 넘어간다. 

for (let i = 0; i < 11; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(`q1.${i}`);
}

// 위의 방법은 사실 좋은 풀이법은 아니다. 해당 문제에 더 효율적일 풀이는 아래 코드이다.
for (let i = 0; i < 11; i++){
    if (i % 2 === 0){
        console.log(`q1.${i}`);
    }
}


// Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
//내 답
for (let i = 0; i <= 10; i++){
    if (i < 8){
        print(i);
    }else{
        break;
    }
}

//정답
for (let i = 0; i <= 10; i++){
    if (i > 8){
        break;
    }
    console.log(`q2.${i}`);
}


