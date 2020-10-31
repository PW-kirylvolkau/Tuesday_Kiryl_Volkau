import React from 'react';

const NameStep: React.FC<{onClicked: () => void}> = ({onClicked}) => {

    return(
        <div>
            <p>Name step.</p>
            <button onClick={() => onClicked()}>Next</button>
        </div>
    );
}

export default NameStep;
