# Lab 6
# NOTE : the lab was finished by 21.30, Monday 16.11.2020, Warsaw time,
To run this app clone the code and do:
* `npm i `
* `npm start`



## Stages 
1. React app connected to the `redux` store and `redux-dev-tools`. Done with sample `Counter` component, which can be simply uncommented in the `App.js` component.
2. Initial state is set to board representation. The board is represented via following properties:
    * `boardSize` (the board is square, so we need only one dimension).
    * `snakePosition` (2-element array keeping position of the head)
    * `fieldSize` (amount of pixels for one cell)
    * `direction` (direction in which snake is going. Initially set to right).
    * Also, board could be represented as a square matrix, where cell containing `0` is an empty field, `1` - snake body, `2` - snake head.
3. Board component is built and connected to the `redux` store.
4. Arrow key presses are handled, the only possible problem is usage of deprecated `event.keyCode`. The last pressed arrow sets the direction, which is displayed above the board.
5. When the snake moves the board representation changes (changes the position of the head of the snake). It was not specifically told in this lab to implement a long snake, however, it could be easily done via storing additionally snake "break" points (the point is which snake body is in different direction, e.g. snake body is not straight).

