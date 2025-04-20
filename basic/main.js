const title = {
  printTitle(chapNo) {
    console.log(
      '-------------------------------chapter' +
        chapNo +
        '-------------------------------'
    );
  },
};

const c = {
  l(tmp) {
    console.log(tmp);
  },
};

let count = 0;
console.log(count);
count = 30;
console.log(count);

// 14
// 数字は変数名の頭に置けない
// jsのベストプラクティスはキャメルケース

// 16
let result = 0;
result = 7;
// 以下全部同じ
result = result + 1;
result += 1;
// これは+1する前のresultを返す
result++;
// これは+1した後のresultを返す
++result;

// 17
// データの型
// number型 integer float
// string型
// コード実行時に型を決めることを動的型付け、実行前に決めることを静的型付けと呼ぶ
// jsは動的型付け

// 18
title.printTitle(18);
// string型 3つの宣言方法
// シングル、ダブル、バッククヲーテーション
userName = 'macaroni';
string = 'hello' + userName;

string = `hello ${userName}`;
console.log(string);

string = 'hello\nsomeName';
console.log(string);
string = `hello
someName`;
console.log(string);

title.printTitle(19);
console.log('10' + 10);

title.printTitle(20);
const userNum = '10';
let calcResult = Number(userNum) + 10;
c.l(calcResult);
calcResult = parseInt(userNum) + 10;
c.l(calcResult);
calcResult = parseFloat(userNum) + 10;
c.l(calcResult);
calcResult = +userNum + 10;
c.l(calcResult);
