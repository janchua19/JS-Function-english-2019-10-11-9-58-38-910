function reverseString(message){
  var temp = "";
  for(var i = message.length - 1; i >= 0; i--)
    {
      temp += message[i];
    }
  return temp;
}
console.log(reverseString('hello'));