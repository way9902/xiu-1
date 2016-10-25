var app = require("express");

app.get("*", function (req, res){
	res.sendFile(__dirname + req.push);
})

app.listen(8888,function () {
	console.log("服务器启动成功");
})
