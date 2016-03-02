var isSame = function(ar) {
  var hold = "";
  for (i = 0; i <= ar.length; i++) {
    hold = ar[i - 1];
    if (ar.length === 0){
    return "Use an array of a length of at least 1";
    }
    else if (ar[i] === hold){
      return "true";
    }
    else if (i === ar.length) {
      return "false";
    }
  }
}

console.log(isSame(["Bill", "Jordan", "Jodan", "F"]));
console.log(isSame(["F", "G", "F", "R"]));
console.log(isSame(["F", "R", "R"]));
console.log(isSame([""]));
console.log(isSame([]));