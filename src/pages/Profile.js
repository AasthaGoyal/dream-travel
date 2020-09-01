import React from "react";

class Profile extends React.Component {
	render() {
		return (
			<div>
				<div class='dorne-contact-area d-md-flex' id='contact'>
					<div class='contact-form-area equal-height'>
						<div class='contact-text'>
							<h4>Hello User</h4>

							<div class='contact-info d-lg-flex'>
								<div class='single-contact-info'>
									<h6>
										<i class='fa fa-map-signs' aria-hidden='true'></i> Main
										Avenue Soho, NY
									</h6>
									<h6>
										<i class='fa fa-map-signs' aria-hidden='true'></i> No. 25-33
									</h6>
								</div>
								<div class='single-contact-info'>
									<h6>
										<i class='fa fa-envelope-o' aria-hidden='true'></i>{" "}
										contact@yourbusiness.com
									</h6>
									<h6>
										<i class='fa fa-phone' aria-hidden='true'></i> +34 567 22478
										49567
									</h6>
								</div>
							</div>
						</div>
					</div>

					<div class='dorne-map-area equal-height'>
						<div id='googleMap'></div>
					</div>
					{/* <div class="gm-err-container"><div class="gm-err-content"><div class="gm-err-icon"><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" draggable="false" style="user-select: none;"></div><div class="gm-err-title">Sorry! Something went wrong.</div><div class="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div> */}
				</div>
                <h4> Your Preferred Adventures </h4>
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
													<img src='img/core-img/icon-1.png' alt='' />
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
			</div>
		);
	}
}

export default Profile;
