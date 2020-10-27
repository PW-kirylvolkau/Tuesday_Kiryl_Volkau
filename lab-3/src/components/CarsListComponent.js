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
		this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this);
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

	onDeleteButtonClicked(index) {
		const carsChanged = [...this.state.cars].filter(car => car !== this.state.cars[index]);
		this.setState({
			cars: carsChanged
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="container">
				<input 
					type="text"
					placeholder="Search"
					onChange={this.onSearchInput} 
					className=" form-control-lg mt-3 ml-3"
				/>
				{
					this.state.cars
						.filter(car => car.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
						.map((car, index) => {
							return <CarListItemComponent
								car={car}
								index={index}
								onPriceChange={this.changePrice}
								onDelete={this.onDeleteButtonClicked}
							/>
						})
				}
			</div>
		)
	}
}

export default CarsListComponent;