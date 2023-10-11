import React from "react";

const MiBoton = () =>{
	const eventoBton = () =>{
		alert('Me hiciste click')
	}
	return (
		<div className="text-center bg-red-600 p-3">
			<button className="bg-slate-600 p-2 rounded-md text-white" onClick={eventoBton}>
				Hazme Click
			</button>
		</div>
	);
	
}
export default MiBoton;