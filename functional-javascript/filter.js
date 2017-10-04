    function getShortMessages(messages) {
      // SOLUTION GOES HERE
     var reduced = messages.filter(msg => 
      	msg.message.length < 50);

     return reduced.map(item =>item.message)
    }
    
    module.exports = getShortMessages






// function getShortMessages(messages){
// return messages.filter(function(word){
// return word.message.length < 50
// }).map(function(item){
// 	return item.message
// })
// }
// module.exports = getShortMessages