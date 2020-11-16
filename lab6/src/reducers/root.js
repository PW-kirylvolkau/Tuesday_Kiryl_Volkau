// import {combineReducers} from 'redux';
import directions from "../enums/directions";
import {isNextWall, applyStep} from "../helpers/boardHelper";
import step from "../enums/step";

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
            if(!isNextWall(state.boardSize, state.snakePosition, step.up)) {
                return {
                    ...state,
                    direction: directions.up,
                    snakePosition: applyStep(state.snakePosition, step.up)
                }
            }
            else {
                return {
                    ...state,
                    direction: directions.up
                }
            }
        }
        case 'DOWN': {
            if(!isNextWall(state.boardSize, state.snakePosition, step.down)) {
                return {
                    ...state,
                    direction: directions.down,
                    snakePosition: applyStep(state.snakePosition, step.down)
                }
            }
            else {
                return {
                    ...state,
                    direction: directions.down
                }
            }
        }
        case 'RIGHT': {
            if(!isNextWall(state.boardSize, state.snakePosition, step.right)) {
                return {
                    ...state,
                    direction: directions.right,
                    snakePosition: applyStep(state.snakePosition, step.right)
                }
            }
            else {
                return {
                    ...state,
                    direction: directions.right
                }
            }
        }
        case 'LEFT': {
            if(!isNextWall(state.boardSize, state.snakePosition, step.left)) {
                return {
                    ...state,
                    direction: directions.left,
                    snakePosition: applyStep(state.snakePosition, step.left)
                }
            }
            else {
                return {
                    ...state,
                    direction: directions.left
                }
            }
        }

        default:
            return {...state};
    }
}

export default rootReducer;
