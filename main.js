const users = [
	{ id: 1, name: 'moe' },
	{ id: 2, name: 'larry', managerId: 1},
	{ id: 3, name: 'curly', managerId: 2 },
	{ id: 4, name: 'shep', managerId: 1 },
	{ id: 5, name: 'groucho', managerId: 4}
];

class EmployeeTree{
    constructor(employee){
        this.employee = employee;
        this.name = employee.name;
        this.subordinates = [];
    }
    
    insert(employee){
      if(employee.managerId === this.employee.id){
        this.subordinates.push(new EmployeeTree(employee));
      }else{
        this.subordinates.forEach(sub =>{
          sub.insert(employee);
        });
      }
    }
}

function showManagementStructure(hArr){
    const eTree = new EmployeeTree(hArr.shift());

    hArr.forEach(employee => {
        eTree.insert(employee);
    });

    return eTree
}

const myTree = showManagementStructure(users);


function printTree(employee){
  let output = '';

  output += `${employee.name} `;
  if(employee.subordinates.length){
    output += `: [`;
    output += employee.subordinates.map(sub => printTree(sub)).join(' ') + ']';
  }



  return output;
}

printTree(myTree);