var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const { database } = require("firebase");

const API_PORT = 3001;
const app = express();
//creating an instance of the router
const router = express.Router();

// mongoose.connect("mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb://localhost:27017/dbtravel", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
var db = mongoose.connection;


// db.on("error", console.log.bind(console, "connection error"));
// db.once("open", () => {
// 	console.log("connection succeeded");
// 	console.log("collections are", db.collections);
// });

//to use the router


var Schema = mongoose.Schema;
var user = new Schema(
	{
		fname: String,
		lname: String,
		email: String,
		phone: Number,
		password: String,
	}
);
console.log('created schema');

//var userModel = mongoose.model("dbusers", user);
let UserModel = mongoose.model("dbusers", user) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addname", (req, res) => {
	
	var myData = new UserModel(req.body);

	db.collection("dbusers").insertOne(myData)
	.then(result => {
		res.send("item saved")
		console.log(result);
	})
	.catch(err => {
		res.send(err);
		console.log('some error occured', err)
	});
	
	// myData.save()
	// .then(result => {
	// 	res.send("item saved")
	// 	console.log(result.id);
	// })
	// .catch(err => {
	// 	res.send(err);
	// 	console.log('some error occured', err)
	// });
	//db.collection("dbusers").insert(myData);

	// myData.save(function(err, result) {
	// 	console.log(result);
	// })
	// myData
	// 	.save()
	// 	.then((item) => {
	// 		res.send("item saved to database");
	// 		console.log("item saved in database");
	// 	})
	// 	.catch((err) => {
	// 		res.status(400).send("unable to save database");
	// 		console.log("some error occured");
	// 	});
});

router.route('/test').get((req,res) => {
	UserModel.find((err, testData) => {
		if(err){
			console.log('some error occured', err)
		}
		else{
			res.json(testData);
			console.log('Tets data', testData);
		}
	})
});


app.use("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(API_PORT, function () {
	console.log("server is running on ", API_PORT);
});

//creating a router handler


// userModel.find({}, function(err, data) {
// 	console.log('>>>' + data);
// });

// const { MongoClient } = require("mongodb");
// const uri =
// 	"mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri);

// async function main() {
// 	try {
// 		// Connect to the MongoDB cluster
// 		await client.connect();
// 		console.log("database successfully connected");

// 		await createListing(client, {
// 			fname: "Lovely loft",
// 			lname: "charming summary",
// 			email: "",
// 			phone: 1,
// 			password: ""
// 		});
// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		// Close the connection to the MongoDB cluster
// 		await client.close();
// 	}
// 	return client;
// }

// var app = express();
// main().console.error();

// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// );
// app.use(bodyParser.json());
// app.use(logger("dev"));

// router.get("/", (req,res) => {
// 	console.log('getting data');
// 	res.json({ message: "hello world"});
// });

// router.get("/getData", (req, res) => {
// 	console.log('trying to get data')
// 	Data.find((err, data) => {
// 		if (err) return res.json({ success: false, error: err });
// 		return res.json({ success: true, data: data });
// 	});
// });

// router.post("/putData", (req,res) => {
// 	console.log('Trying to inset data');
// 	let data = new Data({
// 		fname: 'fname',
// 		lname: 'lname',
// 		email: 'email',
// 		phone: '2',
// 		password: 'pass'
// 	});

// 	data.save(function(err) {
// 		if (err) throw err;
// 		console.log('item saved')
// 	});

//res.redirect('/');

// if((!id && id!=0) || !fname || !lname || !email || !phone || !password){
// 	console.log('invalid inputs');
// 	return res.json({
// 		success: false,
// 		error: 'Invalid inputs'
// 	});
// }
// data.fname = fname;
// data.id = id;
// data.lname = lname;
// data.email = email;
// data.phone = phone;
// data.password = password;
// data.save (err => {
// 	if (err) return res.json({
// 		success: false,
// 		error: err
// 	});
// 	return res.json({
// 		success: true
// 	});
// });
//});

// app.use("/api", router);

// app.listen(API_PORT, () => console.log(`Listening to port ${API_PORT}`));

// app.post("/sign_up", function (req, res) {
// 	var fname = req.body.fname;
// 	var lname = req.body.lname;
// 	var email = req.body.email;
// 	var phone = req.body.phone;
// 	var pass = req.body.password;
// 	var cpass = req.body.cpassword;

// 	var data = {
// 		fname: fname,
// 		lname: lname,
// 		email: email,
// 		phone: phone,
// 		password: pass,
// 		cpassword: cpass,
// 	};

// 	console.log(data);

// });

// async function createListing(client, newListing) {
// 	const result = await client
// 		.db("dbtravel")
// 		.collection("dbusers")
// 		.insertOne(newListing);
// 	console.log(`New listing created with id: ${result.insertedId}`);
// }
