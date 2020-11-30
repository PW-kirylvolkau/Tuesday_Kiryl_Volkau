import React, {useState, useEffect} from 'react';
import {getAllEmployees} from "../services/employee.service";

function CreateEmployee(employee, index) {
    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.company}</td>
            <td>{employee.email}</td>
            <td>{employee.isActive ? 'Y' : 'N'}</td>
        </tr>
    );
}

function EmployeeList(props) {
    const [employees, setEmployees] = useState(null);

    useEffect(()=>{
        getAllEmployees()
            .then(data => setEmployees(data))
            .catch(e => alert(e));
    });


    return(
        <div>
            <div className="card m-3">
                <div className="card-header">
                    <h3>Employees</h3>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Company</th>
                            <th scope="col">Email</th>
                            <th scope="col">Is active</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!employees && <p className={"text-center"}>Loading...</p>}
                        {employees && employees.map((employee, index) => {
                            return CreateEmployee(employee, index);
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;