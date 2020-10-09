import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	state = {
		data: [],
		id: 0,
		fname: null,
		lname: null,
		email: null,
		phone: 0,
		password: null,
		intervalIsSet: false,
		idToDelete: null,
		idToUpdate: null,
		objectToUpdate: null,
	};

	componentDidMount() {
		this.getDataFromDb();
		if (!this.state.intervalIsSet) {
			let interval = setInterval(this.getDataFromDb, 1000);
			this.setState({ intervalIsSet: interval });
		}
	}

	componentWillUnmount() {
		if (this.state.intervalIsSet) {
			clearInterval(this.state.intervalIsSet);
			this.setState({ intervalIsSet: null });
		}
	}

	getDataFromDb = () => {
		fetch("http://localhost:3001/api/getData")
			.then((data) => data.json())
			.then((res) => this.setState({ data: res.data }));
	};

	putDataToDB = (fname, lname, email,phone, password) => {
		let currentIds = this.state.data.map((data) => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
			++idToBeAdded;
		}

		axios.post("http://localhost:3001/api/putData", {
			id: idToBeAdded,
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            password: password
		});
	};

	

	render() {
		const { data } = this.state.data;
		return (
			<div>
				<div style={{ padding: "10px" }}>
					<input
						type='text'
						onChange={(e) => this.setState({ fname: e.target.value })}
						placeholder='First name'
						style={{ width: "200px" }}
					/>
					<input
						type='text'
						onChange={(e) => this.setState({ lname: e.target.value })}
						placeholder='Last name'
						style={{ width: "200px" }}
					/>
					<input
						type='text'
						onChange={(e) => this.setState({ email: e.target.value })}
						placeholder='Email'
						style={{ width: "200px" }}
					/>
					<input
						type='number'
						onChange={(e) => this.setState({ phone: e.target.value })}
						placeholder='Phone No'
						style={{ width: "200px" }}
					/>
					<input
						type='text'
						onChange={(e) => this.setState({ password: e.target.value })}
						placeholder='Password'
						style={{ width: "200px" }}
					/>
					<button
						onClick={() =>
							this.putDataToDB(
								this.state.fname,
								this.state.lname,
								this.state.email,
								this.state.phone,
								this.state.password
							)
						}>
						ADD
					</button>
				</div>
			</div>
		);
	}
}

export default App;
