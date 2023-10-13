import React from "react";

export default function ProfileCard({ name, handle, img, description }) {
	return (<div className="card">
		<div className="card-image">
			<figure className="image is-1by1">
				<img src={img} alt={name} />
			</figure>
		</div>
		<div className="card-content">
			<div className="media-content">
				<p className="title is-4">{name}</p>
				<p className="subtitle is-6">{handle}</p>
				<p className="content is-6">{description}</p>
			</div>
		</div>
	</div>
	)
};


