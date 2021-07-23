function palindrome(message){
  var temp = "";
  var returnMessage;
	for(var i = message.length - 1; i >= 0; i--)
	{
		temp += message[i];
	}
	if(message == temp)
		returnMessage = true;
	else
		returnMessage = false;

	return returnMessage;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true