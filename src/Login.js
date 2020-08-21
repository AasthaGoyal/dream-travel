import React from "react";

class Login extends React.Component {
	render() {
		return (
			<div>
				<div class='contact-form-area   '>
					<div class='contact-text'>
						<h4>Login or Register</h4>
					</div>
					<div class='contact-form'>
						<div class='contact-form-title'>
							<h6>Register</h6>
						</div>
						<form action='#'>
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
										name='Phone'
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
									<button type='submit' class='btn dorne-btn'>
										Register
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;
