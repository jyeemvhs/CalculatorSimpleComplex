
let express = require('express');
var bodyParser = require('body-parser');   //new Need to add for post

let path = require("path");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //new Need to add for post
app.use(bodyParser.json());                          //new Need to add for post



let simpOrCompVal = 0;

//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
	res.sendFile(path.resolve(__dirname,"index.html"));
});
app.get("/simpOrComp",function(req,res) {
	res.sendFile(path.resolve(__dirname,"simpOrComp.html"));
});

let info = {};
app.get("/operation", function(req, res){
	console.log(req.query.num1 + " " + req.query.num2 + " " + req.query.oper);
	if (req.query.oper === 'Add')
	{

		{
			let sum = parseInt(req.query.num1) + parseInt(req.query.num2);
			info.str = req.query.num1 + " + " + req.query.num2 + " = " + sum;
		}

		console.log(info);
		res.json(info);
	}
	else if (req.query.oper === 'Factorial')
	{
		{
			let val = parseInt(req.query.num1);
			let factorial = 1.0;
			for (i=2;i<=val;i++)
				factorial *= i;
			info.str = req.query.num1 + "! = " + factorial;
		}

		console.log(info);
		res.json(info);
	}
	else if (req.query.oper === 'Multiply')
	{
		{
			let product = parseInt(req.query.num1) * parseInt(req.query.num2);
			info.str = req.query.num1 + " * " + req.query.num2 + " = " + product;
		}

		console.log(info);
		res.json(info);

	}
	else if (req.query.oper === 'Power')
	{
		{
			let val = Math.pow(parseInt(req.query.num1) , parseInt(req.query.num2));
			info.str = req.query.num1 + " ^ " + req.query.num2 + " = " + val;
		}

		console.log(info);
		res.json(info);

	}
});

app.get("/simpOrCompChange", function(req, res){
	console.log(req.query.val);
	if (req.query.val === 'simple')
		simpOrCompVal = 0;
	else if (req.query.val === 'complex')
		simpOrCompVal = 1;
	res.json(info);

});

app.get("/simpOrCompCheck", function(req, res){
	res.json({'simpOrCompVal':simpOrCompVal});
});


//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
	console.log("started on port 3000");
});
