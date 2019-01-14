const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
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

function printTree(emp, padder = '') {
  let output = '';
  output += emp.employee.name + '\n';
  if (emp.subordinates.length) {
    padder += '       ';
    emp.subordinates.forEach(sub => {
      output += padder;
      output += '-' + printTree(sub, padder);
    });
  }
  return output;
}

function showManagementStructure(hArr) {
  const eTree = new EmployeeTree(hArr.shift());

  hArr.forEach(employee => {
    eTree.insert(employee);
  });

  return printTree(eTree);
}



