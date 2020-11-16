import directions from "../enums/directions";
import {directionChange} from "../helpers/boardHelper";
import step from "../enums/step";
import actionTypes from "../actions/types";

const initialState = {
    count: 0,
    boardSize: 12,
    fieldSize: 50,
    snakePosition: [0,0],
    direction: directions.right
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCR: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case actionTypes.UP: {
            return directionChange(state, directions.up, step.up);
        }
        case actionTypes.DOWN: {
            return directionChange(state, directions.down, step.down)
        }
        case actionTypes.RIGHT: {
            return directionChange(state, directions.right, step.right)
        }
        case actionTypes.LEFT: {
            return directionChange(state, directions.left, step.left)
        }

        default:
            return {...state};
    }
}

export default rootReducer;
