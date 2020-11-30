const BASE_URL = 'http://localhost:3004/employees';

function getAllEmployees() {
    return fetch(BASE_URL).then(res => res.json());
}

module.exports = {getAllEmployees};