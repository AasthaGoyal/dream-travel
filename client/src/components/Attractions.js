import React from "react";

class Attractions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
			subtype: "",
			distance: "",
			rating: "",
			rest_object: this.props.data,
		};
		this.selectionChanged = this.selectionChanged.bind(this);
		this.filterResults = this.filterResults.bind(this);
	}

	selectionChanged = (event) => {
		if (event.target.id == "category") {
			console.log("category state");
			this.setState({ category: event.target.value });
		} else if (event.target.id == "subtype") {
			console.log("subtype state");
			this.setState({ subtype: event.target.value });
		} else if (event.target.id == "min-rating") {
			console.log("rating state");
			this.setState({ rating: event.target.value });
		} else if (event.target.id == "distance") {
			console.log("distance state");
			this.setState({ distance: event.target.value });
		}
		this.filterResults();
	};

	filterResults() {
		
		let r1 = [],
			r2 = [],
			r3 = [],
			r4 = [],
			result = [];

		

		this.props.data.map((res) => {
			this.state.category &&
				res.subcategory &&
				res.subcategory.map((t) => {
					if ([t.name] == this.state.category) {
						r1.push(res);
					}
				});
			this.state.subtype &&
				res.subtype &&
				res.subtype.map((t) => {
					if ([t.name] == this.state.subtype) {
						r2.push(res);
					}
				});
			this.state.distance &&
				res.distance &&
				res.distance.map((t) => {
					if ([t.name] == this.state.distance) {
						r3.push(res);
					}
				});
			this.state.rating &&
				res.min_rating &&
				res.min_rating.map((t) => {
					if ([t.name] == this.state.distance) {
						r4.push(res);
					}
				});
		});

		// result = r1.filter(function (o1) {
		// 	return r2.some(function (o2) {
		// 		return r3.some(function (o3) {
		// 			return o1.id === o2.id === o3.id
		// 		});
		// 	});
		// });
		result = r1;
		this.setState({ rest_object: result });
	}

	render() {

	
		if (this.props.data.length === 0) {
			return <div> no data returned</div>;
		} else {
			let filtersProp = this.props.filters;
			let categoryOptions = Object.keys(filtersProp.subcategory).map((item) => (
				<option key={filtersProp.subcategory[item].label}>
					{filtersProp.subcategory[item].label}
				</option>
			));

			let typeOptions = Object.keys(filtersProp.subtype).map((item) => (
				<option key={filtersProp.subtype[item].label}>
					{filtersProp.subtype[item].label}
				</option>
			));

			let minRatings = Object.keys(filtersProp.min_rating).map((item) => (
				<option key={filtersProp.min_rating[item].label}>
					{filtersProp.min_rating[item].label}
				</option>
			));

			let distance = Object.keys(filtersProp.distance).map((item) => (
				<option key={filtersProp.distance[item].label}>
					{filtersProp.distance[item].label}
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

			let Result = this.props.data.map((res) => {
				let sub = res.subcategory && res.subcategory.map((t) => [t.name]);

				return (
					<div class='col-12 col-sm-6 col-lg-4'>
						<div class='single-features-area '>
							<img src={res.photo && res.photo.images.large.url} alt='' />

							<div class='price-start'>
								<p>{sub}</p>
							</div>
							<div class='feature-content d-flex align-items-center justify-content-between'>
								<div class='feature-title'>
									<h5>{res.name}</h5>
									<p>{res.rating}</p>
								</div>
								<div class='feature-favourite'>
									<a href='#'>
										<i class='fa fa-heart-o' aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			});

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
											Distance:
											<select
												class='custom-select'
												id='distance'
												onChange={this.selectionChanged}>
												{distance}
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
											Distance:
											<select
												class='custom-select'
												id='distance'
												onChange={this.selectionChanged}>
												{distance}
											</select>
											Additional Tags:
											<div class='row mt-md-5 mt-0'>
												<div class='col-12 col-xl-6'>{tags}</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						{/* </section>
					<section class='dorne-listing-destinations-area section-padding-100-50'> */}
						<div class='container dorne-listing-destinations-area'>
							<div class='row'>
								<div class='col-12'>
									<div class='section-heading dark text-center'>
										<span></span>
										<h4>Featured destinations</h4>
										<p>Based on your choice </p>
									</div>
								</div>
							</div>
							<div class='row'>{Result}</div>
						</div>
					</section>
				</div>
			);
		}
	}
}

export default Attractions;
