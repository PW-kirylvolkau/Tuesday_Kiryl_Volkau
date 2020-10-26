import React from 'react';
import data from '../data/cars';
import CarListItemComponent from './CarListItemComponent';

class CarsListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: data
		};
		this.changePrice = this.changePrice.bind(this);
	}

	changePrice(event, index){
		const carsChanged = [...this.state.cars];
		console.log(carsChanged);
		console.log(index);
		carsChanged[index].pricePerDay = event.target.value;
		this.setState({
			cars: carsChanged
		});
	}

	render() {
		console.log('jsx', this.state)
		return(
			<div>
				{
					this.state.cars.map( (car, index) => {
						return <CarListItemComponent name={car.name} price={car.pricePerDay} index={index} onPriceChange={this.changePrice}/>
					})
				}
			</div>
		)
	}
}

export default CarsListComponent;