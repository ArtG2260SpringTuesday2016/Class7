var fruits0=["blueberry", "apple", "peach"];
var fruits1=["blueberry", "apple", "apple"];
var fruits2=["peach","blueberry", "strawberry"];
var fruits3=["kiwi", "potato", "tomato"];

var checkFruits=function(anArray){
  for (var i=0; i<anArray.length; i++){
    if(anArray.length===1){
      return false;
    }
    if(i<0){
      if(anArray[i]===anArray[i+1]){
        return true;
      }
    }
  }
}


function draw() {
  console.log(checkFruits(fruits0))
  
}