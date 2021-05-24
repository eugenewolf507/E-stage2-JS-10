// Your code goed here
'use strict';

async function getEmployees() {
    try {
        const response = await fetch('./mock.json');
        if (response.ok) {
            let employees = await response.json();
            console.log(employees);
            return employees;
        } else {
            throw new Error(response.status);
    }
    } catch(error) {
        console.error('Error: ', error);
    }
}

getEmployees();
