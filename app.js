var path = require('path'),
	express = require('express'),
	app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 3000);