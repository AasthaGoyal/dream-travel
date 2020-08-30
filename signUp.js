const {buildSchema} = require('graphsql');

module.exports = buildSchema(`

type User{
	_id: ID!
	firstname: String!
	lastname: String!
	createdAt: String!
}

input userInput {
	firstname: String!
	lastname: String!
}

type Query {
	users: [user!]
}

type Mutation {
	createUser(user: userInput): User
}

schema {
	query: Query
	mutation: Mutation
}


`);
