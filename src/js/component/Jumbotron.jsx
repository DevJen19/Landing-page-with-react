import React from "react";

export const Jumbotron = () => {
	return (
		<div>
			<div className="jumbotron p-3 mb-2 bg-light text-dark">
				<h1 className="display-4">A Warm Welcome</h1>
				<p className="lead">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Tenetur mollitia libero quam, laudantium et porro odit minus
					perspiciatis laboriosam consectetur incidunt sunt sequi ex
					qui laborum eum maiores enim voluptatum?
				</p>
				<hr className="my-4" />
				<p></p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
};
