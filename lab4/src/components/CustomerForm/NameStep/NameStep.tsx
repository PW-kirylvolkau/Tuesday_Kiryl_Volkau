import React from 'react';

interface NameStepProps {
    onClicked: () => void;
    onNameChange: (name: string) => void;
    onLastNameChange: (lastName: string) => void;
    onEmailChange: (email: string) => void;
    firstName: string;
    lastName: string;
    email: string;
    isSubmitted: boolean;
}

const NameStep: React.FC<NameStepProps> = (props) => {
    const isFirstNameValid = (): boolean => !(props.firstName === '');
    const isLastNameValid = (): boolean => !(props.lastName === '');
    const isEmailValid = (): boolean => {
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailFormat.test(props.email);
    }

    function isValid(): boolean {
        return isFirstNameValid() && isLastNameValid() && isEmailValid();
    }

    return (
        <div className={`card m-3 ${props.isSubmitted ? 'bg-light text-secondary' : ''}`}>
            <div className="card-header">
                <h3>Name step</h3>
            </div>
            <div className="card-body">
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label" htmlFor="firstName">First name</label>
                  <div className="col-sm-3">
                      <input
                          id="firstName"
                          type="text"
                          className="form-control"
                          value={props.firstName}
                          onChange={(e) => props.onNameChange(e.target.value)}
                          placeholder="First name"
                          disabled={props.isSubmitted}
                      />
                      {!isFirstNameValid() && <small className="text-danger text-sm-center">Please input something.</small>}
                  </div>

                </div>
                <div className="form-group row">
                    <label className="col-sm-1 col-form-label" htmlFor="lastName">Last name</label>
                    <div className="col-sm-3">
                        <input
                            id="lastName"
                            type="text"
                            value={props.lastName}
                            onChange={(e) => props.onLastNameChange(e.target.value)}
                            placeholder="Last name"
                            className="form-control"
                            disabled={props.isSubmitted}
                        />
                        {!isLastNameValid() && <small className="text-danger text-sm-center">Please input something.</small>}
                    </div>
                </div>

                <div className="row form-group">
                    <label className="col-sm-1 col-form-label" htmlFor="email">Email</label>
                    <div className="col-sm-3">
                        <input
                            id="email"
                            type="text"
                            className="form-control"
                            value={props.email}
                            onChange={(e) => props.onEmailChange(e.target.value)}
                            placeholder="Email"
                            disabled={props.isSubmitted}
                        />
                        {!isEmailValid() && <small className="text-danger">Please enter a valid email.</small>}
                    </div>
                </div>
                <button
                    disabled={!isValid() || props.isSubmitted}
                    onClick={() => props.onClicked()}
                    className="btn btn-primary col-sm-3"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default NameStep;
