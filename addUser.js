var express = require("express");
var bodyParser = require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

const { MongoClient } = require("mongodb");
const uri =
	"mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const Schema = client.Schema({
	firstname: {
		type:String,
		required: true,
	},
	lastname: {
		type:String,
		required: true,
	},

},
{
	timestamps: true
})

async function main() {
	try {
		// Connect to the MongoDB cluster
		await client.connect();
		console.log("database successfully connected");

		await createListing(client, {
			fname: "Lovely loft",
			lname: "charming summary",
			email: "",
			phone: 1,
			password: "",
			cpassword: "",
		});
	} catch (e) {
		console.error(e);
	} finally {
		// Close the connection to the MongoDB cluster
		await client.close();
	}
	return client;
}

var app = express();
main().console.error();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.post("/sign_up", function (req, res) {
	var fname = req.body.fname;
	var lname = req.body.lname;
	var email = req.body.email;
	var phone = req.body.phone;
	var pass = req.body.password;
	var cpass = req.body.cpassword;

	var data = {
		fname: fname,
		lname: lname,
		email: email,
		phone: phone,
		password: pass,
		cpassword: cpass,
	};

	console.log(data);


});

async function createListing(client, newListing) {
	const result = await client
		.db("dbtravel")
		.collection("dbusers")
		.insertOne(newListing);
	console.log(`New listing created with id: ${result.insertedId}`);
}
