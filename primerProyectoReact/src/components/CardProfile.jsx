import React from "react";

const person = {
	name: 'Hedy',
	lastName: 'Lamarr',
	imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
	dim: 90,
	telefono: 3020303
};
const CardProfile = () =>{
	return (
		<div className="text-center bg-lime-700">
				<h1 className="text-3xl font-bold underline">{person.name} {person.lastName}</h1>
				<img className="rounded-full mx-auto" src={person.imageUrl} width={person.dim} height={person.dim} alt="" />
				<p>{person.telefono}</p>
		</div>
	);
}

export default CardProfile;