// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable(변수)
// 변수를 만들땐 let 이라는 키워드 이용.
// let은 ES 6에 추가되어진 언어이다.

//{}는 Block scope, 이걸 이용하면 블록 밖에서는 더이상
//블록 안의 내용을 볼수없게됨.
//console.log(name);을 블럭밖에서 하면 아무값도 안나온다는 뜻.
{
    let name = 'ellie'; //name변수 선언과 동시에 ellie변수값 할당.
    console.log(name);
    name = 'hello';
    console.log(name);
}


let globalName = 'global name';
//반대로 이렇게 {}을 쓰지않고 파일 안에다 바로 정의해서
//쓰는 변수들을 글로벌 스콥이라고 부름
//얘네는 어느곳에서나 접근 가능.
//즉, 블럭밖에서든 블럭안에서든 얘네는 console로 출력 가능.
// 얘넨 어플리케이션이 실행되는 순간부터 끝날때까지
// 항상메모리에 탑재되어 있어있기에 최소한으로 쓰는게 좋고
// 가능하면 클래스나 함수 if나 for등 필요한 부분에서만 정의해서 쓰는게 좋음.

/* 자바스크립트에서 변수를 선언할수있는 키워드는 
   단 하나! let 이다.
   그 전에는 var를 썼었다. 이젠 절대 쓰지마라!
   일단 var는 블록스콥{}가 없어. 블록을 철저히 무시하는 아이야.
   {}안에서 선언해도 콘솔이용해 블럭밖에서 출력할수있어.
   규모있는 프로젝트를 하다보면 선언하지도 않은 값들이
   할당되는 이상한 일들이 발생할수있어.

   대부분의 프로그래밍 언어에선 변수를 선언 후 값을 
   할당하는게 정상적인데 자바스크립트 var에서는 
   선언도 하기전에 값을 할당하거나 할당하기전에 출력도가능.
   console.log(age);
   age = 4;
   var age;
   이딴 순서로 가능하다는 이야기고 이렇게하면 
   변수는 정의되어 있지만 값은 아직 안들어가있네?
   하고 나오는거임. 
   이걸 var hoisting(호이스팅)이라함.
   이건 어디에 선언했느냐에 상관없이 항상 제일 위로
   선언을 끌어올려주는 것입니다. 호이스팅이 끌어올려주다
   라는 의미이다 라고하면돼.

   let은 이딴식으로 안됨 에러나옴.
*/


const daysInwwek = 7;
const maxNumber = 5;
//Constants는 한번 할당하면 값이 절대 바뀌지 않는다.
/*
   변수를 이용하면 변수가 메모리 어딘가의 할당된 박스를
   가리키고 있어서 포인터를 이용해 값을 계속 바꿔갈수있었지만,
   컨스턴스는 가리키고있는 포인터가 잠겨있고 그래서
   값을 선언함과 동시에 할당한 뒤로는 절대 다시는
   값을 변경할수 없어.

   값이 계속 변경될수있는걸 Mutable 데이터 타입이라해.
   이게 let키워드를 이용한 변수야.

   컨스턴스는 Immutable 데이터 타입이라 불려. 
   1. 보안상의 이유
      한번 작성한 값을 다른 해커들이 이상한 코드를 삽입하여
      값을 계속 변경해 나가는게 가능한데 이 데이터 타입은
      그것을 방지할수있다.
   2. thread safety
      어플리케이션이 실행되면 한가지의 프로세스가 할당이 되고
      그 프로세스 안에서는 다양한 쓰레드가 동시에 돌아가면서 어플리케이션을
      조금 더 효율적으로 빠르게 동작할수있도록 도와주는데
      이 다양한 쓰레드들이 동시에 이 변수에 접근해서 값을 변경을할수가있는데
      이 동시에 값을 변경한다는것은 조금 위험한 일이다.
      그래서 가능하면 이렇게 값이 변하지않는것을 사용하는게 좋다.
      그래서 앞으로 변경돼야될 좋은이유가 없다면 const를 이용하는게좋아.
   3. reduce human mistakes  
      이렇게 해야지 내가 나중에 코드를 변경하거나 아니면 나중에
      다른 개발자가 코드를 바꿀때도 그 실수를 방지해줄수있어.
*/

  // Variable types

