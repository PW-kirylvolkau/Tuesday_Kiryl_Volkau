import React from 'react';

class CarListItemComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
		this.switchMode = this.switchMode.bind(this);
	}

	switchMode() {
		this.setState((prevstate, _) => ({
			isEditing: !prevstate.isEditing
		}));
	}

	render() {
		return (<div className="card border-secondary my-3 mx-3">
			<div className="card-body">
				<div className="row">
					<div className="col-sm-2">
						<img
							alt={"Photo of " + this.props.car.name}
							src={this.props.car.image}
							className="img-thumbnail"
						/>
					</div>
					<div className="col-sm-2">
						<h4>{this.props.car.name}</h4>
					</div>
					<div className="col-sm-2">
						<p>{this.props.car.seats} seats</p>
						<p>{this.props.car.doors} doors</p>
					</div>
					<div className="col-sm-4"></div>
					<div className="col-sm-2">
						<small>Price per day:</small>
						<input
							onChange={(e) => this.props.onPriceChange(e, this.props.index)}
							type="number"
							className="form-control mb-2"
							disabled={!this.state.isEditing}
							value={this.props.car.pricePerDay}
							style={this.state.isEditing ? {
								color: 'black', 
								textAlign:'right'
							} : {
									border: "0px",
									backgroundColor: 'white',
									color: 'black',
								}}
						/> 
						<button 
							className={"btn " + (this.state.isEditing ? ' btn-success' : ' btn-primary') +  " mr-2"} 
							onClick={() => this.switchMode()}> 
								{this.state.isEditing ? 'Save' : 'Edit'} 
						</button>
						<button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.index)}>Delete </button>
					</div>
				</div>


			</div>
		</div>
		);
	}
}

export default CarListItemComponent;