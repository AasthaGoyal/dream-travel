import React from "react";

class Api extends React.Component {
	state = { locationId: "" };

	componentDidMount() {
		fetch(
			"https://tripadvisor1.p.rapidapi.com/locations/search?query=auckland",
			{
				headers: {
					"x-rapidapi-host": "some host",
					"x-rapidapi-key":
						"some key",
					useQueryString: true,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					locationId: data.data[0].result_object.location_id,
				});
			});
	}

	getPlaces() {
		console.log(this.state.locationId);
		fetch(
			"https://tripadvisor1.p.rapidapi.com/attractions/list?location_id=" +
				this.state.locationId,
			{
				headers: {
					"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
					"x-rapidapi-key":
						"1675195e27msh90ac8fbce74dfa8p19c5f6jsnba2c0d50c801",
					useQueryString: true,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => data.data.map(item => console.log(item)));
	}

	render() {
		this.getPlaces();
		return <div>api here </div>;
	}
}

export default Api;
