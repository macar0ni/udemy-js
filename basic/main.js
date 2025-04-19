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
