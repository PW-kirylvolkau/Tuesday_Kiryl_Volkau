import React from 'react';

interface NameStepProps {
    onClicked: () => void,
    onNameChange: (name: string) => void,
    firstName: string,
    lastName: string
};

const NameStep: React.FC<NameStepProps> = (props) => {
    function isValid(): boolean {
        if(props.firstName === '') {
            return false;
        }
        return true;
    }

    return(
        <div>
            <p>Name step.</p>
            <p>Name: {props.firstName}</p>
            <input
                type="text"
                value={props.firstName}
                onChange={(e) => props.onNameChange(e.target.value)}
                placeholder="First name"
            />
            <br/>
            <button
                onClick={() => props.onClicked()}
                disabled={!isValid()}
            >
                Next
            </button>
        </div>
    );
}

export default NameStep;
