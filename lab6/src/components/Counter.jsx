import React from 'react';
import { connect } from 'react-redux';
import actionTypes from "../actions/types";

function Counter(props) {
    return(
        <div>
            <p>Count: {props.ctr}</p>
            <button onClick={props.onIncrement}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCR})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
