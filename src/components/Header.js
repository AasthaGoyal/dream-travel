import React from "react";
import {NavLink} from "react-router-dom"

class Header extends React.Component {
	render() {
		return (
			<div>
				<header class='header_area' id='header'>
					<div class='container-fluid h-100'>
						<div class='row h-100'>
							<div class='col-12 h-100'>
								<nav class='h-100 navbar navbar-expand-lg'>
									<a class='navbar-brand' href='index.html'>
										<img src='img/core-img/logo.png' alt='' />
									</a>
									<button
										class='navbar-toggler'
										type='button'
										data-toggle='collapse'
										data-target='#dorneNav'
										aria-controls='dorneNav'
										aria-expanded='false'
										aria-label='Toggle navigation'>
										<span class='fa fa-bars'></span>
									</button>

									<div class='collapse navbar-collapse' id='dorneNav'>
										<ul class='navbar-nav mr-auto' id='dorneMenu'>
											<li class='nav-item active'>
												<a class='nav-link' href='index.html'>
													<NavLink to='/App'>
														{" "}
														Home <span class='sr-only'>(current)</span>
													</NavLink>
												</a>
											</li>
											<li class='nav-item dropdown'>
												<a
													class='nav-link dropdown-toggle'
													href='#'
													id='navbarDropdown'
													role='button'
													data-toggle='dropdown'
													aria-haspopup='true'
													aria-expanded='false'>
													<NavLink
														activeClassName='active'
														exact
														to='/Destination'>
														{" "}
														Destination
													</NavLink>
													<i class='fa fa-angle-down' aria-hidden='true'></i>
												</a>
												<div
													class='dropdown-menu'
													aria-labelledby='navbarDropdown'>
													<a class='dropdown-item' href='/App'>
														<NavLink to='/App'> Home</NavLink>
													</a>
													<a class='dropdown-item' href='/Trip'>
														<NavLink to='/Trip'> Plan a Trip</NavLink>
													</a>
													<a class='dropdown-item' href='plan.html'>
														<NavLink to='/Destination'> Destination</NavLink>
													</a>
													<a class='dropdown-item' href='bucketlist.html'>
														<NavLink to='/Bucketlist'> Bucketlist</NavLink>
													</a>
													<a class='dropdown-item' href='map.html'>
														<NavLink to='/Map'> Virtual Map</NavLink>
													</a>
												</div>
											</li>
											<li class='nav-item '>
												<a class='nav-link ' href='plantrip.html' role='button'>
													<NavLink activeClassName='active' exact to='/Trip'>
														{" "}
														Plan a Trip
													</NavLink>
												</a>
											</li>
											<li class='nav-item'>
												<a class='nav-link' href='bucketlist.html'>
													<NavLink
														activeClassName='active'
														exact
														to='/Bucketlist'>
														{" "}
														Bucketlist
													</NavLink>
												</a>
											</li>
										</ul>

										<div class='dorne-search-btn'>
											<a id='search-btn' href='#'>
												<i class='fa fa-search' aria-hidden='true'></i> Search
											</a>
										</div>

										<div class='dorne-signin-btn'>
											<a href='login.html'>
												<NavLink activeClassName='active' exact to='/Login'>
													{" "}
													Login or Register
												</NavLink>
											</a>
										</div>

										<div class='dorne-add-listings-btn'>
											<a href='#' class='btn dorne-btn'>
												<NavLink activeClassName='active' exact to='/Profile'>
													{" "}
													Profile
												</NavLink>
											</a>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
