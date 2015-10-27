/* global process */
/* global __dirname */
var login = require(__dirname + '/../index.js');

//Should set environment user and password here
//export FB_EMAIL=trannhathanh@outlook.xxx
//export FB_PASSWORD=xxxxxxx

var FB_EMAIL    = process.env.FB_EMAIL;
var FB_PASSWORD = process.env.FB_PASSWORD;
// Create simple echo bot
login({email: FB_EMAIL, password: FB_PASSWORD}, function callback (err, api) {
    if(err) return console.error(err);
    //Tran Nhat Hanh: 100008458995613 (global) => 1441281989497087 (fake)
	api.sendMessage('Phu oi.', "100003069308687", function(err, obj){
		console.log('response: ', err, obj);
	});
    api.getThreadHistory("100003069308687", 0, 20, Date.now(), function(err, data){
        console.log(data);
    });
    /*
    api.listen(function callback(err, message) {
    	console.log(message);
        api.sendMessage(message.body, message.thread_id);
    });
    */
});