// 仮引数よりも呼び出し時の引数が少ない場合は undifined が代入される
function echo(x, y) {
  return `${x} and ${y}`;
}
console.log(echo(1,2)); // 1 and 2
console.log(echo(1)); // 1 and undefined
console.log(echo()); // undefined and undefined
