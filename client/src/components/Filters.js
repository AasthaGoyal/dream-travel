import React from "react";
import Attractions from "./Attractions";

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
			subtype: "",
			rating: "",
		};
	}

	selectionChanged = (event) => {
		if (event.target.id == "category") {
			this.setState({ category: event.target.value });
		} else if (event.target.id == "subtype") {
			this.setState({ subtype: event.target.value });
		} else if (event.target.id == "min-rating") {
			this.setState({ rating: event.target.value });
		} 
	};

	render() {
		if (this.props.filter_data.length === 0) {
			return <div> no data returned</div>;
		} else {
			let filtersProp = this.props.filter_data;
			let categoryOptions = Object.keys(filtersProp.subcategory).map((item) => (
				<option value={filtersProp.subcategory[item].label}>
					{filtersProp.subcategory[item].label}
				</option>
			));

			let typeOptions = Object.keys(filtersProp.subtype).map((item) => (
				<option value={filtersProp.subtype[item].label}>
					{filtersProp.subtype[item].label}
				</option>
			));

			let minRatings = Object.keys(filtersProp.min_rating).map((item) => (
				<option value={filtersProp.min_rating[item].label}>
					{filtersProp.min_rating[item].label}
				</option>
			));

		

			let tags = Object.keys(filtersProp.tag).map((item) => (
				<label class='custom-control custom-checkbox mb-3'>
					<input
						type='checkbox'
						id={filtersProp.tag[item].label}
						class='custom-control-input'
					/>
					<span class='custom-control-indicator'></span>
					<span class='custom-control-description'>
						{filtersProp.tag[item].label}
					</span>
				</label>
			));

			return (
				<div>
					<br />
					<br />
					<br />
					<br />
					<section class='dorne-listing-destinations-area d-md-flex'>
						<div class='d-md-flex'>
							<div class='explore-search-form'>
								<h6>What are you looking for?</h6>
								<div class='tab-content' id='nav-tabContent'>
									<div
										class='tab-pane fade show active'
										id='nav-places'
										role='tabpanel'
										aria-labelledby='nav-places-tab'>
										<form action='#' method='get'>
											Category:
											<select
												class='custom-select'
												id='category'
												onChange={this.selectionChanged}>
												{categoryOptions}
											</select>
											Subtype:
											<select
												class='custom-select'
												id='subtype'
												onChange={this.selectionChanged}>
												{typeOptions}
											</select>
											Minimum Rating:
											<select
												class='custom-select'
												id='min-rating'
												onChange={this.selectionChanged}>
												<option selected key='All'>
													{" "}
													All{" "}
												</option>
												{minRatings}
											</select>
											
											Additional Tags:
											<div class='row mt-md-5 mt-0'>
												<div class='col-12 col-xl-6'>{tags}</div>
											</div>
										</form>
									</div>
									<div
										class='tab-pane fade'
										id='nav-events'
										role='tabpanel'
										aria-labelledby='nav-events-tab'>
										<form action='#' method='get'>
											Category:
											<select
												class='custom-select'
												id='category'
												onChange={this.selectionChanged}>
												{categoryOptions}
											</select>
											Subtype:
											<select
												class='custom-select'
												id='subtype'
												onChange={this.selectionChanged}>
												{typeOptions}
											</select>
											Minimum Rating:
											<select
												class='custom-select'
												id='min-rating'
												onChange={this.selectionChanged}>
												<option selected key='All'>
													{" "}
													All{" "}
												</option>
												{minRatings}
											</select>
										
											Additional Tags:
											<div class='row mt-md-5 mt-0'>
												<div class='col-	console.log("passing the category", this.state.subtype);console.log("passing the category", this.state.subtype);12 col-xl-6'>
													{tags}
												</div>
											</div>
										</form>
									</div>
									<Attractions
										data={this.props.data}
										cat={this.state.category}
										stype={this.state.subtype}
										rat={this.state.rating}
										tag={this.state.tags}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}
	}
}

export default Filters;
