const users = [
  { id: 1, name: 'moe' },
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];


function showManagementStructure(hArr, current, pad = '-'){
  let arrCopy = hArr.slice();
  if(!current){
    current = arrCopy.shift();
  }

  console.log(pad, current.name);

  const subordinates = arrCopy.filter(user => user.managerId === current.id);

  if(subordinates.length){
    pad = '   ' + pad;
    subordinates.forEach(sub => showManagementStructure(hArr, sub, pad));
  }

}

/*class EmployeeTree {
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
  printTree(padder = '') {
    let output = '';
    output += this.employee.name + '\n';
    if (this.subordinates.length) {
      padder += '       ';
      this.subordinates.forEach(sub => {
        output += padder;
        output += '-' + sub.printTree(padder);
      });
    }
    return output;
  }
}

function showManagementStructure(hArr) {
  const eTree = new EmployeeTree(hArr.shift());

  hArr.forEach(employee => {
    eTree.insert(employee);
  });

  return eTree.printTree();
}*/




