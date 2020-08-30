const { MongoClient } = require("mongodb");


async function main() {

	const uri =
		"mongodb+srv://aasthag:daasthag@cluster0.ktmdx.mongodb.net/test?retryWrites=true&w=majority";
	const client = new MongoClient(uri);
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
}

// 	await createMultipleListings(client, [
// 		{
// 			name: "Infinite Views",
// 			summary: "Modern home with infinite views from the infinity pool",
// 			property_type: "House",
// 			bedrooms: 5,
// 			bathrooms: 4.5,
// 			beds: 5,
// 		},
// 		{
// 			name: "Private room in London",
// 			property_type: "Apartment",
// 			bedrooms: 1,
// 			bathroom: 1,
// 		},
// 		{
// 			name: "Beautiful Beach House",
// 			summary: "Enjoy relaxed beach living in this house with a private beach",
// 			bedrooms: 4,
// 			bathrooms: 2.5,
// 			beds: 7,
// 			last_review: new Date(),
// 		},
// 	]);
// 	await findOneListingByName(client, "Infinite Views");
// }

async function createListing(client, newListing) {
	const result = await client
		.db("dbtravel")
		.collection("dbusers")
		.insertOne(newListing);
	console.log(`New listing created with id: ${result.insertedId}`);
}

main().catch(console.error);

// async function createMultipleListings(client, newListing) {
// 	const result = await client.db("sample_airnb").collection("listingsAndReviews").insertMany(newListing);
// 	console.log(
// 		`${result.insertedCount} new listing(s) created with the following id(s):`
// 	);
// 	console.log(result.insertedIds);
// }

// async function findOneListingByName (client, nameOfListing) {
// 	result = await client.db("sample_airnb").collection("listingsAndReviews")
// 	.findOne({name: nameOfListing});

// 	if (result) {
// 		console.log(
// 			`Found a listing in the collection with the name '${nameOfListing}':`
// 		);
// 		console.log(result);
// 	} else {
// 		console.log(`No listings found with the name '${nameOfListing}'`);
// 	}

//}
