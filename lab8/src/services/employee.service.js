const BASE_URL = 'http://localhost:3004/employees';

function getAllEmployees() {
    return fetch(BASE_URL).then(res => res.json());
}

function addEmployee(payload) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

module.exports = {getAllEmployees, addEmployee};