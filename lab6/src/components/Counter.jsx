import { connect } from 'react-redux';

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
        onIncrement: () => dispatch({type: 'INCR'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
