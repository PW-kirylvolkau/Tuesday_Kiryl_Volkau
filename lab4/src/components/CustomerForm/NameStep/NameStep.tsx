import React from 'react';

interface NameStepProps {
    onClicked: () => void;
    onNameChange: (name: string) => void;
    onLastNameChange: (lastName: string) => void;
    onEmailChange: (email: string) => void;
    firstName: string;
    lastName: string;
    email: string;
}

const NameStep: React.FC<NameStepProps> = (props) => {
    const isFirstNameValid = ():boolean => !(props.firstName === '');
    const isLastNameValid = ():boolean => !(props.lastName === '');
    const isEmailValid = ():boolean => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailFormat.test(props.email);
    }

    function isValid(): boolean {
       return isFirstNameValid() && isLastNameValid() && isEmailValid();
    }

    return(
        <div>
            <input
                type="text"
                value={props.firstName}
                onChange={(e) => props.onNameChange(e.target.value)}
                placeholder="First name"
            />
            {!isFirstNameValid() && <span>Please input something.</span>}
            <br/>

            <input
                type="text"
                value={props.lastName}
                onChange={(e) => props.onLastNameChange(e.target.value)}
                placeholder="Last name"
            />
            {!isLastNameValid() && <span>Please input something.</span>}
            <br/>

            <input
                type="text"
                value={props.email}
                onChange={(e) => props.onEmailChange(e.target.value)}
                placeholder="Email"
            />
            {!isEmailValid() && <span>Please enter a valid email.</span>}
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
