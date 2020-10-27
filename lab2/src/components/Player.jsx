import React from 'react'

const playerStyle = {
  border: '3px solid black',
  margin: '40px',
  padding: '30px'
};

const counterStyle = {
  margin: '0px',
  display: 'inline-block'
};

const playButtonStyle = {
  float: 'right'
}

class Player extends React.Component {

  constructor(props) {
    super(props);
  }

  setToActive = (event) => {
    this.props.onButtonClicked();
    event.preventDefault();
  }

  render() {
    return (
      <div style={playerStyle}>
        <h1>Player {this.props.number}</h1>
        <p>Name: {this.props.name}</p>
        <p style={counterStyle}>Played {this.props.playCount} times.</p>
        <button style={playButtonStyle}
                disabled={this.props.isPlaying}
                onClick={this.setToActive}
                >
                {this.props.isPlaying ? 'This user is playing now.' : 'Play'}
        </button>
      </div>
    );
  }
}
export default Player;