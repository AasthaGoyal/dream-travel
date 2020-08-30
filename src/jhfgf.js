import React from "react";

const mongoose = require('mongoose');
const { assert } = require("assert");

class BucketList extends React.Component {
	async  main() {
		 const uri ="mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/sample_airnb?retryWrites=true&w=majority";
		// mongoose.connect(uri, options).then(() => {
		// 	console.log('connection established successfully');
		// }).catch(error) {
		// 	console.log('some error occured', error);
		// }

		// let userSchema = mongoose.Schema({ 
		// 	name: String,
		// 	email:String
		// });

		const uri =
			"mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority";
		const client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('the client is ', client);
		try {
			// Connect to the MongoDB cluster
			await client.connect();

			// Make the appropriate DB calls
			//await listDatabases(client);
		} catch (e) {

			console.log('oops',e);
		} finally {
			await client.close();
		}
		// var uri = "mongodb://127.0.0.1:27017";
		// var MongoClient = require('mongodb').MongoClient;
		// MongoClient.connect(uri, function (err, db) {
		// 	if (err) throw err;
		// 	console.log("Connected to mongodb");
		// 	db.close();
		// });
	}

	async listDatabases(client) {
		let databasesList = await client.db().admin().listDatabases();

		console.log("databases");
		databasesList.databases.forEach((db) => console.log(`-${db.name}`));
	}

	render() {
		this.main().catch(console.error);
		return <div> this is register app </div>;
	}
}

export default BucketList;
