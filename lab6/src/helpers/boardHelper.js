function isNextWall(boardSize, headPosition, step) {
    const vertical = headPosition[0] + step.y;
    const horizontal = headPosition[1] + step.x;
    return (vertical < 0 || horizontal < 0) || (vertical > boardSize-1 || horizontal > boardSize -1);
}

const applyStep = (headPosition, step)  => [headPosition[0]+step.y, headPosition[1] + step.x];

export function directionChange(state, direction, step) {
    if(!isNextWall(state.boardSize, state.snakePosition, step)) {
        return {
            ...state,
            direction: direction,
            snakePosition: applyStep(state.snakePosition, step)
        }
    }
    else {
        return {
            ...state,
            direction: direction
        }
    }
}

