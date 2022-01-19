import React from "react";

export const Card = () => {
	return (
		<div
			className="card text-center mx-1 my-5 p-0"
			style={{ width: "17rem" }}>
			<img
				src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dignissimos illum doloremque eos commodi dolore aperiam
					ipsam laudantium vero illo voluptatibus maiores, a ea atque
					incidunt iusto quia cum ullam aliquam!
				</p>
			</div>
			<div className="card-footer">
				<button type="button" className="btn btn-primary">
					Find Out More!
				</button>
			</div>
		</div>
	);
};
