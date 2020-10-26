import React from 'react';

function CarListItemComponent(props) {
	return( <div>
		<p>Name: {props.name} </p>
		<p>Price: {props.price}</p>
		<input 
			type="number" 
			value={props.price} 
			onChange={e => props.onPriceChange(e, props.index)}
		/>
		<button onClick={()=>props.onDelete(props.index)}>Delete me</button>
		<hr/>
	</div>
	);
}

export default CarListItemComponent;