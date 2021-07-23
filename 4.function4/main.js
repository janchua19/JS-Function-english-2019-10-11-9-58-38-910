function countWords(message){
  message = message.replace(/(^\s*)|(\s*$)/gi,""); //remove spaces in front and end
  message = message.replace(/[ ]{2,}/gi," "); // eliminate multiple spaces to 1
    message = message.replace(/\n /,"\n");
    return message.split(' ').length; 
}
countWords('Good morning, I love JavaScript.'); // should return 5