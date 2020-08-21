import React from "react";

class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer class='dorne-footer-area'>
					<div class='container-fluid'>
						<div class='row'>
							<div class='col-12 d-md-flex align-items-center justify-content-between'>
								<div class='footer-text'>
									<p>
										{" "}
										Developed by -<bold> Aastha Goyal </bold>
									</p>
									<p>
										Copyright &copy;
										<script>document.write(new Date().getFullYear());</script>{" "}
										All rights reserved | This template is made with{" "}
										<i class='fa fa-heart-o' aria-hidden='true'></i> by{" "}
										<a href='https://colorlib.com'>
											Colorlib
										</a>
									</p>
								</div>
								<div class='footer-social-btns'>
									<a href='#'>
										<i class='fa fa-linkedin' aria-haspopup='true'></i>
									</a>
									<a href='#'>
										<i class='fa fa-behance' aria-hidden='true'></i>
									</a>
									<a href='#'>
										<i class='fa fa-dribbble' aria-hidden='true'></i>
									</a>
									<a href='#'>
										<i class='fa fa-twitter' aria-haspopup='true'></i>
									</a>
									<a href='#'>
										<i class='fa fa-facebook' aria-haspopup='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer