function alphabetSort(message){
	var temp = message.split('');
	message = temp.sort();
	return message.join('');
}
console.log(alphabetSort('hello')); // should return 'ehllo'