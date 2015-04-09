var path = require('path'),
	express = require('express'),
	app = express();
	parentApp = express(),
	rootPath = process.env.HELLOHTML_ROOTPATH || "/";

app.use(express.static(path.resolve(__dirname, 'public')));

parentApp.use(rootPath, app);

parentApp.listen(process.env.PORT || 3000);