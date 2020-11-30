import React, {useState} from 'react';
import {addEmployee} from '../services/employee.service';

function EmployeeForm(props) {
    const [name, setName] = useState(null);
    const [company, setCompany] = useState(null);
    const [age, setAge] = useState();
    const [email, setEmail] = useState(null);
    const [isActive, setIsActive] = useState();

    // UI related state
    const [adding, setAdding] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const onFormShowClick = (e) => {
        e.preventDefault();
        setAdding(!adding);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onAgeChange = (e) => {
        setAge(e.target.value);
    };

    const onCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onActiveChange = () => {
        setIsActive(!isActive);
    };

    const onSubmitButtonClick = (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            company: company,
            age: age,
            email: email,
            isActive: isActive
        };
        setSubmitting(true)
        addEmployee(payload)
            .then(() => setSubmitting(false))
            .then(props.setUpd(true))
            .catch(console.log);

        clearForm();



    };

    const clearForm = () => {
        setIsActive(false);
        setEmail('');
        setCompany('');
        setName('');
        setAge('');
    };

    return(
            <div className="col-sm-4 mx-1 my-3">
                <div className={"card"}>
                    <div className="card-body">
                        {(!adding && !submitting) && <button className={"btn btn-success"} onClick={onFormShowClick}>
                            Add employee
                        </button>}
                        {(adding && !submitting) &&
                        <form>
                            <input type="text" className={"form-control m-2"} value={name}
                                   placeholder={"Name"} onChange={onNameChange}/>
                            <input type="text" className={"form-control m-2"} value={company}
                                   placeholder={"Company"} onChange={onCompanyChange}/>
                            <input type="number" className={"form-control m-2"} value={age}
                                   placeholder={"Age"} onChange={onAgeChange}/>
                            <input type="email" className={"form-control m-2"} value={email}
                                   placeholder={"Email"} onChange={onEmailChange}/>
                            <input type="checkbox" className={"m-2"} id={"active"} onChange={onActiveChange} checked={isActive}/>
                            <label htmlFor="Active">Is active</label> <br/>
                            <button className={"btn btn-success m-2"} onClick={onSubmitButtonClick} >Submit</button>
                            <button className={"btn btn-danger m-2"} onClick={onFormShowClick}>Cancel</button>
                        </form>
                        }
                        {submitting && <p className={"text-secondary"}>Adding...</p>}
                    </div>
                </div>
            </div>
    )
}

export default EmployeeForm;