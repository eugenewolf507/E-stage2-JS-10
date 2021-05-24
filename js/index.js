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
    (employee) =>
      employee.last_vacation_date === undefined &&
      employee.performance === 'low'
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

const vacationNeededEmployees = new WarningEmployees(
  findVacationIsNeededStrategy
);

const rMsPromotionNeeded = new WarningEmployees(findRMsPromotionNeededStrategy);

async function getEmployees() {
  try {
    const response = await fetch('./mock.json');
    if (response.ok) {
      let employees = await response.json();
      const initialEmployees = employees;
      //   console.log(employees);
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
      // vacationRequiredEmployees.checkout();

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

      //  *** START Composite pattern 222 ***

      class ComponentE {
        constructor(emp) {
          const { id } = emp;
          this.id = id;
        }
        getInfo() {
          console.log(`${this.id} - ${this.name}`);
        }
      }

      class Dev extends ComponentE {
        constructor(emp) {
          super(emp);
          const { name } = emp;
          this.name = name;
        }
      }

      class RM extends ComponentE {
        constructor(emp) {
          super(emp);
          const { name, pool_name } = emp;
          this.name = name;
          this.pool_name = pool_name;
          this.staff = [];
        }

        add(elem) {
          this.staff.push(elem);
        }

        getChildrenInfo() {
          return this.staff.forEach((child) => child.getInfo());
        }
      }

      let rm1 = new RM(initialEmployees[0]);
      let rm7 = new RM(initialEmployees[6]);
      let rm28 = new RM(initialEmployees[27]);
      let rm30 = new RM(initialEmployees[29]);
      let rm48 = new RM(initialEmployees[47]);
      let rm69 = new RM(initialEmployees[68]);
      let rm75 = new RM(initialEmployees[74]);
      let rm81 = new RM(initialEmployees[80]);
      let rm90 = new RM(initialEmployees[89]);
      let rm91 = new RM(initialEmployees[90]);

      let dev2 = new Dev(initialEmployees[1]);
      let dev3 = new Dev(initialEmployees[2]);
      let dev4 = new Dev(initialEmployees[3]);
      let dev5 = new Dev(initialEmployees[4]);
      let dev6 = new Dev(initialEmployees[5]);

      let dev8 = new Dev(initialEmployees[7]);
      let dev9 = new Dev(initialEmployees[8]);
      let dev10 = new Dev(initialEmployees[9]);
      let dev11 = new Dev(initialEmployees[10]);
      let dev12 = new Dev(initialEmployees[11]);
      let dev13 = new Dev(initialEmployees[12]);
      let dev14 = new Dev(initialEmployees[13]);
      let dev15 = new Dev(initialEmployees[14]);
      let dev16 = new Dev(initialEmployees[15]);
      let dev17 = new Dev(initialEmployees[16]);
      let dev18 = new Dev(initialEmployees[17]);
      let dev19 = new Dev(initialEmployees[18]);
      let dev20 = new Dev(initialEmployees[19]);
      let dev21 = new Dev(initialEmployees[20]);
      let dev22 = new Dev(initialEmployees[21]);
      let dev23 = new Dev(initialEmployees[22]);
      let dev24 = new Dev(initialEmployees[23]);
      let dev25 = new Dev(initialEmployees[24]);
      let dev26 = new Dev(initialEmployees[25]);
      let dev27 = new Dev(initialEmployees[26]);

      let dev29 = new Dev(initialEmployees[28]);

      let dev31 = new Dev(initialEmployees[30]);
      let dev32 = new Dev(initialEmployees[31]);
      let dev33 = new Dev(initialEmployees[32]);
      let dev34 = new Dev(initialEmployees[33]);
      let dev35 = new Dev(initialEmployees[34]);
      let dev36 = new Dev(initialEmployees[35]);
      let dev37 = new Dev(initialEmployees[36]);
      let dev38 = new Dev(initialEmployees[37]);
      let dev39 = new Dev(initialEmployees[38]);
      let dev40 = new Dev(initialEmployees[39]);
      let dev41 = new Dev(initialEmployees[40]);
      let dev42 = new Dev(initialEmployees[41]);
      let dev43 = new Dev(initialEmployees[42]);
      let dev44 = new Dev(initialEmployees[43]);
      let dev45 = new Dev(initialEmployees[44]);
      let dev46 = new Dev(initialEmployees[45]);
      let dev47 = new Dev(initialEmployees[46]);

      let dev49 = new Dev(initialEmployees[48]);
      let dev50 = new Dev(initialEmployees[49]);
      let dev51 = new Dev(initialEmployees[50]);
      let dev52 = new Dev(initialEmployees[51]);
      let dev53 = new Dev(initialEmployees[52]);
      let dev54 = new Dev(initialEmployees[53]);
      let dev55 = new Dev(initialEmployees[54]);
      let dev56 = new Dev(initialEmployees[55]);
      let dev57 = new Dev(initialEmployees[56]);
      let dev58 = new Dev(initialEmployees[57]);
      let dev59 = new Dev(initialEmployees[58]);
      let dev60 = new Dev(initialEmployees[59]);
      let dev61 = new Dev(initialEmployees[60]);
      let dev62 = new Dev(initialEmployees[61]);
      let dev63 = new Dev(initialEmployees[62]);
      let dev64 = new Dev(initialEmployees[63]);
      let dev65 = new Dev(initialEmployees[64]);
      let dev66 = new Dev(initialEmployees[65]);
      let dev67 = new Dev(initialEmployees[66]);
      let dev68 = new Dev(initialEmployees[67]);

      let dev70 = new Dev(initialEmployees[69]);
      let dev71 = new Dev(initialEmployees[70]);
      let dev72 = new Dev(initialEmployees[71]);
      let dev73 = new Dev(initialEmployees[72]);
      let dev74 = new Dev(initialEmployees[73]);

      let dev76 = new Dev(initialEmployees[75]);
      let dev77 = new Dev(initialEmployees[76]);
      let dev78 = new Dev(initialEmployees[77]);
      let dev79 = new Dev(initialEmployees[78]);
      let dev80 = new Dev(initialEmployees[79]);

      let dev82 = new Dev(initialEmployees[81]);
      let dev83 = new Dev(initialEmployees[82]);
      let dev84 = new Dev(initialEmployees[83]);
      let dev85 = new Dev(initialEmployees[84]);
      let dev86 = new Dev(initialEmployees[85]);
      let dev87 = new Dev(initialEmployees[86]);
      let dev88 = new Dev(initialEmployees[87]);
      let dev89 = new Dev(initialEmployees[88]);

      let dev92 = new Dev(initialEmployees[91]);
      let dev93 = new Dev(initialEmployees[92]);
      let dev94 = new Dev(initialEmployees[93]);
      let dev95 = new Dev(initialEmployees[94]);
      let dev96 = new Dev(initialEmployees[95]);
      let dev97 = new Dev(initialEmployees[96]);
      let dev98 = new Dev(initialEmployees[97]);
      let dev99 = new Dev(initialEmployees[98]);
      let dev100 = new Dev(initialEmployees[99]);

      //   to rm1
      rm1.add(dev2);
      rm1.add(dev3);
      rm1.add(dev4);
      rm1.add(dev5);
      rm1.add(dev6);
      rm1.add(rm7);
      rm1.add(dev8);
      rm1.add(dev9);
      rm1.add(dev10);
      rm1.add(dev15);
      rm1.add(dev17);
      rm1.add(dev19);
      rm1.add(dev21);
      rm1.add(dev22);
      rm1.add(dev24);
      rm1.add(dev25);
      rm1.add(dev31);
      rm1.add(dev34);
      rm1.add(dev42);
      rm1.add(dev45);
      rm1.add(dev47);
      rm1.add(rm48);
      rm1.add(dev65);
      rm1.add(dev70);
      rm1.add(dev71);
      rm1.add(dev83);
      rm1.add(dev88);
      rm1.add(dev89);
      rm1.add(dev98);

      // to rm7
      rm7.add(dev11);
      rm7.add(dev12);
      rm7.add(dev13);
      rm7.add(dev14);
      rm7.add(dev16);
      rm7.add(dev18);
      rm7.add(dev20);
      rm7.add(dev23);
      rm7.add(dev26);
      rm7.add(dev27);
      rm7.add(rm28);
      rm7.add(dev32);
      rm7.add(dev53);
      rm7.add(dev57);
      rm7.add(dev59);
      rm7.add(dev60);
      rm7.add(dev61);
      rm7.add(dev66);
      rm7.add(rm69);
      rm7.add(rm75);
      rm7.add(dev82);
      rm7.add(dev95);

      //   to rm28
      rm28.add(dev29);
      rm28.add(rm30);
      rm28.add(dev33);
      rm28.add(dev35);
      rm28.add(dev37);
      rm28.add(dev40);
      rm28.add(dev41);
      rm28.add(dev44);
      rm28.add(dev52);
      rm28.add(dev62);
      rm28.add(dev64);
      rm28.add(dev78);
      rm28.add(dev93);
      rm28.add(dev94);

      //   to rm30
      rm30.add(dev36);
      rm30.add(dev38);
      rm30.add(dev39);
      rm30.add(dev43);
      rm30.add(dev46);
      rm30.add(dev49);
      rm30.add(dev50);
      rm30.add(dev51);
      rm30.add(dev54);
      rm30.add(dev55);
      rm30.add(dev67);
      rm30.add(dev74);
      rm30.add(dev84);

      //   to rm48
      rm48.add(dev56);
      rm48.add(dev58);
      rm48.add(dev63);
      rm48.add(dev68);
      rm48.add(dev73);
      rm48.add(dev80);
      rm48.add(rm81);
      rm48.add(rm90);

      //   to rm69
      rm69.add(dev72);
      rm69.add(dev79);
      rm69.add(dev85);
      rm69.add(rm91);

      //   to rm75
      rm75.add(dev76);
      rm75.add(dev77);
      rm75.add(dev87);
      rm75.add(dev99);

      //   to rm81
      rm81.add(dev86);
      rm81.add(dev96);

      //   to rm90
      rm90.add(dev92);

      //   to rm91
      rm91.add(dev97);
      rm91.add(dev100);

      //   rm1.getChildrenInfo();
      console.log(rm1);
      //  *** END Composite pattern 222 ***

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
