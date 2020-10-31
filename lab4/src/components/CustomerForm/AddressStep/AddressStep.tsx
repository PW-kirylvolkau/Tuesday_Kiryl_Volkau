import React from 'react';

const AddressStep: React.FC<{onClicked: () => void}> = ({onClicked}) => {
    return(
        <div>
            <p>Address step.</p>
            <button onClick={() => onClicked()}>Next</button>
        </div>
    );
}

export default AddressStep;
