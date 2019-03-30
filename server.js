const express = require('express')
const app = express()
const path = require('path')

app.use('/public', express.static('./dist/public'))

app.get('*', (req, res, next) => {
	if ((req.path.split("/")[1] === "public")) return next();
		res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(8001, () => {
	console.log('listening on 8001')
})