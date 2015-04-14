var path = require('path'),
	http = require('http'),
	express = require('express'),
	app = express(),
	parentApp = express(),
	rootPath = process.env.HELLOHTML_ROOTPATH || "/",
	shouldThrowOnStartup = process.env.HELLOHTML_THROW_ON_START,
	server;

if(shouldThrowOnStartup) {
	throw new Error("Throwing on startup");
}

console.log(new Date(), 'test stdout before listening');
console.error(new Date(), 'test stderr before listening');

app.use(function(req, res, next) {
	console.log(new Date(), 'test stdout on request', req.url);
	console.error(new Date(), 'test stderr on request', req.url);
	next();
});

app.use('/env', function(req, res) {
	res.send('Your node environment is "' + process.env['NODE_ENV'] + '"');
});

app.use('/throw', function(req, res) {
	throw new Error('test error');
});

app.use(express.static(path.resolve(__dirname, 'public')));

parentApp.use(rootPath, app);

server = http.createServer(parentApp);

//expected to be after server starts listening
setTimeout(function() {
	console.log(new Date(), 'setTimeout test stdout after listening');
	console.error(new Date(), 'setTimeout test stderr after listening');
});

//expected to be before server starts listening
process.nextTick(function() {
	console.log(new Date(), 'nextTick test stdout after listen but before listening');
	console.error(new Date(), 'nextTick test stderr after listen but before listening');
});

server.listen(process.env.PORT || 3000, function() {
	console.log(new Date(), 'test stdout after listening');
	console.error(new Date(), 'test stderr after listening');
});

console.log(new Date(), 'sync test stdout before listening');
console.error(new Date(), 'sync test stderr after listening');