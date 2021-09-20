// 再代入する必要がない場合は const を使用する
// 変数への再代入は「変数の値は最初に定義した値と常に同じである」という参照透過性と呼ばれるルールを壊し、バグを発生させやすいため

// const は定数ではない
// 数値や文字列などオブジェクト以外のプリミティブな値で初期化すれば定数
// オブジェクトを const で宣言しても property は変更可能
const object = {
  key: "value",
};

console.log(object.key); // value
object.key = "new_value";
console.log(object.key); // new_value

// typeof 演算子はプリミティブ型かオブジェクトかを判別するもの
console.log(typeof true); // => "boolean"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { key: "value" }); // => "object"
console.log(typeof function () {}); // => "function"

// リテラルはプログラム上でデータ型の値を直接記述できるように構文として定義されたもの
// " " で囲んだ範囲が文字列リテラル
const str = "こんにちは";

// 文字列内部に出現しない別のクォート記号を使うことでエスケープなしに書ける
console.log("10 o'clock"); // 10 o'clock

console.log(`
複数行の
文字列を
テンプレートリテラルで書く
`);

const template = "テンプレートリテラル";
console.log(`これは${template}です`); // これはテンプレートリテラルです

// オブジェクトリテラル
// {} を書くことで新しいオブジェクトを作成できる
const obj = {}; // 中身が空のオブジェクト

// オブジェクトが持つキーをプロパティ名と呼ぶ
// 以下の場合、 key というプロパティを持つ
const obj2 = {
  key: "value",
};

// ドット記法
console.log(obj2.key);
// ブランケット記法
console.log(obj2["key"]);

// 配列リテラル
const array = [1, 2, 3];
console.log(array[0]);

// 厳密等価演算子
// 同じ型で同じ値である場合に true
console.log(1 === 1); // true

// オペランド(被演算子)がどちらもオブジェクトである場合は、
// オブジェクトの参照が同じ場合に true
const objA = {};
const objB = {};
console.log(objA === objB); // false
console.log(objA === objA); // true

// 等価演算子
// 同じデータ型のオペランドを比較する場合は、厳密等価演算子（===）と同じ結果
console.log("str" == "str"); // true
// オペランド同士が異なる型の値の場合、暗黙的に型変換を行ってから比較する
// 意図しない挙動になることがあるため基本的には使わない
console.log(0 == false); // true

// 比較したいオペランドが null or undefined であることを判定するときにのみ使用する
const value = undefined; // または null

// if (value === null || value === undefined) {
if (value == null) {
  console.log("value が null or undefined である場合の処理");
}

// 分割代入(Destructuring assignment)
// 左辺のオペランドが配列リテラルやオブジェクトリテラル
const array2 = [1, 2];
const [a, b] = array2;
console.log(a); // 1
console.log(b); // 2

const obj3 = {
  key: "value",
};
const { key } = obj3;
console.log(key); // "value"

// AND演算子
// 左辺を評価する際に、左辺を真偽値へと暗黙的な型変換をしてから判定
// falsy な値は false になる(falsy でない値は true になる)
// 左辺が falsy の場合は、右辺は評価されない
console.log("" && "右辺の値"); // ""
console.log(0 && "右辺の値"); // 0
console.log(null && "右辺の値"); // null

// 左辺が falsy でないので右辺が評価
true && console.log("このコンソールログは実行されます");

// OR演算子は左辺の値の評価結果が false なら右辺の評価結果を返す
console.log(false || "右辺の値"); // "右辺の値"

// NOT演算子
// オペランドの評価結果を反転した真偽値を返す
console.log(!false); // true

// NOT演算子を重ねて真偽値へ変換する
const str2 = "";
// 空文字列は falsy であるため、 true -> false へと変換される
// !!falsyな値 のように2度反転すれば false になる
console.log(!!str2); // false

// Nullish coalescing演算子
// 左辺が nullish(null or undefined) であるため、右辺の値の評価結果を返す
console.log(null ?? "右辺の値"); // "右辺の値"
console.log(undefined ?? "右辺の値"); // "右辺の値"
// 左辺が nullish ではないため、左辺の値の評価結果を返す
console.log(true ?? "右辺の値"); // true
console.log(false ?? "右辺の値"); // false

let inputValue = 0;
// o は falsy であるため右辺が入る
// const value2 = inputValue || 42;
const value2 = inputValue ?? 42;
console.log(value2);

// 三項演算子
function addPrefix(text, prefix) {
  // `prefix` が指定されていない場合は "pre-:" を付ける
  // 条件分岐による値を返せるため const で宣言と代入ができる
  const pre = typeof prefix === "string" ? prefix : "pre-";

  // if文だと宣言と代入を分ける必要があるため const を使えない
  // let pre = "pre:";
  // if (typeof prefix === "string") {
  // 	pre = prefix;
  // }
  return pre + text;
}

console.log(addPrefix("文字列")); // pre-文字列
console.log(addPrefix("文字列", "custom-")); // custom-文字列

// 暗黙的な型変換により右辺を数値の 1 へと変換してから比較する
// 基本的には、厳密等価演算子を使う(上でも記載)
console.log(1 == "1"); // true
// プログラムが例外を投げずに処理が進むため、なるべく暗黙的な型変換を避ける
console.log(1 + true); // 2

// NaN(Not a Number)型は何と演算しても結果が NaN になる
const x = 10;
const y = x + NaN;
console.log(y); // NaN

// NaN は暗黙的な型変換で最も厄介なもの
// どこで NaN になったかわかりにくくデバックが困難
// 可変長引数を受け取り、その合計値を返す関数
function sum(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}
const first = 1,
  second = 10;
let third; // `y` が undefined
console.log(sum(first, second, third)); // NaN

// 呼び出す側、呼び出される側で判定し、
// ドキュメント(JSDoc)で開発者に使い方を説明する
/**
 * 数値を合計した値を返します。
 * 1つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 **/
function sum2(...values) {
  return values.reduce((total, value) => {
    // 値が Number型ではない場合に例外を投げる
    if (typeof value !== "number") {
      throw new Error(`${value} is not Number`);
    }
    return total + Number(value);
  }, 0);
}

// console.log(sum2(first, second, third)); // Uncaught Error: undefined is not Number
