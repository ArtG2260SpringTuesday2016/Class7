var names = ["Bowen","Ryan","Ryan","Annie","Leys"]

var checkNames = function(anArray){
  for(var i = 0; i < anArray.length; i++){
    if(anArray.length === 1){
      return false;
    }
  if (i > 0){
      if(anArray[i] === anArray[i+1])
      return true;
    }
  }
}

checkNames(names)
console.log(checkNames(names))
