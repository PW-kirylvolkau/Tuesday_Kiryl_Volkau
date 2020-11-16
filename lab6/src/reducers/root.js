// import {combineReducers} from 'redux';
import directions from "../enums/directions";

const initialState = {
    count: 0,
    boardSize: 12,
    fieldSize: 50,
    snakePosition: [0,0],
    direction: directions.right
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'UP': {
            return {
                ...state,
                direction: directions.up
            }
        }
        case 'DOWN': {
            return {
                ...state,
                direction: directions.down
            }
        }
        case 'RIGHT': {
            return {
                ...state,
                direction: directions.right
            }
        }
        case 'LEFT': {
            return {
                ...state,
                direction: directions.left
            }
        }

        default:
            return {...state};
    }
}

export default rootReducer;
