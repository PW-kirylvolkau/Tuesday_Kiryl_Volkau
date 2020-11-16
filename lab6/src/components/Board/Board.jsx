import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styles from './board.module.css';
import keys from "../../enums/keys";

function Board(props) {

    useEffect(() => {
        document.addEventListener("keydown", (event) => {

            switch (event.keyCode) {
                case keys.KEY_LEFT:
                    event.preventDefault();
                    props.onKeyLeft();
                    break;
                case keys.KEY_DOWN:
                    event.preventDefault();
                    props.onKeyDown();
                    break;
                case keys.KEY_RIGHT:
                    event.preventDefault();
                    props.onKeyRight();
                    break;
                case keys.KEY_UP:
                    event.preventDefault();
                    props.onKeyUp();
                    break;
                default:
                    break;
            }
        })
    }, []);

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
        <div>
            <h3>DIRECTION: {props.direction} </h3>
            <div className={styles.board} style={boardStyle} >
                {generateBoard(props.size)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        size: state.boardSize,
        fieldSize: state.fieldSize,
        snakePosition: state.snakePosition,
        direction: state.direction
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onKeyLeft: () => dispatch({type: 'LEFT'}),
        onKeyDown: () => dispatch({type: 'DOWN'}),
        onKeyRight: () => dispatch({type: 'RIGHT'}),
        onKeyUp: () => dispatch({type: 'UP'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
