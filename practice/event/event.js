var EventEmitter=require('events').EventEmitter;

var life = new EventEmitter();

life.on('RelaxMe',function(who){
	console.log('给'+who+'倒水');
});
life.on('RelaxMe',function(who){
	console.log('给'+who+'揉肩');
});

life.emit('RelaxMe','李白');

console.log(life.listeners('RelaxMe').length);
console.log(EventEmitter.listenerCount(life,'RelaxMe'));


