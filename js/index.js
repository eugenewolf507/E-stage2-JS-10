// Your code goed here
'use strict';

async function getEmployees() {
    try {
        const response = await fetch('./mock.json');
        if (response.ok) {
            let employees = await response.json();
            console.log(employees);

            const myRm = new Rm();
            employees.forEach(employee => 
            myRm.add(new Employee(employee)));
            
            console.log('myRm: ', myRm);
            console.log(`myRm: ${myRm}, salary is ${myRm.getSalary()}`);

            const sortByRmId = (a, b) => a.rm_id - b.rm_id;
            myRm.employees.sort(sortByRmId);
            
            return employees;
        } else {
            throw new Error(response.status);
    }
    } catch(error) {
        console.error('Error: ', error);
    }
}

getEmployees();

// Composite pattern
class Employees {
    getId() {
		return this.id;
	}

    getRmId() {
		return this.rm_id;
	}

    getPoolName() {
		return this.pool_name;
	}

	getName() {
		return this.name;
	}

    getSalary() {
		return this.salary || 0;
	}

    setId(id) {
		this.id = id;
	}

    setRmId(rm_id) {
		this.rm_id = rm_id;
	}

    setPoolName(pool_name) {
		this.pool_name = pool_name || 0;
	}

	setName(name) {
        // console.log('name: ', name);
		this.name = name;
	}

	setSalary(salary) {
        // console.log('salary: ', salary);
		this.salary = salary;
	}
}

class Employee extends Employees {
	constructor(obj) {
		super();
        // console.log(obj.salary);
        this.setId(obj.id);
        this.setRmId(obj.rm_id);
        this.setPoolName(obj.pool_name);
		this.setName(obj.name);
		this.setSalary(obj.salary);
	}
}

class Composite extends Employees {
	constructor() {
		super();
		this.employees = [];
	}

	add(employee) {
		this.employees.push(employee);
	}

	getSalary() {
		return this.employees
			.map(employee => employee.getSalary())
			.reduce((a, b) => a + b);
	}
}

class Rm extends Composite {
	constructor() {
		super();
		this.setName('RM');
	}
}

// const myRm = new Rm();
// myRm.add(employees.forEach(employee => new Employee(employee)));

// console.log('myRm: ', myRm);