import React from 'react';
import data from '../data/cars';
import CarListItemComponent from './CarListItemComponent';

class CarsListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cars: data,
			searchValue: ""
		};
		this.changePrice = this.changePrice.bind(this);
		this.onSearchInput = this.onSearchInput.bind(this);
	}

	changePrice(event, index) {
		const carsChanged = [...this.state.cars];
		carsChanged[index].pricePerDay = event.target.value;
		this.setState({
			cars: carsChanged
		});
	}

	onSearchInput(e) {
		this.setState({
			searchValue: e.target.value
		});
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<input type="text" placeholder="Name of the car"  onChange={this.onSearchInput}/>
				{
					this.state.cars
						.filter(car => car.name.toLowerCase().includes(this.state.searchValue))
						.map((car, index) => {
							return <CarListItemComponent
								name={car.name}
								price={car.pricePerDay}
								index={index}
								onPriceChange={this.changePrice}
							/>
						})
				}
			</div>
		)
	}
}

export default CarsListComponent;