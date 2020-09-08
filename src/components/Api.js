import React from "react";
import Filters from "./Filters";

class Api extends React.Component {
	constructor(props) {
		super(props);
		this.state = { locationId: "", dataLists: [], filters: [] };
		this.getLocationId = this.getLocationId.bind(this);
		this.getPlaces = this.getPlaces.bind(this);
	}
	componentDidMount() {
		this.getLocationId();
	}

	getLocationId() {
		let self = this;
		// await fetch(
		// 	"https://tripadvisor1.p.rapidapi.com/locations/search?query=auckland",
		// 	{
		// 		headers: {
		// 			"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		// 			"x-rapidapi-key":
		// 				"bf6713d895msh41a31b38ecf3297p183731jsnc6bbf8821cd8",
		// 			useQueryString: true,
		// 		},
		// 	}
		// )
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		this.setState({
		// 			locationId: data.data[0].result_object.location_id,
		// 		});
		// 	});
		this.setState({ locationId: "1811027" });
		self.getPlaces();
	}

	async getPlaces() {
		console.log(this.state.locationId);
		await fetch(
			"https://tripadvisor1.p.rapidapi.com/attractions/list?location_id=1811027&lang=en_US&currency=NZD&sort=recommended&lunit=km",
			{
				headers: {
					"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
					"x-rapidapi-key":
						"bf6713d895msh41a31b38ecf3297p183731jsnc6bbf8821cd8",
					useQueryString: true,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({
					dataLists: data.data.map((item) => ({
						name: item.name,
						address: item.address,
						subcategory: item.subcategory,
						latitude: item.latitude,
						longitude: item.longiude,
						description: item.description,
						photo: item.photo,
						subtype: item.subtype,
						rating: item.rating,
						website: item.website,
						tags:item.tags,

					})),
					filters: {
						distance: data.filters.distance,
						min_rating: data.filters.min_rating,
						rating: data.filters.rating,
						subcategory: data.filters.subcategory,
						subtype: data.filters.subtype,
						tag: data.filters.typeahead_tag,
					},
				});
			});
	}

	render() {
		
		return (
			<div>
				<Filters filter_data={this.state.filters} data={this.state.dataLists} />
			</div>
		);
	}
}

export default Api;
