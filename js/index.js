// Your code goed here
'use strict';

function performanceLowStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.performance === 'low'
  );
  return resultArr;
}

function performanceAverageStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.performance === 'average'
  );
  return resultArr;
}

function performanceTopStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.performance === 'top'
  );
  return resultArr;
}

function vacationRequiredStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.last_vacation_date === undefined
  );
  return resultArr;
}

function findRMStrategy(employees) {
  const resultArr = employees.filter((employee) => employee.pool_name);
  return resultArr;
}

class WarningEmployees {
  constructor(strategy) {
    this.strategy = strategy;
    this.employeesArr = [];
  }
  setEmployeesArr(employees) {
    this.employeesArr = employees;
  }
  checkout() {
    return this.strategy(this.employeesArr);
  }
}

const performanceLowEmployees = new WarningEmployees(performanceLowStrategy);

const performanceAverageEmployees = new WarningEmployees(
  performanceAverageStrategy
);

const performanceTopEmployees = new WarningEmployees(performanceTopStrategy);

const vacationRequiredEmployees = new WarningEmployees(
  vacationRequiredStrategy
);

const rMEmployees = new WarningEmployees(findRMStrategy);

async function getEmployees() {
  try {
    const response = await fetch('./mock.json');
    if (response.ok) {
      let employees = await response.json();
      const initialEmployees = employees;
      console.log(employees);
      //  === START strategy pattern ===
      performanceLowEmployees.setEmployeesArr(initialEmployees);
      console.log(performanceLowEmployees.checkout());
      //   performanceLowEmployees.checkout();

      performanceAverageEmployees.setEmployeesArr(initialEmployees);
      console.log(performanceAverageEmployees.checkout());
      //   performanceAverageEmployees.checkout();

      performanceTopEmployees.setEmployeesArr(initialEmployees);
      console.log(performanceTopEmployees.checkout());
      //   performanceTopEmployees.checkout();

      vacationRequiredEmployees.setEmployeesArr(initialEmployees);
      console.log(vacationRequiredEmployees.checkout());
      //   vacationRequiredEmployees.checkout();

      rMEmployees.setEmployeesArr(initialEmployees);
      console.log(rMEmployees.checkout());
      //   vacationRequiredEmployees.checkout();

      //  === END strategy pattern ===
      return employees;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error('Error: ', error);
  }
}

getEmployees();
