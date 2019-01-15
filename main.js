const users = [
  { id: 2, name: 'larry', managerId: 1 },
  { id: 3, name: 'curly', managerId: 2 },
  { id: 1, name: 'moe' },
  { id: 4, name: 'shep', managerId: 1 },
  { id: 5, name: 'groucho', managerId: 4 },
];


function showManagementStructure(hArr, current, pad = ''){
  if(!current){
    current = hArr.filter(user => !user.managerId);
    console.log(current.name);
    pad += '-'
  } else{
    console.log(pad, current.name);
  }

  const subordinates = hArr.filter(user => user.managerId === current.id);

  if(subordinates.length){
    pad = '   ' + pad;
    subordinates.forEach(sub => showManagementStructure(hArr, sub, pad));
  }
}