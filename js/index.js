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

const warningEmployeesTable = document.querySelector('#warningEmployeesTable');

// function performanceLowStrategy(employees) {
//   const resultArr = employees.filter(
//     (employee) => employee.performance === 'low'
//   );
//   return resultArr;
// }

// function performanceAverageStrategy(employees) {
//   const resultArr = employees.filter(
//     (employee) => employee.performance === 'average'
//   );
//   return resultArr;
// }

// function performanceTopStrategy(employees) {
//   const resultArr = employees.filter(
//     (employee) => employee.performance === 'top'
//   );
//   return resultArr;
// }

// function vacationRequiredStrategy(employees) {
//   const resultArr = employees.filter(
//     (employee) => employee.last_vacation_date === undefined
//   );
//   return resultArr;
// }

function findVacationIsNeededStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.last_vacation_date === undefined && employee.performance === 'low'
  );
  return resultArr;
}

// function findRMStrategy(employees) {
//   const resultArr = employees.filter((employee) => employee.pool_name);
//   return resultArr;
// }

function findRMsPromotionNeededStrategy(employees) {
  const resultArr = employees.filter(
    (employee) => employee.pool_name && employee.performance === 'top'
    );
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

// const performanceLowEmployees = new WarningEmployees(performanceLowStrategy);

// const performanceAverageEmployees = new WarningEmployees(
//   performanceAverageStrategy
// );

// const performanceTopEmployees = new WarningEmployees(performanceTopStrategy);

// const vacationRequiredEmployees = new WarningEmployees(
//   vacationRequiredStrategy
// );

// const rMEmployees = new WarningEmployees(findRMStrategy);

const vacationNeededEmployees = new WarningEmployees(findVacationIsNeededStrategy);

const rMsPromotionNeeded = new WarningEmployees(findRMsPromotionNeededStrategy);

async function getEmployees() {
  try {
    const response = await fetch('./mock.json');
    if (response.ok) {
      let employees = await response.json();
      const initialEmployees = employees;
      console.log(employees);
      //  === START strategy pattern ===
      // performanceLowEmployees.setEmployeesArr(initialEmployees);
      // console.log(performanceLowEmployees.checkout());
      //   performanceLowEmployees.checkout();

      // performanceAverageEmployees.setEmployeesArr(initialEmployees);
      // console.log(performanceAverageEmployees.checkout());
      //   performanceAverageEmployees.checkout();

      // performanceTopEmployees.setEmployeesArr(initialEmployees);
      // console.log(performanceTopEmployees.checkout());
      //   performanceTopEmployees.checkout();

      // vacationRequiredEmployees.setEmployeesArr(initialEmployees);
      // console.log(vacationRequiredEmployees.checkout());
      //   vacationRequiredEmployees.checkout();

      // rMEmployees.setEmployeesArr(initialEmployees);
      // console.log(rMEmployees.checkout());
      // //   vacationRequiredEmployees.checkout();

      // --- For Eugene!!! ---
      // vacationNeededEmployees.setEmployeesArr(initialEmployees);
      // console.log(vacationNeededEmployees.checkout());
      // renderTableRows(vacationNeededEmployees.checkout());
      //   vacationRequiredEmployees.checkout();

      // --- For Oleh!!! ---
      rMsPromotionNeeded.setEmployeesArr(initialEmployees);
      console.log(rMsPromotionNeeded.checkout());
      renderTableRows(rMsPromotionNeeded.checkout());
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

// --- For Eugene!!! ---
function renderTableRows(array) {
  warningEmployeesTable.insertAdjacentHTML('afterbegin', 
  `
      <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Performance</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      `);
  warningEmployeesTable.lastElementChild.insertAdjacentHTML('beforeend', 
  array.reduce((acc, item) => acc +      
      `
      <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.performance}</td>
      </tr>
      `, '')
  );
}

// --- For Oleh!!! ---
// function renderTableRows(array) {
//   const tbody = array.reduce((acc, item) => acc +      
//   `
//   <tr>
//       <td>${item.id}</td>
//       <td>${item.name}</td>
//       <td>${item.performance}</td>
//       <td>${item.salary}</td>
//       <td>${item.pool_name}</td>
//   </tr>
//   `, '')
//   warningEmployeesTable.insertAdjacentHTML('afterbegin', 
//   `
//       <thead>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Performance</th>
//             <th>Salary</th>
//             <th>Pool name</th>
//         </tr>
//       </thead>
//       <tbody>
//       </tbody>
//       `);
//   warningEmployeesTable.lastElementChild.insertAdjacentHTML('beforeend', tbody);
// }
