export function isNextWall(boardSize, headPosition, step) {
    const vertical = headPosition[0] + step.y;
    const horizontal = headPosition[1] + step.x;
    return (vertical < 0 || horizontal < 0) || (vertical > boardSize-1 || horizontal > boardSize -1);
}

export const applyStep = (headPosition, step)  => [headPosition[0]+step.y, headPosition[1] + step.x];

