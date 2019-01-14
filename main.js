/*I wasn't exaclty sure if the spec of this homework was to return a string representing the hierarchy, like the one shown in the ReadMe, or to return a data
structure representing that hierarchy. I set up my function to console log out the text string, and return a data structure with each employee having 
an array of their subordinates. 
*/
const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];

const micros = [
  {id: 1, name: 'Louie'},
  {id: 2, name: 'Alvin', managerId: 1},
  {id: 3, name: 'JP', managerId: 2},
  {id: 4, name: 'Josh', managerId: 1},
  {id: 5, name: 'Jeremy', managerId: 3},
  {id: 6, name: 'Johnny', managerId: 2},
  {id: 7, name: 'Dave', managerId: 6},
];

class EmployeeTree {
  constructor(employee) {
    this.employee = employee;
    this.subordinates = [];
  }

  insert(employee) {
    if (employee.managerId === this.employee.id) {
      this.subordinates.push(new EmployeeTree(employee));
    } else {
      this.subordinates.forEach(sub => {
        sub.insert(employee);
      });
    }
  }
}

function printTree(emp, padder = ''){
  let output = '';
  output += emp.employee.name + '\n';
  if(emp.subordinates.length){
    padder += '   '
    emp.subordinates.forEach(sub => {
      output += padder;
      output += '--' + printTree(sub, padder);
    });
  }
  return output;
}

function showManagementStructure(hArr) {
  const eTree = new EmployeeTree(hArr.shift());

  hArr.forEach(employee => {
    eTree.insert(employee);
  });

  console.log(printTree(eTree));

  return eTree;
}



