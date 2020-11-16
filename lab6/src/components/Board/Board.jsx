import React from 'react';
import { connect } from 'react-redux';
import styles from './board.module.css';

function Board(props) {

    const boardStyle = {
        gridTemplateColumns: `${props.fieldSize}px `.repeat(props.size),
        height: `${(props.fieldSize+2)*props.size}px`,
        width: `${(props.fieldSize)*props.size}px`
    };

    const cellStyle = {
        width: `${props.fieldSize}px`,
        height: `${props.fieldSize}px`,
    };

    const generateBoard = (amount) => {
        let rows = [];
        for(let i = 0; i < amount; i++) {
            for(let j = 0; j < amount; j++) {
                const isSnakeHead = (i === props.snakePosition[0] && j === props.snakePosition[1]);
                rows.push(
                    <div key={i*props.size+j}
                         className={`${styles.boardField} ${isSnakeHead ? styles.snakeHead : ''}`}
                         style={cellStyle}
                    />
                )
            }
        }
        return rows;
    }

    return(
        <div className={styles.board} style={boardStyle}>
            {generateBoard(props.size)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.boardSize,
        fieldSize: state.fieldSize,
        snakePosition: state.snakePosition
    }
}

const mapDispatchToProps = (state) => {

}

export default connect(mapStateToProps)(Board);