/*
   어떤 프로그래밍 언어든
   primitive 타입과 object타입 두가지로 나눠져 있어.

   primitive 타입은 
   더이상 작은 단위로 나눠질수 없는 한가지 아이템을 말해.
   여기에는 숫자 number, string, boolean,null, undefiedn, symbol 등이 있어.

   object 타입은 
   싱글 아이템들을 여러개 묶어서 한 단위로 한 박스로
   관리할수 있게 해준다. 즉, box container!

   자바스크립트에선 function도 데이터 타입중 하나로,
   우리 프로그래밍 언어는 first-class function이 지원이돼!
   이 말은 이 프래그래밍 언어에선 펑션도 다른 데이터 타입처럼
   변수에 할당이 가능하고 또 그렇기 때문에 
   함수의 파라미터! 인자로도 전달이 되고 
   함수에서 리턴타입으로도 펑션을 리턴할수있다.는뜻.

   다른 언어에선, 예로 c나 java에선 int, double등 할당할데이터타입이 많은데,
   자바스크립트에선 number 이거하나면 숫자는 끝이야! 얼마나 큰사이즈 할당할지 생각할필요없어.
   심지어 자바스크립트에선 number이라고 데이터타입을
   선언하지 않아도 돼.
   왜냐면 js에선 타입이 다이나믹하게 결정돼.
   그냥 let a = 12; 이런식으로 해주면 끝나.
   타입스크립트도 number만있는건 마찬가지지만
   let a: number = 12; 이렇게 number을 정확히 명시해야해.

*/

//하지만 number에서도 특별한 값이 미리 정해져 있는데
const infinity = 1 / 0; //0으로 나누면 무한대로가.
const negativeInfinity = -1 / 0; //-Infinity 출력
const nAn = 'not a number' / 2;
//숫자가 아닌 스트링을 숫자로 나누면 NaN값이 출력돼.

//js에서 number는 -2**53 ~ 2*53 범위의 숫자만 표현가능해.
//최근에 bigInt라는 타입이 추가됐어.
//그래서 숫자의 제일 마지막에n만붙이면 빅인트로 간주되어져.
const bigInt = 1234553542432432515411324n; //아직 크롬과 파이어폭스에서만 지원.


// string
/*
   다른 프로그래밍 언어에서 한가지의 캐릭터만 들어있는 데이터타입이
   따로 있지만 js에선 한가지의 글자던 여러개의 글자던 
   전부 string 타입으로 할당이 돼.
   일반 스트링과 다른 변수를 + 기호를 이용하여 
   스트링을 붙일수 있어.

   많이 쓰는건 template literals또는 template string이라
   불리는 것인데 ''과 $와 {}를 이용하면 
   변수의 값이 자동적으로 붙어져 나와.

*/
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //tamplate sting
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
//바로 위에 두줄 차이를 봐 tamplate이용하면 훨 간단하지?


// boolean 참과 거짓
// false 값은 0, null, undefined, NaN, '' 이건 비어져있는 스트링 
// true 값은 1 이나 스트링이나 전부 트루로 간주.
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 타입 : 너는 텅텅빈 값이야 너는 암것도 아니야 라는 지정!
// 텅텅빈 값으로 값이 지정된것!
let nothing = null; //널로 값이 할당! 되어진경우.
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 타입 : 선언은 되었지만 아무것도 값이 지정안된것.
let x; // let x = undefined; 라고 명확히 할당해도 언디파인드.
console.log(`value: ${x}, type: ${typeof x}`);

