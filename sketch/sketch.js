var isSame = function(ar) {
  var hold = ar.length;
  for (i = 0; i <= ar.length; i++) {
    hold--;
    if (ar.length <= 1 || typeof ar[i] != "string"){
    return false;
    }
    else if (ar[i] === ar[i + 1]){
      return true;
    }
    else if (hold === 0) {
      return false;
    }
  }
}

console.log(isSame(["Bill", "Jordan", "Jodan", "F"]));
console.log(isSame(["F", "G", "F", "R"]));
console.log(isSame(["F", "R", "R"]));
console.log(isSame([""]));
console.log(isSame([]));
console.log(isSame([2, 3, 4, 5, 1, 1]));
console.log(isSame([undefined]));
console.log(isSame(["Bill", "bill", "Bill", undefined, undefined]));
