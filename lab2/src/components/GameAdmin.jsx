import React from 'react'
import Player from './Player';

class GameAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameOne: '',
			nameTwo: '',
			activePlayer: true,
			countOne: 0,
			countTwo: 0
		}

		this.handleNameOneChange = this.handleNameOneChange.bind(this);
		this.handleNameTwoChange = this.handleNameTwoChange.bind(this);

	}

	onButtonClicked = () => {
		this.setState({
			countOne: this.state.activePlayer ? ++this.state.countOne : this.state.countOne,
			countTwo: !this.state.activePlayer ? ++this.state.countTwo : this.state.countTwo,
		}, () => {
			this.setState({
				activePlayer: !this.state.activePlayer
			});
		});
	}

	handleNameOneChange(event) {
		this.setState({
			nameOne: event.target.value
		});
	}

	handleNameTwoChange(event) {
		this.setState({
			nameTwo: event.target.value
		});
	}

	render() {
		return (
			<div>
				<Player 
					name={this.state.nameOne}
					number='One'
					isPlaying={this.state.activePlayer}
					onButtonClicked={this.onButtonClicked}
					playCount={this.state.countOne}
					/>
				<Player 
					name={this.state.nameTwo}
					number='Two'
					isPlaying={!this.state.activePlayer}
					onButtonClicked={this.onButtonClicked}
					playCount={this.state.countTwo}
					/>
				<hr />
				<label>
					Player One name:
					<input type="text" value={this.state.nameOne} onChange={this.handleNameOneChange()} />
				</label>
				<br/>
				<label>
					Player Two name:
					<input type="text" value={this.state.nameTwo} onChange={this.handleNameTwoChange} />
				</label>
				{this.state.name}
			</div>
		)
	}


}

export default GameAdmin;