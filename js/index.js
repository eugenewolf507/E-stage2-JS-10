// Your code goed here
'use strict';

document.getElementById('defaultOpen').click();

function openTab(evt, cityName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

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
