import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);

		
	}

	onSubmit() {
		console.log("name ", this.state.name);
	}



	render() {
		return (
			<div class='dorne-contact-area d-md-flex' id='contact'>
				<div class='contact-form-area equal-height  '>
					<div class='contact-text'>
						<h4>Login or Register</h4>
					</div>
					<div class='contact-form'>
						<div class='contact-form-title'>
							<h6>Register</h6>
						</div>
						<form action='../signUp'>
							<div class='row'>
								<div class='col-12 col-md-6'>
									<input
										type='text'
										name='fname'
										class='form-control'
										placeholder='First Name'
									/>
								</div>
								<div class='col-12 col-md-6'>
									<input
										type='text'
										name='lname'
										class='form-control'
										placeholder='Last Name'
									/>
								</div>
								<div class='col-12 col-md-6'>
									<input
										type='email'
										name='email'
										class='form-control'
										placeholder='Email Address'
									/>
								</div>
								<div class='col-12 col-md-6'>
									<input
										type='number'
										name='phone'
										class='form-control'
										placeholder='Phone No.'
									/>
								</div>
								<div class='col-12'>
									<input
										type='text'
										name='password'
										class='form-control'
										placeholder='Password'
									/>
								</div>
								<div class='col-12'>
									<input
										type='text'
										name='cpassword'
										class='form-control'
										placeholder='Confirm Password'
									/>
								</div>
								<div class='col-12'>
									<button
										type='submit'
										id='submitDetails'
										name='submitDetail'
										class='btn dorne-btn'
										onClick={this.onSubmit}>
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class=' dorne-map-area equal-height'>
					<br/>
					<br/>
					<br/>
					<br/>
					<div class='contact-text'>
						<h4>Choose your holiday type?</h4>
					</div>
					<br/>
					<section >
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
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
			</div>
		);
	}
}
export default Login;
