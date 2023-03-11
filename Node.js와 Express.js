ES6란?
  ECMAScript 버전 6이후를 통틀어 일반적으로 ES6라고 부름
  ECMAScript: 계속해서 발전해가는 JavaScript의 표준문법
  2015년, ECMAScript 버전 6 이후로 많은 현대적인 문법이 추가됨
  
ES6를 사용하는 이유?
  현대적인 문법은 생산성 향상에 도움을 줌
  Node.js는 빠르게 최신 ECMAScript를 지원중
  자주 사용되는 유용한 문법을 익히고 필요한 부분에 적절하게 활용하는 것이 중요

자주 사용되는 문법 1- let,const
const Title = 'NODE.JS';
let director = 'elice';
director = 'rabbit';
TITLE = 'ES6'; // 오류 발생

자주 사용되는 문법 2 - Template String
const name = 'elice';
const age = 5;
// 문자열 사이에 간단하게 변수 사용 가능
// 따옴표 간단하게 사용 가능
// 줄 바꿈 지원
const hi =
'My name is ${name}.
I'm ${age} years old';
console.log(hi);

자주 사용되는 문법 3 - arrow function
const doSomething = (param) => {
  console.log('do something');
}

//익명함수 간결하게 표현가능
setTimeout((param) => {
  console.log('no name function');
},0)

//함수 새로 선언 불가능
doSomething = () => {
  console.log('do other')
}
