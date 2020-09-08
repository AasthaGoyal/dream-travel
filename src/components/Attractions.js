import React from "react";


class Attractions extends React.Component {
	constructor(props) {
		super(props);
		this.state = { final_results: [] };
	}

	comoponentDidMount() {
		this.getData();
	}

	getData() {
		let r1 = [], r2=[], r3=[], r4=[];
		this.props.data.map((res) => {
			this.props.cat &&
				res.subcategory &&
				res.subcategory.map((t) => {
					if ([t.name] == this.props.cat) {
						r1.push(res);
					}
				});

			this.props.stype &&
				res.subtype &&
				res.subtype.map((t) => {
					if ([t.name] == this.props.stype) {
						r2.push(res);
					}
				});
		
			if(this.props.rat &&
			res.rating && 
				res.rating >= this.props.rat ){
					r3.push(res)
				}
		});

		console.log("r1 ", r1);
		console.log("r2 ", r2);
		console.log("r3 ", r3);
		let results = r1.filter(function (o1) {
			return r2.some(function (o2) {
				return r3.some(function (o3) {
					return o1.id === o2.id === o3.id
				});
			});
		});

		console.log('the final results', results);
		this.setState({ final_results: results})
		
	}

	render() {
	
		
		console.log(this.state.final_results);

		if (final_results.length === 0) {
			return <div> no data returned</div>;
		} else {
			let Result = final_results.map((res) => {
				return (
					<div class='col-12 col-sm-6 col-lg-4'>
						<div class='single-features-area '>
							<img src={res.photo && res.photo.images.large.url} alt='' />

							<div class='price-start'>
								<p>price</p>
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
						<div class='row'> {Result}</div>
					</div>
				</div>
			);
		}
	}
}

export default Attractions;
