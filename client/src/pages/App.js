import React from "react";
import backgroundImage from "../img/bg-img/hero-1.jpg";
import picksImage from "../img/bg-img/hero-2.jpg";

/* global google */

class App extends React.Component {
	constructor(props) {
		super(props);

		this.autocomplete = null;

		this.state = { place: "", duration: 0 };
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch = (e) => {
		this.setState({ duration: e.target.value });
		console.log(this.state.duration);
	};

	componentDidMount() {
		var input = document.getElementById("autocomplete");
		this.autocomplete = new google.maps.places.Autocomplete(input, {
			types: ["geocode"],
		});

		this.autocomplete.addListener(
			"place_changed",
			this.fillInAddress.bind(this)
		);
	}

	btnSearch() {
		console.log("button was cliked");
		var hh = document.getElementById("priceSelected");
		console.log("option selected", hh.value);
	}

	fillInAddress() {
		const place = this.autocomplete.getPlace();

		this.setState({ place: place.formatted_address });
		console.log(this.state.place);
	}

	render() {
		return (
			<div>
				<section
					class='dorne-welcome-area bg-img bg-overlay'
					style={{ backgroundImage: "url(" + backgroundImage + ")" }}>
					<div class='container h-100'>
						<div class='row h-100 align-items-center justify-content-center'>
							<div class='col-12 col-md-10'>
								<div class='hero-content'>
									<h2> Dream Destination</h2>
									<h4>Plan you dream destination with ease</h4>
								</div>

								<div class='hero-search-form'>
									<div class='nav nav-tabs' id='heroTab' role='tablist'>
										<a
											class='nav-item nav-link active'
											id='nav-places-tab'
											data-toggle='tab'
											href='#nav-places'
											role='tab'
											aria-controls='nav-places'
											aria-selected='true'>
											Places
										</a>
									</div>

									<div class='tab-content' id='nav-tabContent'>
										<div
											class='tab-pane fade show active'
											id='nav-places'
											role='tabpanel'
											aria-labelledby='nav-places-tab'>
											<h6>What are you looking for?</h6>
											<form>
												<input id='autocomplete' placeholder='Destination' />

												<input
													type='number'
													class='form-control'
													id='duration'
													placeholder='Duration(Days)'
													onChange={this.onSearch}
												/>

												<select class='custom-select' id='priceSelected'>
													<option selected>Price Range</option>
													<option value='1'>Lowest Budget</option>
													<option value='2'>Medium Budget</option>
													<option value='3'>High Budget </option>
												</select>
												<button
													type='button'
													class='btn dorne-btn'
													onClick={this.btnSearch}>
													{/* <i class='fa fa-search pr-2' aria-hidden='true'></i>{" "} */}
													Search
												</button>
											</form>
										</div>
										<div
											class='tab-pane fade'
											id='nav-events'
											role='tabpanel'
											aria-labelledby='nav-events-tab'>
											<h6>What are you looking for?</h6>
											<form>
												<input id='autocomplete' placeholder='Destination' />

												<input
													type='number'	
													class='form-control'
													id='duration'
													placeholder='Duration(Days)'
													onChange={this.onSearch}
												/>

												<select
													class='custom-select'
													id='priceSelected'
													onSelected={this.onSelected}>
													<option selected>Price Range</option>
													<option value='1'>Lowest Budget</option>
													<option value='2'>Medium Budget</option>
													<option value='3'>High Budget </option>
												</select>
												<button
													type='button'
													class='btn dorne-btn'
													onClick={this.btnSearch}>
													{/* <i class='fa fa-search pr-2' aria-hidden='true'></i>{" "} */}
													Search
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class='dorne-catagory-area'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<div class='all-catagories'>
									<div class='row'>
										<div class='col-12 col-sm-6 col-md'>
											<div
												class='single-catagory-area wow fadeInUpBig'
												data-wow-delay='0.2s'>
												<div class='catagory-content'>
													<img src={"./img/core-img/icon-1.png"} alt='' />
													<a href='#'>
														<h6>Hotels</h6>
													</a>
												</div>
											</div>
										</div>

										<div class='col-12 col-sm-6 col-md'>
											<div
												class='single-catagory-area wow fadeInUpBig'
												data-wow-delay='0.4s'>
												<div class='catagory-content'>
													<img src='img/core-img/icon-2.png' alt='' />
													<a href='#'>
														<h6>Restaurants</h6>
													</a>
												</div>
											</div>
										</div>

										<div class='col-12 col-sm-6 col-md'>
											<div
												class='single-catagory-area wow fadeInUpBig'
												data-wow-delay='0.6s'>
												<div class='catagory-content'>
													<img src='img/core-img/icon-3.png' alt='' />
													<a href='#'>
														<h6>Shopping</h6>
													</a>
												</div>
											</div>
										</div>

										<div class='col-12 col-sm-6 col-md'>
											<div
												class='single-catagory-area wow fadeInUpBig'
												data-wow-delay='0.8s'>
												<div class='catagory-content'>
													<img src='img/core-img/icon-4.png' alt='' />
													<a href='#'>
														<h6>Beauty &amp; Spa</h6>
													</a>
												</div>
											</div>
										</div>

										<div class='col-12 col-md'>
											<div
												class='single-catagory-area wow fadeInUpBig'
												data-wow-delay='1s'>
												<div class='catagory-content'>
													<img src='img/core-img/icon-5.png' alt='' />
													<a href='#'>
														<h6>Cinema</h6>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class='dorne-about-area section-padding-0-100'>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<div class='about-content text-center'>
									<h2>
										Mark places off your Bucketlist with ease <br />
										<span>Dream Travel</span>
									</h2>
									<p>
										Always had a bucket list in mind but nithing to keep track
										of it? Well, now you have an automatic travel itenary that
										plans the trip for you according to your Destination,
										Duration of travel, Your interests and also your budget. It
										also marks off the places that you have already visited off
										your bucketlist so you can keep track of your dreams.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					class='dorne-editors-pick-area bg-img bg-overlay-9 section-padding-100'
					style={{backgroundImage: 'url('+picksImage+')'}}>
					<div class='container'>
						<div class='row'>
							<div class='col-12'>
								<div class='section-heading text-center'>
									<span></span>
									<h4>Cities you must see</h4>
									<p>Editor’s pick</p>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='col-12 col-lg-6'>
								<div
									class='single-editors-pick-area wow fadeInUp'
									data-wow-delay='0.2s'>
									<img src='img/bg-img/editor-1.jpg' alt='' />
									<div class='editors-pick-info'>
										<div class='places-total-destinations d-flex'>
											<a href='#'>South Island, New Zealand</a>
											<a href='#'>#1 In World </a>
										</div>
										<div class='add-more'>
											<a href="#"> +</a>
											
										</div>
									</div>
								</div>
							</div>
							<div class='col-12 col-lg-6'>
								<div
									class='single-editors-pick-area wow fadeInUp'
									data-wow-delay='0.4s'>
									<img src={'./img/bg-img/editor-2.jpg'} alt='' />
									<div class='editors-pick-info'>
										<div class='places-total-destinations d-flex'>
											<a href='#'>Paris, New York</a>
											<a href='#'>#2 In World</a>
										</div>
										<div class='add-more'>
											<a href='#'>
												+
											</a>
										</div>
									</div>
								</div>
								<div
									class='single-editors-pick-area wow fadeInUp'
									data-wow-delay='0.6s'>
									<img src='img/bg-img/editor-3.jpg' alt='' />
									<div class='editors-pick-info'>
										<div class='places-total-destinations d-flex'>
											<a href='#'>London</a>
											<a href='#'>#5 In World</a>
										</div>
										<div class='add-more'>
											<a href='#'>
												+
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