// symbol 타입 : 맵이나 다른 자료구조에서 고유의 식별자가
/*필요하거나 동시 다발적으로 일어날수있는 코드에서 우선순위를
주고싶을때 정말 고유한 식별자가 필요할때 쓰여지는 아이인데
간혹 식별자를 스트링을 이용해서 쓰는 경우도 있는데
이 스트링은 다른 모듈이나 다른 파일에서 동일한 스트링을 썼을때
동일한 식별자로 간주됨. 하지만!
반대로 심볼같은 경우는 동일한 아이들을 이용해서 심볼을
만들었지만 두가지의 심볼은 다른 경우야!
그래서 이것들 동일한지 아닌지 검사해보면 아니라고 나와!
그래서 심볼은 동일한 스트링을 작성했어도 다른심볼로 만들어지기 
때문에 주어지는 스트링에 상관없이 고유한 식별자를 만들때
사용되어집니다. 
심볼은 바로 출력하면 에러가 발생하니 항상 닷디스크립션 즉,
.description을 이용하여 스트링으로 변환하여 출력해야돼.
*/
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing 다이나믹 타이핑!
// js는 dynamically typed language라고 불려!
// 선언할때 어떤 타입인지 선언하지 않고
// 런타임, 프로그램이 동작할때 할당된 값에 따라서 
// 타입이 변경될수 있다는걸 얘기하는것!
/*
   이런 다이나믹타이핑 언어는 내가 좋은 아이디어가 있을때
   빠르게 프로토타입을 하고싶을땐 정말 유연하게
   쓸수있는 언어지만 다수의 엔지니어들이 아니면
   어느정도 규모가있는 프로젝트를 만들때
   이런 다이나믹 타이핑 때문에 위험한 상황이 한두번이
   아닐수있다.
*/
//예를들어
let text = 'hello'; //이렇게 헬로라는 스트링을 할당하게되면
console.log(`value: ${text}, type: ${typeof text}`);
//text는 바로 스트링이라는 변수가 된다. 하지만 얘를 
text = 1; //숫자 1 을 할당하게 되면 
console.log(`value: ${text}, type: ${typeof text}`);
// 타입이 number로 바뀐다.
//그리고 만약 이 text에 
text = '7' + 5; //스트링과 넘버를 더해주면
console.log(`value: ${text}, type: ${typeof text}`);
//number 5를 스트링으로 변환해 스트링+스트링이돼 75가된다.
text = '8' / '2';//반대로 스트링과 스트링을 나누면
console.log(`value: ${text}, type: ${typeof text}`);
//뭐야 숫자들을 나눌수있는 나누기연산자를 썼네?
// 스트링안에 든것도 실제로 숫자값이네? 
// 그럼 숫자와 숫자를 나누자 라고해서 8/2가되어 4가출력돼.
// number로 타입이 변환된거지.

/* 여기서 위험이 발생해.
  많은 개발자들이 text라는 변수이름을 통해서 
  스트링의 타입을 에상하고있어. 그래서 아 나는
  제일 첫번째 있는 캐릭터를 받아와야지 하고
  let text = 'hello'; 
  console.log(text.charAt(0)); 생각하게돼.
  프로그래밍 언어에서 인덱싱은 배열을 쓸때 0부터 시작되는데
  당연히 0번째니까 첫번째 hello에서 h가 출력이 되게돼.
  이렇게 스트링으로 이해하기때문에 h를 받아오는게 맞는데
  중간에 누군가 타입을 숫자로 바꿔버렸네?
  나중에 개발자가 마지막도 스트링인 것으로 이해해서
  마지막도 charAt로 함수를 부르게되면 에러가 발생해.
  그래서 js는 런타임에서 타입이 정해지기 때문에 
  에러가 런타임으로 발생하는경우가 굉장히 많아.
  이것때문에 뒷통수를 하두 맞아서 타입스크립트 TS가 나오게돼.
  이건 js위에 타입이 더 올려진 언어인데 이거말고 저걸 먼저 배워야되는게 아니냐
  질문할수도 있지만 이건 js위에 타입이 올려진 언어이기에
  우리가 js를 충분히 배우고 TS로 넘어가도 돼!
  그리고 js를 이용해 배우게되면 브라우져가 이해할수있기에
  실시간으로 연동해 볼수가있지만 TS는 결국 브라우저가
  이해할수있는 js로 트랜스컴파일러를 이용해야 하기에
  실시간으로 볼수있는게 어렵기 때문에 일단은 js를 
  충분히 배우고 나중에 TS를 배우면 돼.
  배우는것도 오래걸리질 않아.
*/
  // object는 일상생활에서 보는 물건과 물체들을 대표할수있는
  // 박스 형태들을 말해.
  const ellie = { name: 'ellie', age: 20};
  //그냥 변수 name, age는 아무것도 설명이 되지 않지만
  //ellie라는 오브젝트를 만들어 이름은 ellie고 
  //나이는 20살이다 이렇게 얘기를 할수가 있는데,
  //지금 ellie는 const로 지정돼 있어서
  //한번 할당된 이 오브젝트는 다시는 다른 오브젝트로 
  // 변경이 불가능해.
  //하지만 이 ellie 오브젝트 안에는 
  // name과 age라는 변수들이 존재해.
  //그래서 ellie.name  ellie.age 이런식으로 하면
  //이 각각 포인트가 가리키고있는 메모리에 
  //다른값으로 할당이 가능한거야. 그래서
  ellie.age = 21;//이렇게 변경이 가능해.